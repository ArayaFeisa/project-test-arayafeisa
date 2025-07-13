import IdeasPresenter from '../presenters/ideasPresenter';

const IdeasPage = {
  render() {
    document.getElementById('app').innerHTML = `
      <header id="header" class="header">Ideas</header>
      <section id="banner" class="banner">Banner</section>
      <section id="ideas-list"></section>
    `;
    this.handleScrollHeader();
    IdeasPresenter.init(1, 10, '-published_at');
  },

  showIdeas(data) {
    const listContainer = document.getElementById('ideas-list');
    listContainer.innerHTML = data.data.map(item => `
      <div class="card">
        <img src="${item.small_image}" loading="lazy" />
        <h3>${item.title}</h3>
      </div>
    `).join('');
  },

  handleScrollHeader() {
    let prevScrollPos = window.pageYOffset;
    const header = document.getElementById('header');
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
        header.style.background = "rgba(255,255,255,0.8)";
      } else {
        header.style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    }
  }
}

export default IdeasPage;
