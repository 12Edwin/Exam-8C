<template>
  <div>
    <header class="hero">
      <div class="container">
        <h1>Bienvenido a Nuestra Experiencia de Conducción</h1>
        <p>Descubre la innovación y rendimiento de nuestros autos.</p>
        <a href="#modelos" class="btn">Explora Modelos</a>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2>Características Destacadas</h2>
        <div class="feature-item">
          <h3>Estilo Elegante</h3>
          <p>Descubre diseños modernos y elegantes que destacan en la carretera.</p>
        </div>
        <div class="feature-item">
          <h3>Rendimiento Potente</h3>
          <p>Experimenta la potencia y eficiencia de nuestros motores avanzados.</p>
        </div>
        <div class="feature-item">
          <h3>Tecnología Innovadora</h3>
          <p>Disfruta de características tecnológicas de última generación para una experiencia de conducción única.</p>
        </div>
      </div>
    </section>

    <section class="models" id="modelos">
      <div class="container">
        <h2>Descubre Nuestros Modelos</h2>
        <div class="model-item">
          <h3>Modelo A</h3>
          <p>Un equilibrio perfecto entre rendimiento y comodidad.</p>
        </div>
        <div class="model-item">
          <h3>Modelo B</h3>
          <p>Diseñado para aventuras emocionantes y viajes en familia.</p>
        </div>
        <div class="model-item">
          <h3>Modelo C</h3>
          <p>Un vehículo elegante con tecnología de vanguardia.</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Estilos base */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Estilos del héroe */
.hero {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 100px 0;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}

.btn:hover {
  background-color: #0056b3;
}

/* Estilos de las características */
.features {
  background-color: #f5f5f5;
  padding: 40px 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 30px;
}

.feature-item {
  text-align: center;
  margin-bottom: 30px;
}

.feature-item h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
}

/* Estilos de los modelos */
.models {
  padding: 40px 0;
}

.models h2 {
  text-align: center;
  margin-bottom: 30px;
}

.model-item {
  text-align: center;
  margin-bottom: 30px;
}

.model-item h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
}

/* Estilos de la sección de contacto */
.contact {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 60px 0;
}

.contact h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.contact p {
  font-size: 1.2em;
  margin-bottom: 30px;
}

/* Estilos del pie de página */
footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

</style>