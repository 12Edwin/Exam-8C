<template>
  <div class="home">
    <div id="hero">
      <div class="texture"></div>
      <video loop muted autoplay preload="auto">
        <source src="../assets/hero_image.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="caption">
        <h1>Welcome to my website</h1>
        <h2>This is a subtitle</h2>
        <b-button variant="success" class="mt-3" @click="()=> $router.push({name: 'home'})">Get started</b-button>
      </div>
    </div>
    <section class="features">
      <div class="container">
        <h2>Características Destacadas</h2>
        <div class="feature-item">
          <img src="feature-icon1.png" alt="Feature 1 Icon">
          <h3>Característica 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="feature-item">
          <img src="feature-icon2.png" alt="Feature 2 Icon">
          <h3>Característica 2</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="feature-item">
          <img src="feature-icon3.png" alt="Feature 3 Icon">
          <h3>Característica 3</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <h2>Testimonios</h2>
        <div class="testimonial-item">
          <p>"¡Increíble experiencia! El servicio y la calidad son inigualables."</p>
          <span>- Cliente Satisfecho</span>
        </div>
        <div class="testimonial-item">
          <p>"Nunca he tenido un automóvil tan confiable. ¡Altamente recomendado!"</p>
          <span>- Otro Cliente Satisfecho</span>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta? ¡Contáctanos!</p>
          <b-button>Enviar Mensaje</b-button>
      </div>
    </section>

    <footer>
      <div class="container">
        <p>&copy; 2024 Edwin. Todos los derechos reservados.</p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
.home {
  height: 700px;
  position: relative;
  align-items: center;
}

#hero {
  height: 100vh;
  width: 100%;
  background: #e7e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
}

#hero::after {
  width: 100%;
  height: 100%;
  content: '';
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5)
}

#hero video {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  object-fit: cover;
  font-family: 'object-fit: cover';
}

#hero .texture {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  background: url('../assets/texture.png');
}

#hero .caption {
  position: relative;
  z-index: 20;
  text-align: center;
  color: #ffffff;
}

#hero .caption h1 {
  text-transform: uppercase;
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
  margin-bottom: 0.5rem;
}

#hero .caption h2 {
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
  font-family: 'PT Sans', sans-serif;
}

@media screen and (min-width: 768px) {
  #hero .caption h1 {
    font-size: 2.5rem;
  }

  #hero .caption h2 {
    font-size: 1.75rem;
  }
}

@media screen and (min-width: 992px) {
  #hero .caption h1 {
    font-size: 3rem;
  }

  #hero .caption h2 {
    font-size: 2rem;
  }
}

@media screen and (min-width: 1200px) {
  #hero .caption h1 {
    font-size: 4rem;
  }

  #hero .caption h2 {
    font-size: 2.5rem;
  }
}



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

.feature-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

.testimonials {
  background-color: #e0e0e0;
  padding: 40px 0;
}

.testimonials h2 {
  text-align: center;
  margin-bottom: 30px;
}

.testimonial-item {
  text-align: center;
  margin-bottom: 30px;
}

.contact {
  padding: 40px 0;
  text-align: center;
}

.contact h2 {
  margin-bottom: 20px;
}

.contact form {
  max-width: 400px;
  margin: 0 auto;
}

.contact form input,
.contact form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}

.contact form button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.contact form button:hover {
  background-color: #0056b3;
}

footer {
  background-color: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
}

</style>
