<script setup>
import store from '../store'

defineProps(['dataElements'])

const changeState = (e) => {
  store.state.selectElement = { id: e.target.id }
  store.state.typeView = 2
}

const editElement = () => {
  console.log('Edit')
}

const deleteElement = () => {
  console.log('Delete')
}
</script>

<template>
  <ul>
    <li
      v-for="d in dataElements"
      :key="d.id"
      class="flex justify-between border-2 border-white p-2 px-4 my-2"
    >
      <span :id="d.id" class="cursor-pointer" @click="changeState">{{ d.name || d.id }}</span>
      <span>
        <button class="mx-4" @click="editElement">Editar</button>
        <button @click="deleteElement">Eliminar</button>
      </span>
    </li>
  </ul>
</template>
