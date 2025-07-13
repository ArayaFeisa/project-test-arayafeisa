const Card = {
  render(item) {
    const publishedDate = new Date(item.published_at).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    return `
      <div class="card">
        <img src="${item.small_image}" alt="${item.title}" loading="lazy" />
        <p>${publishedDate}</p>
        <h3>${item.title}</h3>
      </div>
    `;
  }
}

export default Card;
