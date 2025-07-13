import axios from 'axios';

const API_BASE_URL = '/api/api/ideas';

const IdeasModel = {
  async fetchIdeas(pageNumber = 1, pageSize = 10, sort = '-published_at') {
    const params = {
      'page[number]': pageNumber,
      'page[size]': pageSize,
      'append[]': ['small_image', 'medium_image'],
      'sort': sort,
    };

    const response = await axios.get(API_BASE_URL, { params });
    return response.data;
  }
}

export default IdeasModel;
