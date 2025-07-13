import suitmediaLogo from '../assets/images/suitmedia_logo.png';

const Header = {
  render() {
    return `
      <header id="header" class="header">
        <div class="container">
          <div class="logo">
            <img src="${suitmediaLogo}" alt="Suitmedia Logo" height="40">
          </div>
          <nav>
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

    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
        header.style.background = "rgba(234, 96, 36, 0.5)";
      } else {
        header.style.top = "-100px";
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
}

}

export default Header;
