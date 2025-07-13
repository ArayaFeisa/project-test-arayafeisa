import IdeasModel from '../models/ideasModel';
import IdeasPage from '../pages/ideasPage';

const IdeasPresenter = {
  async init(pageNumber, pageSize, sort) {
    localStorage.setItem('ideasState', JSON.stringify({ pageNumber, pageSize, sort }));

    const data = await IdeasModel.fetchIdeas(pageNumber, pageSize, sort);
    IdeasPage.showIdeas(data);
  }
};

export default IdeasPresenter;
