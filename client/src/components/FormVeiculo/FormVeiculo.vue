<template>
  <el-form ref="formVeiculo" :model="form" label-width="120px">
    <el-form-item label="Veiculo">
      <el-input v-model="form.veiculo"></el-input>
    </el-form-item>
    <el-form-item label="Marca" :rules="[{required: true, trigger: 'blur'}]">
      <el-input v-model="form.marca"></el-input>
    </el-form-item>
    <el-form-item label="Ano" :rules="[{required: true, trigger: 'blur'}]">
      <el-col :span="11">
        <el-date-picker
          type="year"
          value-format="yyyy"
          placeholder="Selecione uma data"
          v-model="form.ano"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
     
    </el-form-item>
    <el-form-item label="Vendido">
      <el-switch v-model="form.vendido"></el-switch>
    </el-form-item>
   
    <el-form-item label="Descrição" :rules="[{required: true, trigger: 'blur'}]">
      <el-input type="textarea" v-model="form.descricao"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Adicionar Veículo</el-button>
      <el-button @click="onCancel">Cancelar</el-button>
    </el-form-item>
  </el-form>
</template>

<script src="./FormVeiculoController.js"></script>

<style>
</style>