<script setup>
import Sidebar from './views/Sidebar.vue'
import ContentPage from './views/ContentPage.vue'
</script>

<template>
  <div class="min-h-screen flex mx-auto">
    <Sidebar :data="$store.state.data" :types="$store.state.types" />
    <ContentPage />
  </div>
</template>
