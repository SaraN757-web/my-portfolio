  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const siteNav = document.getElementById('siteNav');
  const navOverlay = document.getElementById('navOverlay');

  function closeNav(){
    siteNav.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    navOverlay.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleNav(){
    const isOpen = siteNav.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    navOverlay.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  }

  hamburgerBtn.addEventListener('click', toggleNav);
  navOverlay.addEventListener('click', closeNav);
  siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));

  window.addEventListener('resize', () => {
    if(window.innerWidth > 720) closeNav();
  });
