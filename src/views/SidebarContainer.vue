<script setup>
import { ref, reactive, computed } from 'vue'

import SidebarList from '../components/SidebarList.vue'
import DropDownMenu from '../components/custom/DropDownMenu.vue'

import store from '../store'
import { CREATE_STATE } from '../constants'

const props = defineProps(['data', 'types'])

const selectedType = ref('0')
const input = ref('')
const filterBtn = ref(true)
const data = reactive({ value: props.data })
const customSelectProperty = reactive({ name: 'Seleccione una opcion' })

const changeState = () => {
  store.state.typeView = CREATE_STATE
}

const inputChange = () => {
  filterBtn.value = false
}

const defaultState = () => {
  filterBtn.value = true
  data.value = props.data
  selectedType.value = '0'
  input.value = ''
  customSelectProperty.name = 'Seleccione una opcion'
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

const selectOption = (id) => {
  selectedType.value = id
  filterBtn.value = false
}
</script>

<template>
  <header class="hidden md:block w-[35%] min-w-[18rem] max-w-xs bg-gray-700 text-zinc-300 p-3">
    <label for="busqueda_id">Ingrese el término a buscar:</label>
    <input
      type="text"
      id="busqueda_id"
      class="w-full my-2 border-2 border-solid border-[#FFF2] bg-[#2a2f3b] rounded p-3 text-base outline-0"
      v-model="input"
      placeholder="Búsqueda"
      @input="inputChange"
    />

    <label for="type_id" class="block mt-2">Tipo de elemento</label>

    <DropDownMenu :data="types" @select-option="selectOption" :selected="customSelectProperty" />

    <div class="flex justify-end my-4">
      <button
        class="bg-sky-700 text-white px-3 py-1 mx-2 hover:opacity-75 rounded"
        @click="changeState"
      >
        Nuevo
      </button>
      <button
        class="bg-red-700 text-white px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-75 rounded"
        @click="defaultState"
        :disabled="filterBtn"
      >
        Borrar filtros
      </button>
    </div>
    <SidebarList :dataElements="filteredList" />
  </header>
</template>
