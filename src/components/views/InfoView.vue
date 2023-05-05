<script setup>
const { datainfo } = defineProps(['datainfo'])
</script>
<template>
  <div>
    <p>Contenido</p>
    <p>{{ datainfo.name }}</p>
  </div>
</template>
