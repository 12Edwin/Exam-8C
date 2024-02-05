<template>
  <div>
    <b-sidebar id="sidebar-1" class="sidebar" title="Sidebar" shadow>
      <div class="px-3 py-2">
        <b-nav-item >
          <b-link :to="{ name: 'home' }">Inicio</b-link>
        </b-nav-item>

        <b-nav-item >
          <b-link :to="{ name: 'bread' }">Registros</b-link>
        </b-nav-item>
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
</style>
<style>
.b-sidebar{
  position: fixed !important;
}
</style>