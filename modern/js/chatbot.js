/**
 * SAJJAD MAHMUD® - "ASK SAJJAD AI"
 * Strictly 100% Free Client-Side Knowledge Engine & Conversational Agent
 * Zero External Paid APIs | Zero Cost | Zero Leaked Keys | Instant & Privacy-First
 */

(function initAskSajjadAI() {
  const KNOWLEDGE_BASE = [
    {
      keywords: ['who', 'sajjad', 'about', 'bio', 'intro', 'background', 'identity', 'profile', 'suton'],
      response: `Md. Sajjad Mahmud Suton is a Creative Developer, Web Developer, and Problem Solver from Dhaka, Bangladesh. He is currently a 3rd-year Computer Science & Engineering student at Green University of Bangladesh (expected 2026). Sajjad also serves as the Vice President of the Green University Computer Club (GUCC) and as a Department Student Mentor.`
    },
    {
      keywords: ['project', 'work', 'portfolio', 'green bites', 'green guardian', 'built', 'showcase'],
      response: `Sajjad has crafted several standout systems:\n\n1. **Green Bites** — A complete food ordering platform with cart, checkout, and payment logic (PHP, MySQL, JS).\n2. **Green Guardian** — An online exam monitoring and resource ecosystem (TypeScript, React, Firebase).\n3. **Modern Portfolio** — An Awwwards-inspired creative developer identity built with Three.js, GSAP, and dark luxury aesthetics.\n4. **Student Management System** — Built in C featuring custom file handling and data structures.\n5. **Mini ATM System** — Microprocessor-level banking simulation in x86 Assembly.`
    },
    {
      keywords: ['skill', 'stack', 'technolog', 'react', 'javascript', 'python', 'language', 'tools'],
      response: `Sajjad's core technical stack includes:\n\n• **Languages:** JavaScript (ES6+), TypeScript, C, C++, Python, PHP, x86 Assembly.\n• **Frontend:** React.js, Tailwind CSS, HTML5, CSS3, Three.js, GSAP.\n• **Backend & DB:** Node.js, Express, MySQL, MongoDB, Firebase (Firestore, Auth, Storage).\n• **Tools:** Git, GitHub, VS Code, Figma, Linux.`
    },
    {
      keywords: ['lead', 'club', 'gucc', 'mentor', 'activities', 'experience', 'bncc', 'scout'],
      response: `Sajjad's leadership and community service include:\n\n• **Vice President** at Green University Computer Club (GUCC)\n• **Student Mentor** in the Dept. of CSE, guiding students in programming\n• **Lance Corporal** in BNCC Platoon (GUB)\n• **Past Technical Head** at Photographic Club (BAF Shaheen College Dhaka)\n• **Official Volunteer** at 7th STI, 6th STI, and 5th Convocation.`
    },
    {
      keywords: ['contact', 'hire', 'email', 'phone', 'location', 'reach', 'social', 'linkedin', 'github'],
      response: `You can reach Sajjad directly via:\n\n• **Email:** sajjadmahmudsuton@gmail.com\n• **Location:** Dhaka, Bangladesh\n• **GitHub:** github.com/Sajjad-Mahmud-Suton\n• **LinkedIn:** linkedin.com/in/md-sajjad-mahmud-suton-344a802a7\n• **Status:** Available for select freelance contracts & full-time roles!`
    },
    {
      keywords: ['green bites', 'food', 'canteen'],
      response: `**Green Bites** is a web-based canteen and online food ordering application featuring product filtering, dynamic cart calculations, order tracking, and payment processing. Built with PHP, MySQL, JavaScript, and custom responsive CSS. Live demo: https://greenbites.free.nf/`
    },
    {
      keywords: ['green guardian', 'exam', 'monitoring'],
      response: `**Green Guardian** is an online exam monitoring and academic platform engineered with TypeScript, React JSX, and Firebase. It is designed to ensure academic integrity during remote assessments. Live demo: https://green--guardian.web.app/`
    },
    {
      keywords: ['education', 'university', 'college', 'degree', 'study', 'school'],
      response: `Sajjad is pursuing a **B.Sc. in Computer Science & Engineering** at **Green University of Bangladesh** (2022 – Present). Previously, he completed his Higher Secondary Certificate (HSC) in Science from **BAF Shaheen College Dhaka** (2020 – 2021).`
    },
    {
      keywords: ['classic', 'modern', 'switch', 'version', 'semester'],
      response: `You can switch between the **Classic Experience** (which includes university academic archives and course resources) and this **Modern Experience** at any time using the version switcher pill in the navigation bar or footer!`
    }
  ];

  // DOM elements
  const trigger = document.getElementById('chatbot-trigger');
  const drawer = document.getElementById('chatbot-drawer');
  const closeBtn = document.getElementById('chatbot-close');
  const input = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send');
  const messagesContainer = document.getElementById('chatbot-messages');
  const quickChips = document.querySelectorAll('.chat-chip');

  if (!trigger || !drawer || !input) return;

  // Toggle Drawer
  trigger.addEventListener('click', () => {
    drawer.classList.toggle('open');
    if (drawer.classList.contains('open')) {
      input.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  // Answer matching algorithm (Scoring based on query keywords)
  function findAnswer(query) {
    const cleanQuery = query.toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
    const queryTokens = cleanQuery.split(/\s+/).filter(Boolean);

    let bestMatch = null;
    let highestScore = 0;

    KNOWLEDGE_BASE.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(kw => {
        queryTokens.forEach(token => {
          if (kw === token) score += 3;
          else if (kw.includes(token) || token.includes(kw)) score += 1.5;
        });
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = entry.response;
      }
    });

    if (highestScore >= 1.5 && bestMatch) {
      return bestMatch;
    }

    return "I do not have specific verified information about that topic in Sajjad's portfolio records. Would you like to reach out to him directly via email at sajjadmahmudsuton@gmail.com or check his contact section?";
  }

  // Append Message
  function appendMessage(sender, text) {
    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${sender}`;

    // Format bolding and linebreaks safely
    const formatted = text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    bubble.innerHTML = formatted;
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle Send
  function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    appendMessage('user', text);
    input.value = '';

    // Typing delay simulation
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-bubble bot';
    typingIndicator.innerHTML = '<span style="opacity: 0.6">Thinking...</span>';
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      const reply = findAnswer(text);
      appendMessage('bot', reply);
    }, 400);
  }

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  // Handle Quick Chips
  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.getAttribute('data-prompt') || chip.textContent.trim();
      input.value = prompt;
      handleSend();
    });
  });
})();

