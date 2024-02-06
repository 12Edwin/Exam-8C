<template>
  <div class="table-view">
    <b-card>
      <b-container>
        <h1>Autos</h1>
        <b-table :fields="fields" id="my-table" :items="findData" :per-page="perPage"
                 :current-page="currentPage" small></b-table>
        <div class="w-100 d-flex justify-content-center">
          <b-pagination v-model="currentPage" :total-rows="total" :per-page="perPage"
                        aria-controls="my-table"></b-pagination>
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
      total: null,
      items: [],
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
    async findData(){
      const data= await getData({
        page: this.currentPage -1,
        size: this.perPage
      })

      this.total = data.totalElements
      return data.content
    }
  },

  mounted() {
    this.findData()
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