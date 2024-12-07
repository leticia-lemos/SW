const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  const noticias = [
    {
      titulo: "The Last of Us: 2ª Temporada Prevista para 2025",
      noticia:
        "A segunda temporada da série The Last of Us está programada para ser lançada no primeiro semestre de 2025. A HBO confirmou que a nova temporada será baseada em The Last of Us Part II, com a produção começando em 2024. O CEO da HBO, Casey Bloys, anunciou que a temporada terá sete episódios e introduzirá novos personagens, incluindo Abby Anderson",
    },
    {
      titulo: "Baldur's Gate 3: Novas Subclasses e Atualizações",
      noticia:
        "Baldur's Gate 3 receberá uma grande atualização em 2025, que incluirá 12 novas subclasses, um modo foto e suporte a cross-play entre todas as plataformas. As novas subclasses trarão habilidades e animações únicas, permitindo que os jogadores personalizem ainda mais seus personagens. A atualização também promete melhorias de desempenho e correções de bugs",
    },
    {
      titulo: "Red Dead Redemption: Rumores sobre uma Possível Continuação",
      noticia:
        "Recentemente, surgiram rumores sobre uma possível continuação ou remasterização de Red Dead Redemption, com fãs especulando sobre o retorno ao mundo aberto do jogo. Embora não haja confirmações oficiais, a expectativa entre os jogadores é alta, especialmente após o sucesso contínuo da franquia",
    },
  ];

  res.render("index", { noticias });
});

app.listen(5500, () => {
  console.log("Servidor rodando na porta 5500");
});
