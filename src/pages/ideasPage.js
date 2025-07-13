import IdeasPresenter from "../presenters/ideasPresenter";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";

const IdeasPage = {
  render() {
    const saved = JSON.parse(localStorage.getItem("ideasState")) || {};
    const page = saved.pageNumber || 1;
    const size = saved.pageSize || 10;
    const sort = saved.sort || "-published_at";

    document.getElementById("app").innerHTML = `
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

    document.getElementById("showPerPage").value = size;
    document.getElementById("sortBy").value = sort;

    this.initControls();
    IdeasPresenter.init(page, size, sort);
  },

  showIdeas(data) {
    const listContainer = document.getElementById("ideas-list");
    listContainer.innerHTML = data.data
      .map((item) => Card.render(item))
      .join("");
    document.getElementById("range-info").innerText =
      `1 - ${data.data.length} of ${data.meta.total}`;
    this.renderPagination(
      data.meta.total,
      data.meta.per_page,
      data.meta.current_page,
    );
  },

  renderPagination(total, perPage, currentPage) {
    const pagination = document.getElementById("pagination");
    const totalPages = Math.ceil(total / perPage);
    let html = "";

    // tombol halaman pertama
    if (currentPage !== 1) {
      html += `<button data-page="1" title="First Page">1</button>`;
    }

    // Tombol back 2 halaman (<<)
    html += `<button data-page="${Math.max(1, currentPage - 2)}" 
  ${currentPage <= 2 ? "disabled" : ""} title="Back 2 Pages">&laquo;</button>`;

    // Tombol back 1 halaman (<)
    html += `<button data-page="${Math.max(1, currentPage - 1)}" 
  ${currentPage === 1 ? "disabled" : ""} title="Back 1 Page">&lsaquo;</button>`;

    // 3 halaman di tengah
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);
    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      html += `<button class="${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
    }

    // Tombol skip 1 halaman (>)
    html += `<button data-page="${Math.min(totalPages, currentPage + 1)}" 
  ${currentPage === totalPages ? "disabled" : ""} title="Next Page">&rsaquo;</button>`;

    // Tombol skip 2 halaman (>>)
    html += `<button data-page="${Math.min(totalPages, currentPage + 2)}" 
  ${currentPage >= totalPages - 1 ? "disabled" : ""} title="Skip 2 Pages">&raquo;</button>`;

    // tombol halaman terakhir
    if (currentPage !== totalPages) {
      html += `<button data-page="${totalPages}" title="Last Page">${totalPages}</button>`;
    }

    pagination.innerHTML = html;

    pagination.querySelectorAll("button:not(:disabled)").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const page = Number(e.target.dataset.page);
        const sort = document.getElementById("sortBy").value;
        const perPage = Number(document.getElementById("showPerPage").value);
        IdeasPresenter.init(page, perPage, sort);
      });
    });
  },

  initControls() {
    document.getElementById("showPerPage").addEventListener("change", (e) => {
      const perPage = e.target.value;
      const sort = document.getElementById("sortBy").value;
      IdeasPresenter.init(1, Number(perPage), sort);
    });

    document.getElementById("sortBy").addEventListener("change", (e) => {
      const sort = e.target.value;
      const perPage = document.getElementById("showPerPage").value;
      IdeasPresenter.init(1, Number(perPage), sort);
    });
  },
};

export default IdeasPage;
