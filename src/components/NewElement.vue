<script setup>
import { ref } from 'vue'
import NewUrl from './NewUrl.vue'
import NewCode from './NewCode.vue'
import NewFile from './NewFile.vue'
import NewInfo from './NewInfo.vue'

const selectOption = ref(0)
</script>

<template>
  <label for="option_type_id">Seleccione el tipo de elemento</label>
  <select name="" id="option_type_id" v-model="selectOption">
    <option value="0" hidden>Seleccione</option>
    <option v-bind:value="e.id" :key="e.id" v-for="e in $store.state.types">{{ e.name }}</option>
  </select>
  <NewUrl v-if="selectOption == 1" />
  <NewInfo v-else-if="selectOption == 2" />
  <NewCode v-else-if="selectOption == 3" />
  <NewFile v-else-if="selectOption == 4" />
</template>
