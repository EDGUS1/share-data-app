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
        <li v-for="i in datainfo.data">{{ i }}</li>
      </ul>
    </div>
  </div>
</template>
