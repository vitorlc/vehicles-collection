import veiculoService from '../../services/veiculo'

export default {
  props: {
    veiculoEditar: Object
  },
  inject: ["listarVeiculos"],
  watch: {
    veiculoEditar: function(veiculo) {
      this.form = {...veiculo}
      this.form.ano = veiculo.ano.toString()
      this.isEdit = true
    }
  },
  data() {
    return {
      form: {
        _id: null,
        veiculo: '',
        marca: '',
        ano: '',
        vendido: false,
        descricao: ''
      },
      isEdit: false
    }
  },
  methods: {
    async onSubmit() {
      try {
        if (this.isEdit) {
          await veiculoService.update(this.form._id, this.form)
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Veículo Adicionado',
            showConfirmButton: false,
            timer: 1500
          })
          await this.listarVeiculos()
          this.isEdit = false
        } else {
          await veiculoService.create(this.form)
          this.$swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: 'Veículo Adicionado',
            showConfirmButton: false,
            timer: 1500
          })
          await this.listarVeiculos()
        }
        this.form = {}
      } catch (e) {
        this.isEdit = false
        console.log(e)
      }
    },
    onCancel() {
      this.form = {}
    }
  }
}