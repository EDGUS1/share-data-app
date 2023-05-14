<script setup>
import CreateElement from '../components/CreateElement.vue'
import EditElement from '../components/EditElement.vue'
import ViewElement from '../components/ViewElement.vue'
import { CREATE_STATE, EDIT_STATE, VIEW_STATE } from '../constants'
</script>

<template>
  <div class="w-full bg-emerald-300 p-5">
    <div v-if="$store.state.typeView == 0">
      <h2>Pagina de inicio</h2>
    </div>
    <CreateElement v-else-if="$store.state.typeView == CREATE_STATE" />
    <ViewElement
      v-else-if="$store.state.typeView == VIEW_STATE"
      :data="$store.getters.getElement"
    />
    <EditElement
      v-else-if="$store.state.typeView == EDIT_STATE"
      :data="$store.getters.getElementToEdit"
    />
  </div>
</template>
