import newsRouter from './news.js';
import homeRouter from './home.js';

const route = (app) => {
    app.use('/news', newsRouter);
    app.use('/', homeRouter);
};

export default route;
