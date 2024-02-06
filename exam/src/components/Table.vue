<template>
  <div class="table-view">
    <b-card>
      <b-container>
        <h1>Autos</h1>
        <b-table :items="items" :fields="fields" :per-page="perPage" :current-page="currentPage"></b-table>
        <div class="w-100 d-flex justify-content-center">
          <b-pagination
              v-model="currentPage"
              :total-rows="items.length"
              :per-page="perPage"
              aria-controls="my-table"
          ></b-pagination>
        </div>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import {getData} from "@/services/getData";

export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        {marca: 40, modelo: 'Dickerson', serie: 'Macdonald', anio: '2023-08-05'},
        {marca: 21, modelo: 'Larsen', serie: 'Shaw', anio: '2023-08-05'},
        {marca: 89, modelo: 'Geneva', serie: 'Wilson', anio: '2023-08-05'},
        {marca: 38, modelo: 'Jami', serie: 'Carney', anio: '2023-08-05'}
      ],
      fields: [
        {
          key: 'brand',
          label: 'Marca',
          sortable: true,
          sortLabel: false
        },
        {
          key: 'model',
          label: 'Modelo',
          sortable: true,
        },
        {
          key: 'year',
          label: 'Año',
          sortable: true,
        },
        {
          key: 'serie',
          label: 'Serie',
          sortable: true,
        }
      ]
    }
  },

  methods:{
    async getData(){
      const data= await getData({
        pageNumber: this.currentPage,
        pageSize: this.perPage
      })
      this.items = data.content
    }
  },

  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.table-view {
  margin-top: 5em;
  margin-left: 5em;
  margin-right: 5em;
}
</style>