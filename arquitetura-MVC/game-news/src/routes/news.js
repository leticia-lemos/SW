const express = require('express');
const { listarNoticias, mostrarNoticia } = require('../controllers/news');

const router = express.Router();

router.get('/', listarNoticias);
router.get('/:id', mostrarNoticia);

module.exports = router;
