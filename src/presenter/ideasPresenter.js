import IdeasModel from '../models/ideasModel';
import IdeasPage from '../pages/IdeasPage';

const IdeasPresenter = {
  async init(pageNumber, pageSize, sort) {
    const data = await IdeasModel.fetchIdeas(pageNumber, pageSize, sort);
    IdeasPage.showIdeas(data);
  }
}

export default IdeasPresenter;
