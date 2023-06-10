<script setup>
import { ref, toRefs, watch } from 'vue'
import store from '../../store'
import { TYPE_INFO_ID, VIEW_STATE } from '../../constants'

const props = defineProps(['edit', 'datainfo'])
const { edit, datainfo } = toRefs(props)

const content = ref('')

if (edit.value) content.value = datainfo.value.name

watch(datainfo, () => {
  if (edit.value) content.value = datainfo.value.name
})

const saveElement = () => {
  content.value = content.value.trim()
  if (content.value.length > 0) {
    if (edit.value) {
      store.commit('updateElement', {
        ...datainfo.value,
        name: content.value,
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: datainfo.value.id }
      store.state.typeView = VIEW_STATE
    } else {
      store.commit('addElement', {
        type: TYPE_INFO_ID,
        name: content.value,
        data: []
      })
    }
    content.value = ''
  }
}
</script>

<template>
  <form class="h-fit bg-[#2a2f3b] p-3 rounded" @submit.prevent="saveElement">
    <div class="my-3">
      <label for="content_id" class="block my-2">Contenido</label>

      <textarea
        id="content_id"
        rows="10"
        v-model="content"
        class="w-full bg-gray-600 outline-0 rounded p-1"
        @keydown.enter.exact.prevent="saveElement"
      ></textarea>
    </div>
    <button type="submit" class="w-full bg-green-600 text-white p-1 hover:opacity-75 rounded">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
