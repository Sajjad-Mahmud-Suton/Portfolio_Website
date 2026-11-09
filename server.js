/**
 * Universal Portfolio Server
 * Serves Modern, Classic, Admin, and Legacy assets
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const BASE_DIR = __dirname;

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.jfif': 'image/jpeg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let pathname = decodeURIComponent(parsedUrl.pathname);

    // Routing shortcuts
    if (pathname === '/') {
        pathname = '/index.html';
    } else if (pathname === '/classic') {
        pathname = '/classic.html';
    } else if (pathname === '/modern') {
        pathname = '/modern.html';
    } else if (pathname === '/admin') {
        pathname = '/admin.html';
    }

    let filePath = path.join(BASE_DIR, pathname);

    // If file doesn't exist directly, check fallback in src/ for legacy links
    if (!fs.existsSync(filePath)) {
        const srcPath = path.join(BASE_DIR, 'src', pathname);
        const srcHtmlPath = path.join(BASE_DIR, 'src', pathname + '.html');
        if (fs.existsSync(srcPath)) {
            filePath = srcPath;
        } else if (fs.existsSync(srcHtmlPath)) {
            filePath = srcHtmlPath;
        }
    }

    // Security check - prevent directory traversal
    try {
        const resolvedPath = path.resolve(filePath);
        if (!resolvedPath.startsWith(path.resolve(BASE_DIR))) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            res.end('Access denied');
            return;
        }
    } catch (e) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Bad Request');
        return;
    }

    // Read and serve file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`<h1>404 - Not Found</h1><p>Requested: ${pathname}</p>`);
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error: ' + err);
            }
        } else {
            const ext = path.extname(filePath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`✅ Modern Creative Developer Portfolio Server running at: http://localhost:${PORT}`);
    console.log(`🌐 Modern:  http://localhost:${PORT}/modern`);
    console.log(`📜 Classic: http://localhost:${PORT}/classic`);
    console.log(`🔒 Admin:   http://localhost:${PORT}/admin`);
});
