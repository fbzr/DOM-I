const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Update text of nav-items
const navLinks = document.querySelectorAll('header nav a');
navLinks.forEach((link, index) => {
  link.textContent = siteContent['nav'][`nav-item-${index + 1}`];
});

// Update cta image
const image = document.getElementById('cta-img');
image.src = siteContent.cta["img-src"];

// Update CTA header
const ctaText = document.querySelector('.cta-text');
const headerText = siteContent.cta.h1;
ctaText.querySelector('h1').innerHTML = headerText.slice(0, 3) + '<br>' + headerText.slice(3, 6) + '<br>' + headerText.slice(6);

// Update CTA button
ctaText.querySelector('button').textContent = siteContent.cta.button;

// Update main content - top content
const topContent = document.querySelector('.top-content');
let textContents = topContent.getElementsByClassName('text-content');

// Features
textContents[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
textContents[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];

// About
textContents[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
textContents[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

// Update middle image source
document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"];

// Update bottom content
const bottomContent = document.querySelector('.bottom-content');
textContents = bottomContent.getElementsByTagName('div');
// Services
textContents[0].firstElementChild.textContent = siteContent["main-content"]["services-h4"];
textContents[0].lastElementChild.textContent = siteContent["main-content"]["services-content"];
// Product
textContents[1].firstElementChild.textContent = siteContent["main-content"]["product-h4"];
textContents[1].lastElementChild.textContent = siteContent["main-content"]["product-content"];