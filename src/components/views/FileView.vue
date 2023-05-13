<script setup>
import downloadFile from '../../helpers/downloadFile'

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
        <li v-for="(file, index) in datafile.data" :key="index">
          <span>{{ file.name }}</span>
          <button class="bg-blue-500" @click.prevent="downloadFile(file)">Descargar</button>
        </li>
      </ul>
    </div>
  </div>
</template>
