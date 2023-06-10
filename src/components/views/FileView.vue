<script setup>
import downloadFile from '../../helpers/downloadFile'

defineProps(['datafile'])
</script>
<template>
  <div class="w-full h-fit bg-[#2a2f3b] p-3 rounded">
    <div class="my-2">
      <h2>Nombre</h2>
      <span class="w-full block shadow shadow-gray-700 p-2 my-2"> {{ datafile.name }}</span>
    </div>
    <div class="my-2">
      <h2>Files</h2>
      <ul>
        <li
          class="flex justify-between my-2 shadow shadow-gray-700 p-2"
          v-for="(file, index) in datafile.data"
          :key="index"
        >
          <span>{{ file.name }}</span>
          <button
            class="bg-blue-500 px-3 py-1 hover:opacity-75 rounded"
            @click.prevent="downloadFile(file)"
          >
            Descargar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
