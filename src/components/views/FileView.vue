<script setup>
defineProps(['datafile'])
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
        <li v-for="(i, index) in datafile.data" :key="index">{{ i.name }}</li>
      </ul>
    </div>
  </div>
</template>
