<script setup>
import { ref } from 'vue'

import UrlForm from './Forms/UrlForm.vue'
import InfoForm from './Forms/InfoForm.vue'
import CodeForm from './Forms/CodeForm.vue'
import FileForm from './Forms/FileForm.vue'
import { types } from '../constants'

const selectOption = ref(0)
</script>

<template>
  <label for="option_type_id">Seleccione el tipo de elemento</label>
  <select name="" id="option_type_id" v-model="selectOption">
    <option value="0" hidden>Seleccione</option>
    <option v-bind:value="typ.id" :key="typ.id" v-for="typ in types">{{ typ.name }}</option>
  </select>
  <UrlForm v-if="selectOption == 1" :edit="false" />
  <InfoForm v-else-if="selectOption == 2" :edit="false" />
  <CodeForm v-else-if="selectOption == 3" :edit="false" />
  <FileForm v-else-if="selectOption == 4" :edit="false" />
</template>
