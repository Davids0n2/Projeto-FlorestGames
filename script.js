function toggleMenu() {
    const menu = document.querySelector('.menu > ul');
    menu.classList.toggle('active');
  }
  
  window.addEventListener('scroll', function() {
    const menu = document.querySelector('nav.menu');
    if (window.scrollY > 150) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });