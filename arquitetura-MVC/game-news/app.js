const express = require('express');
const newsRoutes = require('./src/routes/news');
const path = require('path');
const app = express();
const PORT = 5500;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views', 'news'));

app.use(express.static('public'));
app.use('/', newsRoutes);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
