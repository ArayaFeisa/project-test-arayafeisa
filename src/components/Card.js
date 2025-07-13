import fallbackImage from '../assets/images/no-image.jpg';

const Card = {
  render(item) {
    const publishedDate = new Date(item.published_at).toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric'
    });

    const imageUrl = item.small_image?.[0]?.url;

    return `
      <div class="card">
        <img 
          src="${imageUrl || fallbackImage}" 
          alt="${item.title}" 
          loading="lazy"
          onerror="this.onerror=null;this.src='${fallbackImage}';"
        />
        <p>${publishedDate}</p>
        <h3>${item.title}</h3>
      </div>
    `;
  }
};

export default Card;
