<script setup>
import SidebarContainer from './views/SidebarContainer.vue'
import ContentPage from './views/ContentPage.vue'
import { TYPES } from './constants'
</script>

<template>
  <div class="min-h-screen flex mx-auto">
    <SidebarContainer :data="$store.state.data" :types="TYPES" />
    <ContentPage />
  </div>
</template>
