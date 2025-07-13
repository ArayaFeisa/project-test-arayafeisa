import apiClient from '../utils/api';

const IdeasModel = {
  async fetchIdeas(pageNumber = 1, pageSize = 10, sort = '-published_at') {
    const params = {
      'page[number]': pageNumber,
      'page[size]': pageSize,
      'append[]': ['small_image', 'medium_image'],
      'sort': sort,
    };

    const response = await apiClient.get('/ideas', { params });
    return response.data;
  }
};

export default IdeasModel;
