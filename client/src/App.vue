<template>
  <div id="app">
    <h1>CRUD Veículos</h1>
    <FormVeiculo :veiculoEditar="veiculoEditar" />
    <TabelaVeiculos :veiculos="veiculosData" />
  </div>
</template>

<script>
import FormVeiculo from "./components/FormVeiculo/FormVeiculo";
import TabelaVeiculos from "./components/TabelaVeiculos/TabelaVeiculos"
import veiculoService from './services/veiculo'

export default {
  name: "App",
  components: {
    FormVeiculo,
    TabelaVeiculos,
  },
  async created() {
    await this.listarVeiculos()
  },
  data() {
    return {
      veiculosData: [],
      veiculoEditar: null,
    };
  },
  methods: {
    async listarVeiculos() {
      let { data } = await veiculoService.findAll()
      this.veiculosData = [...data]
    },
    editarVeiculo(veiculo) {
      this.veiculoEditar = veiculo
    },
  },
  provide: function () {
    return {
      listarVeiculos: this.listarVeiculos,
      editarVeiculo: this.editarVeiculo
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 98vh; 
  border: 1px solid #eee;
  padding: 40px;
}
</style>
