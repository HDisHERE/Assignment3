//Navigation toggle 
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

//Back-to-top button
const backToTopButton = document.getElementById('backToTop');

function updateBackToTop() {
  if (window.scrollY > 60) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

window.addEventListener('scroll', updateBackToTop);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

updateBackToTop();

//Navbar stored
const navItems = [
  { name: "Home", href: "index.html", active: true },
  { name: "Projects", href: "projects.html", active: false },
  { name: "Contact", href: "#contact", active: false }
];

function renderNavbar() {
  const navContent = document.getElementById('nav-content');
  if (!navContent) return;

  // logo
  const logoDiv = document.createElement('div');
  logoDiv.className = 'logo';
  const logoLink = document.createElement('a');
  logoLink.href = 'index.html';
  logoLink.textContent = 'Alex Morgan';
  logoDiv.appendChild(logoLink);

  // hamburger button
  const navToggle = document.createElement('button');
  navToggle.className = 'nav-toggle';
  navToggle.setAttribute('aria-label', 'Toggle navigation');
  navToggle.textContent = '☰';

  // nav links
  const navLinksDiv = document.createElement('div');
  navLinksDiv.className = 'nav-links';
  navItems.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.name;
    if (item.active) a.className = 'active';
    navLinksDiv.appendChild(a);
  });

  // resemble the navbar
  navContent.innerHTML = '';
  navContent.appendChild(logoDiv);
  navContent.appendChild(navToggle);
  navContent.appendChild(navLinksDiv);

  // hamburger event
  navToggle.addEventListener('click', () => {
    navLinksDiv.classList.toggle('show');
  });
}
document.addEventListener('DOMContentLoaded', renderNavbar);

//Footer stored
const footerData = {
  contacts: [
    { type: 'email', label: 'alexmorgan@cmail.carleton.ca', href: 'mailto:alexmorgan@cmail.carleton.ca' },
    { type: 'phone', label: '+1 (343) 662-5861', href: 'tel:+1 3436625861' }
  ],
  socials: [
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' }
  ],
  about: 'This is a portfolio website of Alex Morgan.',
  copyright: '© 2026 Alex Morgan. All rights reserved.'
};
function renderFooter() {
  const footer = document.getElementById('footer-content');
  if (!footer) return;

  const container = document.createElement('div');
  container.className = 'container';

  const grid = document.createElement('div');
  grid.className = 'footer-grid';

  const col1 = document.createElement('div');
  col1.className = 'footer-column';
  const title1 = document.createElement('h3');
  title1.className = 'footer-title';
  title1.textContent = 'Get In Touch';
  col1.appendChild(title1);
  const links1 = document.createElement('div');
  links1.className = 'footer-links';
  footerData.contacts.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    links1.appendChild(a);
  });
  col1.appendChild(links1);

  const col2 = document.createElement('div');
  col2.className = 'footer-column';
  const title2 = document.createElement('h3');
  title2.className = 'footer-title';
  title2.textContent = 'Follow me';
  col2.appendChild(title2);
  const links2 = document.createElement('div');
  links2.className = 'social-links';
  footerData.socials.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.name;
    links2.appendChild(a);
  });
  col2.appendChild(links2);

  const col3 = document.createElement('div');
  col3.className = 'footer-column';
  const title3 = document.createElement('h3');
  title3.className = 'footer-title';
  title3.textContent = 'About';
  col3.appendChild(title3);
  const about = document.createElement('p');
  about.className = 'footer-text';
  about.textContent = footerData.about;
  col3.appendChild(about);

  grid.appendChild(col1);
  grid.appendChild(col2);
  grid.appendChild(col3);
  container.appendChild(grid);

  const bottom = document.createElement('div');
  bottom.className = 'footer-bottom';
  const p = document.createElement('p');
  p.textContent = footerData.copyright;
  bottom.appendChild(p);
  container.appendChild(bottom);

  footer.innerHTML = '';
  footer.appendChild(container);
}

document.addEventListener('DOMContentLoaded', renderFooter);

//Project details stored
// project data
const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack online shopping with payment integration.",
    imageClass: "color-1",
    link: "project-detail.html"
  },
  {
    title: "Task Management App",
    category: "Productivity",
    description: "Collaborative task tracking with real-time updates.",
    imageClass: "color-2",
    link: "project-detail.html"
  },
  {
    title: "Weather Dashboard",
    category: "Data Visualization",
    description: "Interactive forecast app with data visualizations.",
    imageClass: "color-3",
    link: "project-detail.html"
  },
  {
    title: "Fitness Tracker",
    category: "Health & Fitness",
    description: "Track workouts, nutrition, and health metrics.",
    imageClass: "color-4",
    link: "project-detail.html"
  },
  {
    title: "Recipe Finder",
    category: "Lifestyle",
    description: "Discover recipes with smart ingredient search.",
    imageClass: "color-5",
    link: "project-detail.html"
  },
  {
    title: "Portfolio CMS",
    category: "Web Development",
    description: "Content management for creative professionals.",
    imageClass: "color-6",
    link: "project-detail.html"
  },
  {
    title: "Chat Application",
    category: "Communication",
    description: "Real-time messaging with file sharing and encryption.",
    imageClass: "color-7",
    link: "project-detail.html"
  },
  {
    title: "Music Player",
    category: "Entertainment",
    description: "Sleek music streaming with playlist management.",
    imageClass: "color-8",
    link: "project-detail.html"
  },
  {
    title: "Budget Planner",
    category: "Finance",
    description: "Track expenses and analyze spending habits.",
    imageClass: "color-9",
    link: "project-detail.html"
  }
];

