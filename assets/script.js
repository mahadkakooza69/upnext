/* ============================================================
   Up NEXT — shared scripts
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile nav toggle ---- */
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      const open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });

    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---- Footer year ---- */
  document.querySelectorAll('#year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Active nav highlighting ---- */
  const path = window.location.pathname;
  const file = path.split('/').pop() || 'index.html';
  const inCoursesDir = path.includes('/courses/');

  document.querySelectorAll('.nav-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) return;

    const target = href.split('/').pop();

    // On course detail pages, highlight the Courses link
    if (inCoursesDir && target === 'courses.html') {
      a.classList.add('active');
      return;
    }

    // Everywhere else, match the current filename
    if (!inCoursesDir && target === file) {
      a.classList.add('active');
    }
  });

});