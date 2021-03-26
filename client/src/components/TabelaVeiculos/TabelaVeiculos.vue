<template>
  <el-table :data="veiculos" style="width: 100%">
    <el-table-column fixed prop="veiculo" label="Veículo"> </el-table-column>
    <el-table-column prop="marca" label="Marca"> </el-table-column>
    <el-table-column prop="ano" label="Ano"> </el-table-column>
    <el-table-column prop="vendido" label="Vendido" :formatter="formatVendido"> </el-table-column>
    <el-table-column prop="descricao" label="Descrição" width="300">
    </el-table-column>
    <el-table-column fixed="right" label="Ações">
      <template slot-scope="scope">
        <el-button @click="handleEdit(scope.row)" type="text" size="small">Editar</el-button>
        <el-button @click="handleRemove(scope.row)" type="text" size="small">Remover</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script src="./TabelaVeiculosController.js"></script>

<style>
</style>