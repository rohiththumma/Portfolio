/* ===================================================================
   PROJECTS DATA  —  add a new project by adding ONE object to this list.
   Newest first. Both Portfolio.html (top 3) and projects.html (all) read it.
   Fields: id, k (accent: orange|teal|green|blue|purple), group (design|dev|ai),
   title, cat, tags[], summary, points[], stats[[value,label]], facts[[label,value]],
   img (file name in /images, without .png), btn (button label), link
   =================================================================== */
window.PROJECTS = [
  {
    "id": "privacyos",
    "k": "orange",
    "group": "design",
    "title": "PrivacyOS",
    "cat": "Website · UI/UX Design",
    "tags": [
      "Figma",
      "SaaS"
    ],
    "summary": "Managing app permissions, personal data access and privacy risks across multiple platforms can be complex.",
    "points": [
      "A centralized SaaS platform that simplifies privacy monitoring, permission management, risk analysis and data protection."
    ],
    "stats": [],
    "facts": [
      [
        "Role",
        "UI/UX Designer"
      ],
      [
        "Focus",
        "Privacy monitoring, permission management, risk analysis"
      ],
      [
        "Tools",
        "Figma"
      ]
    ],
    "img": "privacyos",
    "btn": "View case study",
    "link": "https://www.behance.net/gallery/258459407/PrivacyOS-Digital-Privacy-Control-Center"
  },
  {
    "id": "fittrack",
    "k": "teal",
    "group": "design",
    "title": "FitTrack",
    "cat": "Mobile App · UI/UX Design",
    "tags": [
      "Figma",
      "Usability Testing"
    ],
    "summary": "A health and fitness tracking app interface that makes daily activity, nutrition and health metrics easy to follow.",
    "points": [
      "Validated through usability testing with 20+ participants.",
      "Real-time tracking across physical activity, nutrition and health metrics."
    ],
    "stats": [
      [
        "+30%",
        "User retention"
      ],
      [
        "+25%",
        "Daily active users"
      ]
    ],
    "facts": [
      [
        "Role",
        "UI/UX Designer"
      ],
      [
        "Focus",
        "Usability testing, real-time tracking"
      ],
      [
        "Tools",
        "Figma"
      ]
    ],
    "img": "fittrack",
    "btn": "View case study",
    "link": "https://github.com/rohiththumma/FitTrack-Health-and-Fitness-Tracker"
  },
  {
    "id": "looma",
    "k": "green",
    "group": "design",
    "title": "Looma",
    "cat": "Mobile App · UI/UX Design",
    "tags": [
      "Figma",
      "E-commerce UX"
    ],
    "summary": "A minimal shopping app with a seamless flow from sign-up through self-checkout, built around sustainable fashion.",
    "points": [
      "Eco-points reward system that encourages responsible purchasing.",
      "Gesture-friendly navigation designed to lift overall engagement."
    ],
    "stats": [],
    "facts": [
      [
        "Role",
        "UI/UX Designer"
      ],
      [
        "Focus",
        "Sign-up to self-checkout flow, eco-points rewards"
      ],
      [
        "Tools",
        "Figma"
      ]
    ],
    "img": "looma",
    "btn": "View case study",
    "link": "https://github.com/rohiththumma/LOOMA--APP"
  },
  {
    "id": "carhub",
    "k": "blue",
    "group": "dev",
    "title": "CarHub",
    "cat": "Web App · Full-Stack Development",
    "tags": [
      "Django",
      "Gemini AI"
    ],
    "summary": "A full-stack second-hand car marketplace built with Django and Python for buying, selling and comparing vehicles.",
    "points": [
      "Advanced search and dynamic filters to find and compare cars quickly.",
      "Real-time messaging, a review system and a custom Chart.js admin dashboard for live analytics."
    ],
    "stats": [],
    "facts": [
      [
        "Role",
        "Full-stack developer"
      ],
      [
        "Focus",
        "Marketplace search, messaging, analytics"
      ],
      [
        "Tools",
        "Django, Python, Chart.js, Gemini AI"
      ]
    ],
    "img": "carhub",
    "btn": "View on GitHub",
    "link": "https://github.com/rohiththumma/CarHub"
  },
  {
    "id": "resume-screening",
    "k": "purple",
    "group": "ai",
    "title": "Resume Screening",
    "cat": "Web App · AI &amp; NLP",
    "tags": [
      "Gemini API",
      "NLP"
    ],
    "summary": "Automates resume–job description matching with the Gemini AI API, from scoring to tailored cover letters.",
    "points": [
      "ATS scoring (0–100%), skill extraction, gap analysis and AI-written cover letters via structured JSON.",
      "Multi-threaded API calls and robust error handling for real-time analytics and course recommendations."
    ],
    "stats": [],
    "facts": [
      [
        "Role",
        "AI integration &amp; NLP"
      ],
      [
        "Focus",
        "Resume–JD matching, ATS scoring"
      ],
      [
        "Tools",
        "Gemini API, NLP, multi-threading"
      ]
    ],
    "img": "resume-screening",
    "btn": "View on GitHub",
    "link": "https://github.com/rohiththumma/Mini-Project"
  }
];

