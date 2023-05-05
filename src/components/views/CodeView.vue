<script setup>
const { datacode } = defineProps(['datacode'])
</script>

<template>
  <div>
    <div>
      <p>Nombre</p>
      <span>{{ datacode.name }}</span>
    </div>
    <div>
      <p>Fuente</p>
      <span>{{ datacode.data[0].origin }}</span>
    </div>
    <div>
      <p>Codigo</p>
      <span>{{ datacode.data[0].code }}</span>
    </div>
  </div>
</template>
