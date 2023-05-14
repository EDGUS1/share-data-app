<script setup>
import UrlForm from './Forms/UrlForm.vue'
import InfoForm from './Forms/InfoForm.vue'
import CodeForm from './Forms/CodeForm.vue'
import FileForm from './Forms/FileForm.vue'
import { TYPE_CODE_ID, TYPE_FILE_ID, TYPE_INFO_ID, TYPE_LINK_ID } from '../constants'

defineProps(['data'])
</script>

<template>
  <UrlForm v-if="data[0].type == TYPE_LINK_ID" :edit="true" :dataurl="data[0]" />
  <InfoForm v-else-if="data[0].type == TYPE_INFO_ID" :edit="true" :datainfo="data[0]" />
  <CodeForm v-else-if="data[0].type == TYPE_CODE_ID" :edit="true" :datacode="data[0]" />
  <FileForm v-else-if="data[0].type == TYPE_FILE_ID" :edit="true" :datafile="data[0]" />
</template>
