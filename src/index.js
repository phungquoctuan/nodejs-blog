import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import route from './routes/index.js';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

// Static file handling
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

// Routes initialization
route(app);

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
