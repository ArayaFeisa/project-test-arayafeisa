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
              <li><a href="#" class="active">Work</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Ideas</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
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
  }
}

export default Header;
