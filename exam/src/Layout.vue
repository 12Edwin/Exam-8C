<template>
  <div>
    <b-sidebar id="sidebar-1" class="sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2 d-block">
        <div class="sidebar-item" >
          <router-link class="w-100" :to="{ name: 'home' }">Inicio</router-link>
        </div>
        <div class="sidebar-item">
          <router-link class="w-100" :to="{ name: 'bread' }">Registros</router-link>
        </div>
      </div>
    </b-sidebar>
      <b-button variant="info" class="mx-2" pill v-b-toggle.sidebar-1><b-icon icon="arrow-right"/> </b-button>
      <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content{
  width: 100%;
  overflow: auto;
  height: 92vh;
}

.sidebar-item {
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  text-decoration: none;
}

.sidebar-item:hover {
  background-color: #f0f0f0;
}
</style>
<style>
.b-sidebar{
  position: fixed !important;
}
</style>