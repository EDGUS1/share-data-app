<script setup>
import CreateElement from '../components/CreateElement.vue'
import EditElement from '../components/EditElement.vue'
import ViewElement from '../components/ViewElement.vue'
</script>

<template>
  <div class="w-full bg-emerald-300 p-5">
    <div v-if="$store.state.typeView == 0">
      <h2>Pagina de inicio</h2>
    </div>
    <CreateElement v-else-if="$store.state.typeView == 1" />
    <ViewElement v-else-if="$store.state.typeView == 2" :data="$store.getters.getElement" />
    <EditElement v-else-if="$store.state.typeView == 3" :data="$store.getters.getElementToEdit" />
  </div>
</template>
