import veiculoService from '../../services/veiculo'

export default {
  props: {
    veiculos: Array
  },
  inject: ["listarVeiculos", "editarVeiculo"],
  methods: {
    formatVendido(row) {
      if(row.vendido) return 'Sim'
      return 'Não'
    },
    handleEdit(veiculo) {
      this.editarVeiculo(veiculo)
    },
    async handleRemove(veiculo) {
      try {
        await veiculoService.remove(veiculo._id)
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Veículo Removido',
          showConfirmButton: false,
          timer: 1500
        })
        await this.listarVeiculos()
      } catch (e) {
        console.log(e)
      }
    }
  },
}