<script setup>
import { reactive, ref } from 'vue'

import UrlForm from './Forms/UrlForm.vue'
import InfoForm from './Forms/InfoForm.vue'
import CodeForm from './Forms/CodeForm.vue'
import FileForm from './Forms/FileForm.vue'
import DropDownMenu from './custom/DropDownMenu.vue'
import { TYPES, TYPE_LINK_ID, TYPE_CODE_ID, TYPE_INFO_ID, TYPE_FILE_ID } from '../constants'

const selectedType = ref('0')
const customSelectProperty = reactive({ name: 'Seleccione una opcion' })

const selectOption = (id) => {
  selectedType.value = id
}
</script>

<template>
  <div>
    <div class="my-3 text-black">
      <label for="option_type_id" class="text-white">Seleccione el tipo de elemento</label>

      <DropDownMenu :data="TYPES" @select-option="selectOption" :selected="customSelectProperty" />
    </div>
    <UrlForm v-if="selectedType == TYPE_LINK_ID" :edit="false" />
    <InfoForm v-else-if="selectedType == TYPE_INFO_ID" :edit="false" />
    <CodeForm v-else-if="selectedType == TYPE_CODE_ID" :edit="false" />
    <FileForm v-else-if="selectedType == TYPE_FILE_ID" :edit="false" />
  </div>
</template>
