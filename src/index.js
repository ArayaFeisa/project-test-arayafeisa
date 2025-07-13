import './styles/main.css';
import routes from './utils/routes';
import Header from './components/Header';

function router() {
  const hash = window.location.hash || '#/';
  const page = routes[hash] || routes['#/'];
  page.render();

  setTimeout(() => {
    Header.highlightActiveLink();
    Header.handleMenuToggle();
  });
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
