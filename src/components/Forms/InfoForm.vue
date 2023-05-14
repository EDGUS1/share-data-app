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
  <form @submit.prevent="saveElement">
    <div>
      <label for="content_id">Contenido</label>
      <br />
      <textarea
        id="content_id"
        cols="30"
        rows="10"
        v-model="content"
        @keydown.enter.exact.prevent="saveElement"
      ></textarea>
    </div>
    <button type="submit" class="bg-green-600 text-white px-2">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
