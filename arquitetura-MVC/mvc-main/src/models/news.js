const fs = require("fs");
const path = require("path");

exports.getNews = () => {
  const filePath = path.join(__dirname, "../../data/noticias.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return data.noticias;
};