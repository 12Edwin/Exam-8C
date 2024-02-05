<template>
  <div id="app">
    <header>
      <nav class="navbar">
        <div class="logo" @click="()=> $router.push({name:'landPage'})">
          <img src="../src/assets/logo.png" alt="Car Logo">
          <span>Autos</span>
        </div>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
        </ul>
      </nav>
    </header>
    <nav>

    </nav>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  background: #e7e9e9;
  font-family: 'Arial', sans-serif;
}

header {
  background-color: #333;
  color: white;
  padding: 15px 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.nav-links a:hover {
  color: #ff9900;
}
</style>
<script setup>
</script>