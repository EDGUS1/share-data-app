<script setup>
import copyClipboard from '../../helpers/copyClipboard'

defineProps(['datainfo'])
</script>
<template>
  <div class="w-full h-fit bg-[#2a2f3b] p-3 rounded">
    <h2>Contenido</h2>
    <p class="w-full block shadow shadow-gray-700 p-2 my-2">
      {{ datainfo.name }}
    </p>
    <div class="flex justify-end my-4">
      <button
        class="bg-lime-600 text-white px-3 py-1 hover:opacity-75 rounded"
        @click="copyClipboard(datainfo.name)"
      >
        Copiar
      </button>
    </div>
  </div>
</template>
