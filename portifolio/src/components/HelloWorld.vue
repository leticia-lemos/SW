<template>
  <div class="hello">
    <nav>
      <h3>Lele Developer</h3>
      <div class="links">
        <a href="#sobre-mim">Sobre mim</a>
        <a href="#skills">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
    <div class="grupo-inicial">
      <img src="../assets/Gradient.svg" id="gradient" alt="" />
      <img src="../assets/zote.png" id="img-zote" alt="" />
      <h1 class="titulo-inicial">Meu nome é Leticia Lemos, Muito prazer</h1>
    </div>

    <section id="sobre-mim" class="sobre-mim">
      <h2 class="titulo-sobre">Sobre mim</h2>
      <p class="texto-sobre">
        Olá! Sou uma desenvolvedora front-end apaixonada por criar experiências
        digitais intuitivas e visuais. Com sólida experiência em HTML, CSS e
        JavaScript, estou sempre atualizada com as últimas tendências e
        tecnologias. Adoro transformar ideias em interfaces funcionais e
        atraentes, e estou comprometida em entregar soluções de alta qualidade
        que encantem os usuários.
      </p>
    </section>

    <section id="skills" class="skills">
      <h2 class="titulo-skills">Skills</h2>
      <img src="../assets/Gradient2.svg" id="gradient2" alt="">
      <div class="grupo-skills">
        <div class="grupo-html">
          <img src="../assets/grupo-html.svg" id="img-html" alt="">
          <div class="texto-tec">
            <h2 class="titulo-skill">HTML 5</h2>
            <p class="texto-skill">Desenvolvimento de estruturas semânticas eficientes e modernas.</p>
            <button class="btn-tec"><a href="https://www.hostinger.com.br/tutoriais/o-que-e-html-conceitos-basicos" target="_blank">Saiba mais</a></button>
          </div>
        </div>
        <div class="grupo-css">
          <img src="../assets/grupo-css.svg" id="img-css" alt="">
          <div class="texto-tec">
            <h2 class="titulo-skill">CSS 3</h2>
            <p class="texto-skill">Criação de interfaces visualmente atraentes e responsivas.</p>
            <button class="btn-tec"><a href="https://www.hostinger.com.br/tutoriais/o-que-e-css-guia-basico-de-css" target="_blank">Saiba mais</a></button>
          </div>
        </div>
        <div class="grupo-css">
          <img src="../assets/grupo-js.svg" id="img-js" alt="">
          <div class="texto-tec">
            <h2 class="titulo-skill">Javascript</h2>
            <p class="texto-skill">Desenvolvimento de funcionalidades interativas e dinâmicas.</p>
            <button class="btn-tec"><a href="https://www.hostinger.com.br/tutoriais/o-que-e-javascript" target="_blank">Saiba mais</a></button>
          </div>
        </div>
      </div>
    </section>

    <section id="projetos" class="projetos">
      <h2 class="titulo-projetos">Projetos</h2>
      <!-- Conteúdo dos projetos -->
    </section>
    <section id="contato" class="contato">
      <h2 class="titulo-sobre">Contato</h2>
      <!-- Informações de contato -->
    </section>
  </div>
</template>

<script>
export default {
  mounted () {
    const links = this.$el.querySelectorAll('.links a')
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        const targetId = this.getAttribute('href')
        const targetElement = document.querySelector(targetId)

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          })
        }
      })
    })
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* nav */
nav {
  background-color: #1a0b2e;
  width: 100%;
  height: 4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 100;
}

h3 {
  font-family: "Poppins", sans-serif;
  color: #fff;
  margin: 50px;
}

.links {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 5em;
  margin: 5em;
}

a {
  font-family: "Poppins", sans-serif;
  color: #fff;
  text-decoration: none;
}

/* apresentação */
.grupo-inicial {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8em 15em 8em 15em;
}

#gradient {
  width: 25%;
  position: relative;
  left: 10em;
}

#img-zote {
  width: 25%;
  position: relative;
  right: 6em;
}

.titulo-inicial {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: #fff;
  width: 45%;
  text-align: start;
}

/* section sobre mim */
.sobre-mim {
  text-align: start;
  margin: 0 15em;
}

.titulo-sobre {
  font-family: "Poppins";
  color: #fff;
}

.texto-sobre {
  font-family: "Poppins";
  font-weight: 100;
  color: #fff;
  margin: 1em 0;
}

/* section skills */
.skills {
  height: 25em;
  text-align: start;
  margin: 5em 0;
}

#gradient2 {
  position: relative;
  bottom: 8em;
  left: 14em;
  z-index: 1;
}

.titulo-skills {
  font-family: "Poppins";
  color: #fff;
  margin: 1em 10em;
}

.grupo-skills {
  display: flex;
  flex-direction: row;
  gap: 2em;
  margin: 0 5em;
}

/* grupo html */
.grupo-html {
  background-image: linear-gradient(to right, #130428, #15082d, #180b32, #1b0e37, #1f0f3c, #221042, #261047, #2a114d, #2d1155, #31125d, #341265, #38126d);
  width: 50em;
  height: 13em;
  border-radius: 15px;
  position: relative;
  bottom: 35em;
  z-index: 10;
  display: flex;
  flex-direction: row;
  padding: 15px;
}

#img-html {
  width: 130px;
}

.texto-tec {
  margin: 0.5em 1.5em;
}

.titulo-skill {
  font-family: "Poppins";
  color: #fff;
}

.texto-skill {
  font-family: "Poppins";
  color: #fff;
  font-size: 14px;
  margin: 5px 0 15px 0;
}

.btn-tec {
  width: 10em;
  height: 3em;
  background-color: #2C1250;
  border: 1px solid #693B93;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

/* grupo css */
.grupo-css {
  background-image: linear-gradient(to right, #130428, #15082d, #180b32, #1b0e37, #1f0f3c, #221042, #261047, #2a114d, #2d1155, #31125d);
  width: 50em;
  height: 13em;
  border-radius: 15px;
  position: relative;
  bottom: 35em;
  z-index: 10;
  display: flex;
  flex-direction: row;
  padding: 15px;
}

#img-css {
  width: 130px;
}

/* grupo js */
.grupo-js {
  background-image: linear-gradient(to right, #130428, #15082d, #180b32, #1b0e37, #1f0f3c, #221042, #261047, #2a114d, #2d1155, #31125d, #341265, #38126d);
  width: 50em;
  height: 15em;
  border-radius: 15px;
  position: relative;
  bottom: 35em;
  z-index: 10;
  display: flex;
  flex-direction: row;
  padding: 15px;
}

#img-js {
  width: 130px;
}

/* section projetos */
.projetos {
  text-align: start;
  margin: 0 15em;
}

.titulo-projetos {
  font-family: "Poppins";
  color: #fff;
}
</style>
