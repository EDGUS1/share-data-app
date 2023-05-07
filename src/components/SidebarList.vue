<script setup>
import store from '../store'

defineProps(['dataElements'])

const changeState = (id) => {
  store.state.selectElement = { id }
  store.state.typeView = 2
}

const editElement = (id) => {
  store.state.editElement = { id }
  store.state.typeView = 3
}

const deleteElement = (index) => {
  store.commit('deleteElement', index)
}
</script>

<template>
  <ul>
    <li
      v-for="(d, index) in dataElements"
      :key="d.id"
      class="flex justify-between border-2 border-white p-2 px-4 my-2"
    >
      <span class="cursor-pointer" @click="changeState(d.id)">{{ d.name || d.id }}</span>
      <span>
        <button class="mx-4" @click="editElement(d.id)">Editar</button>
        <button @click="deleteElement(index)">Eliminar</button>
      </span>
    </li>
  </ul>
</template>
