/**
 * Simple HTTP Server for Portfolio Website
 * Serves files correctly from src folder
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
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // Remove leading slash
    if (pathname === '/') {
        pathname = '/src/index.html';
    } else if (pathname.startsWith('/src/')) {
        // Path already has /src/, keep it
    } else if (!pathname.startsWith('/assets') && !pathname.startsWith('/css') && !pathname.startsWith('/js')) {
        // If path doesn't start with special directories, assume it's in src/
        if (!pathname.includes('.')) {
            pathname = `/src${pathname}.html`;
        } else {
            pathname = `/src${pathname}`;
        }
    }

    // Build full file path
    let filePath = path.join(BASE_DIR, pathname);

    // Security check - prevent directory traversal
    const realPath = fs.realpathSync(BASE_DIR);
    if (!fs.realpathSync(filePath).startsWith(realPath)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('Access denied');
        return;
    }

    // Read and serve file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`<h1>404 - File Not Found</h1><p>Requested: ${pathname}</p><p>Full path: ${filePath}</p>`);
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error: ' + err);
            }
        } else {
            // Determine content type
            const ext = path.extname(filePath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';

            // Set response headers
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`✅ Portfolio Server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${BASE_DIR}`);
    console.log(`🌐 Open http://localhost:${PORT} in your browser`);
});
