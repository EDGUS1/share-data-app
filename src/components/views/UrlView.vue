<script setup>
const { dataurl } = defineProps(['dataurl'])
</script>
<template>
  <div>
    <div>
      <p>Nombre</p>
      <span>{{ dataurl.name }}</span>
    </div>
    <div>
      <p>Links</p>
      <ul>
        <li v-for="u in dataurl.data">{{ u }}</li>
      </ul>
    </div>
  </div>
</template>
