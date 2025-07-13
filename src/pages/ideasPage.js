import IdeasPresenter from '../presenters/ideasPresenter';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';

const IdeasPage = {
  render() {
    document.getElementById('app').innerHTML = `
      ${Header.render()}
      ${Banner.render()}
      <section class="controls">
        <div>Showing <span id="range-info"></span></div>
        <div>
          <label>Show per page:
            <select id="showPerPage">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </label>
          <label>Sort by:
            <select id="sortBy">
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </label>
        </div>
      </section>
      <section class="cards-container" id="ideas-list"></section>
      <div class="pagination" id="pagination"></div>
    `;

    Header.handleScroll();
    Banner.handleParallax();

    this.initControls();
    IdeasPresenter.init(1, 10, '-published_at');
  },

  showIdeas(data) {
    const listContainer = document.getElementById('ideas-list');
    listContainer.innerHTML = data.data.map(item => Card.render(item)).join('');
    document.getElementById('range-info').innerText = `1 - ${data.data.length} of ${data.meta.total}`;
    this.renderPagination(data.meta.total, data.meta.per_page, data.meta.current_page);
  },

  renderPagination(total, perPage, currentPage) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(total / perPage);
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = html;

    pagination.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const page = e.target.dataset.page;
        const sort = document.getElementById('sortBy').value;
        const perPage = document.getElementById('showPerPage').value;
        IdeasPresenter.init(Number(page), Number(perPage), sort);
      });
    });
  },

  initControls() {
    document.getElementById('showPerPage').addEventListener('change', (e) => {
      const perPage = e.target.value;
      const sort = document.getElementById('sortBy').value;
      IdeasPresenter.init(1, Number(perPage), sort);
    });

    document.getElementById('sortBy').addEventListener('change', (e) => {
      const sort = e.target.value;
      const perPage = document.getElementById('showPerPage').value;
      IdeasPresenter.init(1, Number(perPage), sort);
    });
  }
}

export default IdeasPage;
