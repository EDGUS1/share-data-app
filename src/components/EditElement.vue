<script setup>
import UrlForm from './Forms/UrlForm.vue'
import InfoForm from './Forms/InfoForm.vue'
import CodeForm from './Forms/CodeForm.vue'
import FileForm from './Forms/FileForm.vue'

const { data } = defineProps(['data'])
</script>

<template>
  <UrlForm v-if="data[0].type == 1" :edit="true" :dataurl="data[0]" />
  <InfoForm v-else-if="data[0].type == 2" :edit="true" :datainfo="data[0]" />
  <CodeForm v-else-if="data[0].type == 3" :edit="true" :datacode="data[0]" />
  <FileForm v-else-if="data[0].type == 4" :edit="true" :datafile="data[0]" />
</template>