//Project card
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  let filtered = window.currentProjectFilter ? filterProjects(window.currentProjectFilter) : projects;
  if (window.currentProjectSearch) {
    filtered = filtered.filter(proj =>
      proj.title.toLowerCase().includes(window.currentProjectSearch) ||
      proj.description.toLowerCase().includes(window.currentProjectSearch) ||
      (proj.category && proj.category.toLowerCase().includes(window.currentProjectSearch))
    );
  }
  grid.innerHTML = '';
  filtered.forEach(proj => {
  const card = document.createElement('a');
  card.className = 'project-card';
  card.href = proj.link;

  // image
  const imgDiv = document.createElement('div');
  imgDiv.className = `project-image-placeholder ${proj.imageClass}`;
  const imgTitle = document.createElement('span');
  imgTitle.className = 'project-img-title';
  imgTitle.textContent = proj.title;
  imgDiv.appendChild(imgTitle);

  // description
  const contentDiv = document.createElement('div');
  contentDiv.className = 'project-content';

  const badge = document.createElement('span');
  badge.className = 'category-badge';
  badge.textContent = proj.category;

  const title = document.createElement('h3');
  title.className = 'project-title';
  title.textContent = proj.title;

  const desc = document.createElement('p');
  desc.className = 'project-description';
  desc.textContent = proj.description;

  contentDiv.appendChild(badge);
  contentDiv.appendChild(title);
  contentDiv.appendChild(desc);

  card.appendChild(imgDiv);
  card.appendChild(contentDiv);

  grid.appendChild(card);
});
}
document.addEventListener('DOMContentLoaded', renderProjects);

//Category filter
function filterProjects(category) {
  if (category === 'All') return projects;
  if (category === 'Finance') {
    return projects.filter(p => ["Budget Planner", "E-Commerce Platform"].includes(p.title));
  }
  if (category === 'Life') {
    return projects.filter(p => [
      "Task Management App",
      "Fitness Tracker",
      "Recipe Finder",
      "Music Player",
      "Chat Application",
      "Weather Dashboard"
    ].includes(p.title));
  }
  if (category === 'Development') {
    return projects.filter(p => ["Portfolio CMS"].includes(p.title));
  }
  return projects;
}

document.addEventListener('DOMContentLoaded', function() {
  const filterBar = document.getElementById('category-filters');
  if (filterBar) {
    filterBar.addEventListener('click', function(e) {
      if (e.target.classList.contains('category-btn')) {
        const cat = e.target.getAttribute('data-category');
        window.currentProjectFilter = cat;
        renderProjects();
        Array.from(filterBar.children).forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
      }
    });
    window.currentProjectFilter = 'All';
    renderProjects();
    filterBar.querySelector('[data-category="All"]').classList.add('active');
  }

  //Search function
  //This part I used copilot
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('projectSearch');
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const keyword = searchInput.value.trim().toLowerCase();
      window.currentProjectSearch = keyword;
      renderProjects();
    });
    searchInput.addEventListener('input', function() {
      const keyword = searchInput.value.trim().toLowerCase();
      window.currentProjectSearch = keyword;
      renderProjects();
    });
  }
});

//Quote API
const quoteText=document.getElementById('quoteText');
const quoteAuthor=document.getElementById('quoteAuthor');
const quoteBtn=document.getElementById('quoteBtn');

async function loadRandomQuote(){
    //This part I used copilot
    try{
        quoteBtn.disabled=true;
        quoteBtn.textContent='Loading...';
        const resp = await fetch('https://api.quotable.io/random');
        if(!resp.ok){
            throw new Error(`Failed to fetch quote, http ${resp.status}`);
        }
        const data=await resp.json();
        quoteText.textContent=`"${data.content}"`;
        quoteAuthor.textContent=`- ${data.author}`;
    }catch(err){
        quoteText.textContent='Failed to load quote. Please try again later.';
        quoteAuthor.textContent='';
        console.error(err);
    }finally{
        quoteBtn.disabled=false;
        quoteBtn.textContent='Random Quote';
    }
}

quoteBtn?.addEventListener('click',loadRandomQuote);
loadRandomQuote();