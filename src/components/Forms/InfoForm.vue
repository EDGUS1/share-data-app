<script setup>
import { ref, toRefs, watch } from 'vue'
import store from '../../store'

const props = defineProps(['edit', 'datainfo'])
const { edit, datainfo } = toRefs(props)

const content = ref('')

if (edit.value) content.value = datainfo.value.name

watch(datainfo, () => {
  if (edit.value) content.value = datainfo.value.name
})

const saveElement = () => {
  if (content.value.length > 0) {
    if (edit.value) {
      store.commit('updateElement', {
        ...datainfo.value,
        name: content.value,
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: datainfo.value.id }
      store.state.typeView = 2
    } else {
      store.commit('addElement', {
        type: 2,
        name: content.value,
        data: []
      })
    }
    content.value = ''
  }
}
</script>

<template>
  <form action="">
    <div>
      <label for="content_id">Contenido</label>
      <br />
      <textarea name="" id="content_id" cols="30" rows="10" v-model="content"></textarea>
    </div>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