window.PROJECT_GROUPS = { design: 'UI/UX Design', dev: 'Development', ai: 'AI & NLP' };

(function(){
  var ARROW = "<svg viewBox=\"0 0 16 16\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M4.5 11.5l7-7M5.5 4.5h6v6\"/></svg>";

  function itemHTML(p, i){
    var open = i === 0;
    var pts = p.points.map(function(t){ return '<li>' + t + '</li>'; }).join('');
    var stats = (p.stats && p.stats.length)
      ? '<div class="w-stats">' + p.stats.map(function(s){ return '<div><b>' + s[0] + '</b><span>' + s[1] + '</span></div>'; }).join('') + '</div>' : '';
    var facts = p.facts.map(function(f){ return '<div><dt>' + f[0] + '</dt><dd>' + f[1] + '</dd></div>'; }).join('');
    var tags = p.tags.map(function(t){ return '<span>' + t + '</span>'; }).join('');
    var num = (i + 1 < 10 ? '0' : '') + (i + 1);
    return '<article class="work-item c-' + p.k + (open ? ' is-open' : '') + '">' +
      '<button type="button" class="work-head" aria-expanded="' + open + '" aria-controls="work-' + p.id + '">' +
        '<span class="w-num">' + num + '</span>' +
        '<span class="w-main"><span class="w-title">' + p.title + '</span><span class="w-cat">' + p.cat + '</span></span>' +
        '<span class="w-tags">' + tags + '</span><span class="w-icon" aria-hidden="true"></span>' +
      '</button>' +
      '<div class="work-body" id="work-' + p.id + '" role="region"><div class="work-inner"><div class="work-grid">' +
        '<div class="w-text"><p class="w-summary">' + p.summary + '</p><ul class="w-points">' + pts + '</ul>' + stats +
          '<div class="w-actions"><a class="w-btn primary" href="' + p.link + '" target="_blank" rel="noopener">' + p.btn + ' ' + ARROW + '</a></div></div>' +
        '<aside class="w-side"><figure class="w-shot"><img src="images/' + p.img + '.png" alt="' + p.title.replace(/&amp;/g,'&') + ' screens" loading="lazy" onerror="this.closest(\'figure\').remove()"></figure>' +
          '<dl class="w-facts">' + facts + '</dl></aside>' +
      '</div></div></div></article>';
  }

  window.renderProjects = function(container, opts){
    opts = opts || {};
    var list = window.PROJECTS.filter(function(p){ return !opts.group || p.group === opts.group; });
    if (opts.limit) list = list.slice(0, opts.limit);
    container.innerHTML = list.map(itemHTML).join('');
  };

  // one-open-at-a-time accordion (event delegation, survives re-render)
  function bindAccordion(container){
    container.addEventListener('click', function(e){
      var head = e.target.closest('.work-head');
      if (!head || !container.contains(head)) return;
      var item = head.parentNode, willOpen = !item.classList.contains('is-open');
      container.querySelectorAll('.work-item').forEach(function(o){
        o.classList.remove('is-open');
        o.querySelector('.work-head').setAttribute('aria-expanded', 'false');
      });
      if (willOpen){ item.classList.add('is-open'); head.setAttribute('aria-expanded', 'true'); }
    });
  }

  document.querySelectorAll('[data-projects]').forEach(function(c){
    bindAccordion(c);
    if (c.hasAttribute('data-limit')) window.renderProjects(c, { limit: parseInt(c.getAttribute('data-limit'), 10) });
  });
  document.querySelectorAll('[data-projects-count]').forEach(function(el){ el.textContent = window.PROJECTS.length; });
})();
