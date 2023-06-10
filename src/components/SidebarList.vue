<script setup>
import { DEFAULT_STATE, EDIT_STATE, VIEW_STATE } from '../constants'
import store from '../store'

defineProps(['dataElements'])

const changeState = (id) => {
  store.state.selectElement = { id }
  store.state.typeView = VIEW_STATE
}

const editElement = (id) => {
  store.state.editElement = { id }
  store.state.typeView = EDIT_STATE
}

const deleteElement = (index) => {
  const { id } = store.getters.getElementByIndex(index)
  if (store.state.editElement.id == id || store.state.selectElement.id == id)
    store.state.typeView = DEFAULT_STATE
  store.commit('deleteElement', index)
}

const itemName = (element) => {
  return (element.name || element.id).slice(0, 15)
}
</script>

<template>
  <ul>
    <li
      v-for="(element, index) in dataElements"
      :key="element.id"
      class="flex justify-between border border-white rounded shadow p-2 px-4 my-3 hover:scale-[1.05]"
    >
      <span class="cursor-pointer" @click="changeState(element.id)">{{ itemName(element) }}</span>
      <span>
        <button class="mx-4" @click="editElement(element.id)">✏</button>
        <button @click="deleteElement(index)">❌</button>
      </span>
    </li>
  </ul>
</template>
