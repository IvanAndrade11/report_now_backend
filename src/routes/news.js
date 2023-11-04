import Router from 'express';
import controller from '../controllers/news.js';

const routerNews = Router();
routerNews.get('/', controller.list);
routerNews.get('/:id', controller.get);
routerNews.post('/my-news', controller.getByIdUser);
routerNews.post('/create', controller.create);
routerNews.put('/:id', controller.update);
routerNews.delete('/:id', controller.delete);

export default routerNews;
