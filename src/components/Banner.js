const Banner = {
  render() {
    return `
      <section class="banner">
        <div class="banner-text">
          <h1>Ideas</h1>
          <p>Where all our great things begin</p>
        </div>
      </section>
    `;
  },

  handleParallax() {
    const banner = document.querySelector('.banner');
    window.addEventListener('scroll', () => {
      let offset = window.pageYOffset;
      banner.style.backgroundPositionY = offset * 0.5 + 'px';
    });
  }
}

export default Banner;
