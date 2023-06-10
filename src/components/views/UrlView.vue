<script setup>
import copyClipboard from '../../helpers/copyClipboard'

defineProps(['dataurl'])
</script>
<template>
  <div class="w-full h-fit md:w-9/12 lg:w-6/12 bg-[#2a2f3b] p-3 rounded">
    <div class="my-2">
      <h2>Nombre</h2>
      <span class="w-full block shadow shadow-gray-700 p-2 my-2">{{ dataurl.name }}</span>
    </div>
    <div class="my-2">
      <h2>Links</h2>
      <ul>
        <li
          class="flex justify-between my-2 shadow shadow-gray-700 p-2"
          v-for="(url, index) in dataurl.data"
          :key="index"
        >
          <span>{{ url }} </span>
          <button
            class="bg-lime-600 text-white px-3 py-1 hover:opacity-75 rounded"
            @click="copyClipboard(url)"
          >
            Copiar
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
