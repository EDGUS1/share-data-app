<script setup>
import { ref, reactive, computed } from 'vue'
import SidebarList from '../components/SidebarList.vue'
import store from '../store'

const props = defineProps(['data', 'types'])

const selectedType = ref('0')
const input = ref('')
const filterBtn = ref(true)
const data = reactive({ value: props.data })

const changeState = () => {
  store.state.typeView = 1
}

const filterList = () => {
  filterBtn.value = false
}

const inputChange = () => {
  filterBtn.value = false
}

const defaultState = () => {
  filterBtn.value = true
  data.value = props.data
  selectedType.value = '0'
  input.value = ''
}

const filteredList = computed(() => {
  if (input.value && input.value !== '' && selectedType.value != '0') {
    return data.value.filter(
      (d) =>
        d.name.toLowerCase().includes(input.value.toLowerCase()) && d.type == selectedType.value
    )
  }
  if (selectedType.value != '0') {
    return data.value.filter((d) => d.type == selectedType.value)
  }
  if (input.value && input.value !== '') {
    return data.value.filter((d) => d.name.toLowerCase().includes(input.value.toLowerCase()))
  }
  return data.value
})
</script>

<template>
  <header class="w-[25%] min-w-[20rem] max-w-xs bg-amber-300 p-3">
    <input type="text" v-model="input" placeholder="Busqueda" @keypress="inputChange" />
    <button class="bg-sky-700 text-white px-2" @click="changeState">+ Nuevo</button>
    <br />
    <label for="type_id">Tipo de elemento</label>
    <select name="" id="type_id" @change="filterList" v-model="selectedType">
      <option value="0" hidden>Seleccione</option>
      <option v-bind:value="t.id" :key="t.id" v-for="t in props.types">{{ t.name }}</option>
    </select>
    <button class="bg-sky-700 text-white px-2" @click="defaultState" :disabled="filterBtn">
      Borrar filtros
    </button>
    <SidebarList :dataElements="filteredList" />
  </header>
</template>
