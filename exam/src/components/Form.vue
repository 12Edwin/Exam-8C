<template>
  <div class="form-register">
    <b-card>
      <b-container>
        <h1>Form</h1>
        <b-form @submit="register" id="form">
          <div class="input-group-text">
            <label class="lab">Marca</label>
            <b-form-input class="input-form" type="text" v-model="marca" :state="marcaV"></b-form-input>
          </div>
          <span class="text-danger d-flex my-2" v-if="marca && !marcaV">Marca inválida</span>
          <div class="input-group-text">
            <label class="lab">Modelo</label>
            <b-input class="input-form" type="text" v-model="modelo" :state="modeloV"/>
          </div>
          <span class="text-danger d-flex my-2" v-if="modelo && !modeloV">Modelo inválido</span>
          <div class="input-group-text">
            <label class="lab">Año</label>
            <b-input class="input-form" type="number" v-model="anio" :state="anioV"/>
          </div>
          <span class="text-danger d-flex my-2" v-if="anio && !anioV">Año inválido</span>
          <div class="input-group-text">
            <label class="lab">Serie</label>
            <b-input class="input-form" type="text" v-model="serie" :state="serieV"/>
          </div>
          <span class="text-danger d-flex my-2" v-if="serie && !serieV">Serie inválida</span>
          <div class="w-100 d-flex mt-4">
            <b-button type="submit">Registrar</b-button>
          </div>
        </b-form>
      </b-container>
    </b-card>
  </div>
</template>
<script>
import {register} from "@/services/register";

export default {
  data() {
    return {
      marca: null,
      modelo: null,
      anio: null,
      serie: null
    }
  },
  methods:{
    async register(event){
      event.preventDefault()
      if(this.marcaV && this.modeloV && this.anioV && this.serieV){
        const data= {
          brand: this.marca,
          model: this.modelo,
          serie: this.serie,
          year: this.anio
        }
        const result = await register(data)
        if (result.id){
          this.$swal({
            title: 'Éxito',
            type: 'success',
            icon: 'success',
            text: 'El registro se hizo correctamente'
          })
        }else{
          this.$swal({
            title: 'Error',
            type: 'error',
            icon: 'error',
            text: 'Ocurrió un error al registrar'
          })
        }
      }else{
        this.$swal({
          title: 'Error',
          type: 'error',
          icon: 'error',
          text: 'Ingrese todos los campos correctamente'
        })
      }
      console.log(this.marca)
    }
  },
  computed: {
    marcaV() {
      if (this.marca == null) {
        return null
      }
      return /^[a-zA-Z0-9]+$/.test(this.marca)
    },
    modeloV() {
      if (this.modelo == null) {
        return null
      }
      return /^[a-zA-Z0-9]+$/.test(this.modelo)
    },
    anioV() {
      if (this.anio == null) {
        return null
      }
      return (this.anio <= (new Date()).getFullYear()) && this.anio > 1900
    },
    serieV() {
      if ([null, ''].includes(this.serie)) {
        return null
      }
      return /^[A-Za-z]{4}\d{3}-\d{2}[A-Za-z]{2}$/.test(this.serie)
    }
  }
}
</script>

<style>
  .form-register{
    margin-top: 5em;
    margin-left: 5em;
    margin-right: 5em;
  }
  .input-form{

  }
  .lab{
    width: 5.5em;
  }
</style>