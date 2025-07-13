const Card = {
  render(item) {
    const publishedDate = new Date(item.published_at).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    const imageUrl = item.small_image?.[0]?.url || 'https://via.placeholder.com/300x200?text=No+Image';

    return `
      <div class="card">
        <img src="${imageUrl}" alt="${item.title}" loading="lazy" />
        <p>${publishedDate}</p>
        <h3>${item.title}</h3>
      </div>
    `;
  }
};

export default Card;
