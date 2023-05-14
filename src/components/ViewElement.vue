<script setup>
import { TYPE_CODE_ID, TYPE_FILE_ID, TYPE_INFO_ID, TYPE_LINK_ID } from '../constants'
import CodeView from './views/CodeView.vue'
import FileView from './views/FileView.vue'
import InfoView from './views/InfoView.vue'
import UrlView from './views/UrlView.vue'

defineProps(['data'])
</script>

<template>
  <UrlView v-if="data[0].type == TYPE_LINK_ID" :dataurl="data[0]" />
  <InfoView v-else-if="data[0].type == TYPE_INFO_ID" :datainfo="data[0]" />
  <CodeView v-else-if="data[0].type == TYPE_CODE_ID" :datacode="data[0]" />
  <FileView v-else-if="data[0].type == TYPE_FILE_ID" :datafile="data[0]" />
</template>
