<script setup>
import { ref, reactive } from 'vue'
import SidebarList from '../components/SidebarList.vue'
import store from '../store'

const props = defineProps(['data', 'types'])

const selectedType = ref('0')
const dilterBtn = ref(true)
const data = reactive({ value: props.data })

const changeState = () => {
  store.state.typeView = 1
}

const filterList = () => {
  dilterBtn.value = false
  data.value = store.getters.getElementByType(selectedType.value)
}

const defaultState = () => {
  dilterBtn.value = true
  data.value = props.data
}
</script>

<template>
  <header class="w-[25%] min-w-[20rem] max-w-xs bg-amber-300 p-3">
    <input type="text" placeholder="Busqueda" />
    <button class="bg-sky-700 text-white px-2" @click="changeState">+ Nuevo</button>
    <br />
    <label for="type_id">Tipo de elemento</label>
    <select name="" id="type_id" @change="filterList" v-model="selectedType">
      <option value="0" hidden>Seleccione</option>
      <option v-bind:value="t.id" :key="t.id" v-for="t in props.types">{{ t.name }}</option>
    </select>
    <button class="bg-sky-700 text-white px-2" @click="defaultState" :disabled="dilterBtn">
      Borrar filtros
    </button>
    <SidebarList :dataElements="data.value" />
  </header>
</template>
