<script setup>
import copyClipboard from '../../helpers/copyClipboard'

defineProps(['datainfo'])
</script>
<template>
  <div>
    <p>Contenido</p>
    <p>{{ datainfo.name }}</p>
  </div>
  <button @click="copyClipboard(datainfo.name)">Copiar</button>
</template>
