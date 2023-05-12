<script setup>
import copyClipboard from '../../helpers/copyClipboard'

defineProps(['dataurl'])
</script>
<template>
  <div>
    <div>
      <p>Nombre</p>
      <span>{{ dataurl.name }}</span>
    </div>
    <div>
      <p>Links</p>
      <ul>
        <li v-for="(u, index) in dataurl.data" :key="index">
          <span>{{ u }} </span>
          <button @click="copyClipboard(u)">Copiar</button>
        </li>
      </ul>
    </div>
  </div>
</template>
