(function() {
'use strict';
const config = {"site":{"title":"saeed neamatallah","description":"My Professional Portfolio","favicon":"","language":"en"},"theme":{"globalSkin":"organic","global_skin":"startup","primaryColor":"#059669","secondaryColor":"#0d9488","accentColor":"#fbbf24","darkMode":false,"primary_color":"#6366f1","secondary_color":"#ec4899","accent_color":"#10b981","dark_mode":true,"font_heading":"Plus Jakarta Sans","font_body":"Plus Jakarta Sans","font_mono":"JetBrains Mono","fontHeading":"Plus Jakarta Sans","fontBody":"Plus Jakarta Sans","fontMono":"JetBrains Mono"},"layout":{"hero":"split","partners":"logo-carousel","about":"storyteller","services":"icon-cards","features":"split-image","techstack":"categorized-grid","projects":"mac-window","process":"numbered-cards","stats":"simple-grid","testimonials":"cards-grid","pricing":"comparison","experience":"vertical-timeline","education":"badge-gallery","certificates":"showcase","faq":"accordion","contact":"split-screen"},"sectionOrder":["hero","partners","about","services","stats","testimonials","contact","features","techstack","projects","process","pricing","experience","education","certificates","faq"],"navigation":{"logo":"s","links":[{"name":"Home","url":"#hero"},{"name":"Partners","url":"#partners"},{"name":"About","url":"#about"},{"name":"Services","url":"#services"},{"name":"Stats","url":"#stats"},{"name":"Testimonials","url":"#testimonials"},{"name":"Contact","url":"#contact"},{"name":"Features","url":"#features"},{"name":"Skills","url":"#techstack"},{"name":"Projects","url":"#projects"},{"name":"Process","url":"#process"},{"name":"Pricing","url":"#pricing"},{"name":"Experience","url":"#experience"},{"name":"Education","url":"#education"},{"name":"Certificates","url":"#certificates"},{"name":"FAQ","url":"#faq"}],"items":[{"label":"Home","href":"#hero"},{"label":"Partners","href":"#partners"},{"label":"About","href":"#about"},{"label":"Services","href":"#services"},{"label":"Stats","href":"#stats"},{"label":"Testimonials","href":"#testimonials"},{"label":"Contact","href":"#contact"},{"label":"Features","href":"#features"},{"label":"Skills","href":"#techstack"},{"label":"Projects","href":"#projects"},{"label":"Process","href":"#process"},{"label":"Pricing","href":"#pricing"},{"label":"Experience","href":"#experience"},{"label":"Education","href":"#education"},{"label":"Certificates","href":"#certificates"},{"label":"FAQ","href":"#faq"}],"showDarkModeToggle":true},"content":{"hero":{"greeting":"Learn with","name":"Your Name","title":"Expert English Language Instructor","subtitle":"Master English with personalized online lessons tailored to your goals and learning style","taglines":["IELTS Expert","Business English","Conversation Coach"],"cta":{"primary":{"text":"Book Trial Lesson","url":"#contact"},"secondary":{"text":"View Courses","url":"#services"}},"cta_primary":{"text":"View Projects","href":"#projects"},"cta_secondary":{"text":"Contact Me","href":"#contact"},"social_links":[{"platform":"GitHub","url":"https:
function applyTheme() {
const theme = config.theme || {};
const darkMode = theme.dark_mode || theme.darkMode || false;
const skin = theme.global_skin || theme.globalSkin || 'default';
document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
document.body.setAttribute('data-skin', skin);
const root = document.documentElement;
if (theme.primaryColor || theme.primary_color) {
root.style.setProperty('--color-primary', theme.primaryColor || theme.primary_color);
}
if (theme.secondaryColor || theme.secondary_color) {
root.style.setProperty('--color-secondary', theme.secondaryColor || theme.secondary_color);
}
if (theme.accentColor || theme.accent_color) {
root.style.setProperty('--color-accent', theme.accentColor || theme.accent_color);
}
}
function toggleDarkMode() {
const isDark = document.body.getAttribute('data-theme') === 'dark';
document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
localStorage.setItem('webfolio_theme', isDark ? 'light' : 'dark');
}
function initMobileMenu() {
const toggle = document.querySelector('.menu-toggle, .navbar-toggle');
const menu = document.querySelector('.navbar-menu, .nav-menu');
if (toggle && menu) {
toggle.addEventListener('click', () => {
menu.classList.toggle('active');
toggle.classList.toggle('active');
});
}
}
function initSmoothScroll() {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
});
});
}
function initBackToTop() {
const btn = document.getElementById('backToTop');
if (!btn) return;
window.addEventListener('scroll', () => {
btn.classList.toggle('visible', window.scrollY > 500);
});
btn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
}
function initNavbarScroll() {
const navbar = document.querySelector('.navbar');
if (!navbar) return;
window.addEventListener('scroll', () => {
navbar.classList.toggle('scrolled', window.scrollY > 50);
});
}
function initThemeToggle() {
const toggleBtn = document.querySelector('.theme-toggle, #theme-toggle');
if (toggleBtn) {
toggleBtn.addEventListener('click', toggleDarkMode);
}
const saved = localStorage.getItem('webfolio_theme');
if (saved) {
document.body.setAttribute('data-theme', saved);
}
}
function initScrollAnimations() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('animated');
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.animate-on-scroll').forEach(el => {
observer.observe(el);
});
}
function initCounters() {
const counters = document.querySelectorAll('[data-counter], .stat-number');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
animateCounter(entry.target);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.5 });
counters.forEach(el => observer.observe(el));
}
function animateCounter(el) {
const text = el.textContent.trim();
const match = text.match(/^([\d,]+)(\+|%|k|m)?$/i);
if (!match) return;
const target = parseInt(match[1].replace(/,/g, ''), 10);
const suffix = match[2] || '';
const duration = 2000;
const start = performance.now();
function update(now) {
const progress = Math.min((now - start) / duration, 1);
const value = Math.floor(progress * target);
el.textContent = value.toLocaleString() + suffix;
if (progress < 1) requestAnimationFrame(update);
}
requestAnimationFrame(update);
}
function setCurrentYear() {
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();
}
document.addEventListener('DOMContentLoaded', () => {
applyTheme();
initMobileMenu();
initSmoothScroll();
initBackToTop();
initNavbarScroll();
initThemeToggle();
initScrollAnimations();
initCounters();
setCurrentYear();
});
})();