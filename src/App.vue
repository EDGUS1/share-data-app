<script setup>
import SidebarContainer from './views/SidebarContainer.vue'
import ContentPage from './views/ContentPage.vue'
import { types } from './constants'
</script>

<template>
  <div class="min-h-screen flex mx-auto">
    <SidebarContainer :data="$store.state.data" :types="types" />
    <ContentPage />
  </div>
</template>
