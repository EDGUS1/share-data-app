<script setup>
import { ref } from 'vue'

import UrlForm from './Forms/UrlForm.vue'
import InfoForm from './Forms/InfoForm.vue'
import CodeForm from './Forms/CodeForm.vue'
import FileForm from './Forms/FileForm.vue'

const selectOption = ref(0)
</script>

<template>
  <label for="option_type_id">Seleccione el tipo de elemento</label>
  <select name="" id="option_type_id" v-model="selectOption">
    <option value="0" hidden>Seleccione</option>
    <option v-bind:value="e.id" :key="e.id" v-for="e in $store.state.types">{{ e.name }}</option>
  </select>
  <UrlForm v-if="selectOption == 1" />
  <InfoForm v-else-if="selectOption == 2" />
  <CodeForm v-else-if="selectOption == 3" />
  <FileForm v-else-if="selectOption == 4" />
</template>
