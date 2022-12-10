import express from 'express';
import newsController from '../app/controllers/NewsController.js';

const router = express.Router();

router.use('/news', newsController.index);

export default router;
