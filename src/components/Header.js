import suitmediaLogo from '../assets/images/suitmedia_logo.png';

const Header = {
  render() {
    return `
      <header id="header" class="header">
        <div class="container">
          <div class="logo">
            <img src="${suitmediaLogo}" alt="Suitmedia Logo" height="40">
          </div>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle Menu">
            ☰
          </button>
          <nav class="nav-menu" id="nav-menu">
            <ul>
              <li><a href="#/work">Work</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/services">Services</a></li>
              <li><a href="#/">Ideas</a></li>
              <li><a href="#/career">Careers</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  },

  handleScroll() {
  let prevScrollPos = window.pageYOffset;
  const header = document.getElementById('header');
  const navMenu = document.getElementById('nav-menu');
  const toggleButton = document.getElementById('menu-toggle');

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      header.style.top = '0';
      header.style.background = 'rgba(234, 96, 36, 0.5)';
    } else {
      header.style.top = '-100px';
    }

    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }

    prevScrollPos = currentScrollPos;
  });
},

  highlightActiveLink() {
    const links = document.querySelectorAll('.header nav a');
    const currentHash = window.location.hash || '#/';

    links.forEach(link => {
      if (link.getAttribute('href') === currentHash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  handleMenuToggle() {
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (toggleButton && navMenu) {
      toggleButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  }
};

export default Header;
