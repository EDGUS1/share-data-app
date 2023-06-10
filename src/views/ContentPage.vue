<script setup>
import CreateElement from '../components/CreateElement.vue'
import EditElement from '../components/EditElement.vue'
import ViewElement from '../components/ViewElement.vue'
import { CREATE_STATE, DEFAULT_STATE, EDIT_STATE, VIEW_STATE } from '../constants'
import store from '../store'

const changeState = () => {
  store.state.typeView = CREATE_STATE
}
</script>

<template>
  <div class="w-full flex justify-center mx-auto bg-gray-600 p-5">
    <div
      class="flex flex-col justify-center items-center"
      v-if="$store.state.typeView == DEFAULT_STATE"
    >
      <h2 class="text-3xl text-white">Pagina de inicio</h2>
      <button
        class="bg-sky-700 text-white px-2 py-1 m-3 hover:opacity-75 rounded"
        @click="changeState"
      >
        Crear nuevo
      </button>
    </div>
    <CreateElement
      class="w-full md:w-9/12 lg:w-6/12 text-zinc-300"
      v-else-if="$store.state.typeView == CREATE_STATE"
    />
    <ViewElement
      class="w-full md:w-9/12 lg:w-6/12 text-zinc-300"
      v-else-if="$store.state.typeView == VIEW_STATE"
      :data="$store.getters.getElement"
    />
    <EditElement
      class="w-full md:w-9/12 lg:w-6/12 text-zinc-300"
      v-else-if="$store.state.typeView == EDIT_STATE"
      :data="$store.getters.getElementToEdit"
    />
  </div>
</template>
