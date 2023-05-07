<script setup>
const { datafile } = defineProps(['datafile'])
</script>
<template>
  <div>
    <div>
      <p>Nombre</p>
      <span>{{ datafile.name }}</span>
    </div>
    <div>
      <p>Files</p>
      <ul>
        <li v-for="i in datafile.data">{{ i.name }}</li>
      </ul>
    </div>
  </div>
</template>
