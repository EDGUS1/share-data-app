<script setup>
import copyClipboard from '../../helpers/copyClipboard'

defineProps(['datacode'])
</script>

<template>
  <div class="w-full h-fit bg-[#2a2f3b] p-3 rounded">
    <div class="w-full my-2">
      <p>Nombre</p>
      <span class="w-full block shadow shadow-gray-700 p-2 my-2"
        >{{ datacode.name || 'No se ingreso el nombre' }}
      </span>
    </div>
    <div class="my-2">
      <p>Fuente</p>
      <div class="flex justify-between items-center">
        <span class="w-full block shadow shadow-gray-700 p-2 my-2">
          {{ datacode.data[0].origin || 'No se ingreso ninguna fuente' }}
        </span>
        <button
          class="bg-lime-600 text-white mx-2 px-3 py-1 hover:opacity-75 rounded disabled:hidden"
          @click="copyClipboard(datacode.data[0].origin)"
          :disabled="!datacode.data[0].origin"
        >
          Copiar
        </button>
      </div>
    </div>
    <div class="flex flex-col my-2">
      <p>Codigo</p>
      <span class="shadow shadow-gray-700 p-2 my-2">{{ datacode.data[0].code }}</span>
      <button
        class="bg-lime-600 text-white px-3 py-1 my-2 hover:opacity-75 rounded"
        @click="copyClipboard(datacode.data[0].code)"
      >
        Copiar
      </button>
    </div>
  </div>
</template>
