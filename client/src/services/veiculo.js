import http from "../http-common"

const findAll = () => http.get("/veiculos")

const find = (id) =>  http.get(`/veiculos/${id}`)

const create = (data) => http.post("/veiculos", data)

const update = (id, data) => http.put(`/veiculos/${id}`, data)

const remove = (id) => http.delete(`/veiculos/${id}`)

export default {
  findAll, 
  find,
  create,
  update,
  remove
}
