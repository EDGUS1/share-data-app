<script setup>
import CodeView from './views/CodeView.vue'
import FileView from './views/FileView.vue'
import InfoView from './views/InfoView.vue'
import UrlView from './views/UrlView.vue'

defineProps(['data'])
</script>

<template>
  <UrlView v-if="data[0].type == 1" :dataurl="data[0]" />
  <InfoView v-else-if="data[0].type == 2" :datainfo="data[0]" />
  <CodeView v-else-if="data[0].type == 3" :datacode="data[0]" />
  <FileView v-else-if="data[0].type == 4" :datafile="data[0]" />
</template>
