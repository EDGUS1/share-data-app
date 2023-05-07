<script setup>
import Sidebar from './views/Sidebar.vue'
import ContentPage from './views/ContentPage.vue'
import { types } from './constants'
</script>

<template>
  <div class="min-h-screen flex mx-auto">
    <Sidebar :data="$store.state.data" :types="types" />
    <ContentPage />
  </div>
</template>
