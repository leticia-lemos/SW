const { getNoticias, getNoticiaById } = require("../models/news");

const listarNoticias = (req, res) => {
  const todasNoticias = getNoticias();
  res.render("index", { noticias: todasNoticias });
};

const mostrarNoticia = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const noticia = getNoticiaById(id);
  if (noticia) {
    res.render("index", { noticias: [noticia] });
  } else {
    res.status(404).send("Notícia não encontrada");
  }
};

module.exports = { listarNoticias, mostrarNoticia };