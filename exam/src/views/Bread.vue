<template>
  <div>
    <div class="p-5 h5">
      <b-breadcrumb>
        <b-breadcrumb-item v-for="item in items" :active="isActive(item.href)" :href="item.href"> {{ item.text }}
        </b-breadcrumb-item>
      </b-breadcrumb>
    </div>
    <Formu v-if="table"/>
    <Table v-else/>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import Formu from "@/components/Form.vue";

export default {
  components: {Table, Formu},
  data() {
    return {
      items: [
        {
          text: "Formulario",
          href: "#1",
          active: true
        },
        {
          text: "Tabla",
          href: "#2",
          active: false
        },
      ],
      table: true,
    }
  },
  methods: {
    isActive(bread) {
      this.table = this.$route.fullPath.includes('#1')
      return this.$route.fullPath.includes(bread)
    }
  },
}
</script>

<style lang="scss" scoped>

</style>