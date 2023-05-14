<script setup>
import { ref } from 'vue'

import UrlForm from './Forms/UrlForm.vue'
import InfoForm from './Forms/InfoForm.vue'
import CodeForm from './Forms/CodeForm.vue'
import FileForm from './Forms/FileForm.vue'
import { TYPES, TYPE_LINK_ID, TYPE_CODE_ID, TYPE_INFO_ID, TYPE_FILE_ID } from '../constants'

const selectOption = ref(0)
</script>

<template>
  <label for="option_type_id">Seleccione el tipo de elemento</label>
  <select name="" id="option_type_id" v-model="selectOption">
    <option value="0" hidden>Seleccione</option>
    <option v-bind:value="typ.id" :key="typ.id" v-for="typ in TYPES">{{ typ.name }}</option>
  </select>
  <UrlForm v-if="selectOption == TYPE_LINK_ID" :edit="false" />
  <InfoForm v-else-if="selectOption == TYPE_INFO_ID" :edit="false" />
  <CodeForm v-else-if="selectOption == TYPE_CODE_ID" :edit="false" />
  <FileForm v-else-if="selectOption == TYPE_FILE_ID" :edit="false" />
</template>
