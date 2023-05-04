<script setup>
import NewElement from '../components/NewElement.vue'
import ViewElement from '../components/ViewElement.vue'
</script>

<template>
  <div class="w-full bg-emerald-300 p-5">
    <h2 class="center mx-auto" v-if="typeView === 0">Pagina de inicio</h2>
    <NewElement v-else-if="$store.state.typeView === 1" />
    <ViewElement v-else-if="$store.state.typeView === 2" :data="$store.getters.getElement" />
  </div>
</template>
