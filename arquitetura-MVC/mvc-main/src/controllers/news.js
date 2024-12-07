const newsModel = require("../models/news");

exports.getAllNews = (req, res) => {
  const noticias = newsModel.getNews();
  res.render("index", { noticias });
};