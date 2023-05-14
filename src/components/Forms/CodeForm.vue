<script setup>
import { ref, toRefs, watch } from 'vue'
import store from '../../store'
import { TYPE_CODE_ID, VIEW_STATE } from '../../constants'

const props = defineProps(['edit', 'datacode'])
const { edit, datacode } = toRefs(props)

const name = ref('')
const origin = ref('')
const code = ref('')

if (edit.value) {
  name.value = datacode.value.name
  origin.value = datacode.value.data[0].origin
  code.value = datacode.value.data[0].code
}

watch(datacode, () => {
  if (edit.value) {
    name.value = datacode.value.name
    origin.value = datacode.value.data[0].origin
    code.value = datacode.value.data[0].code
  }
})

const saveElement = () => {
  code.value = code.value.trim()
  if (code.value.length > 0) {
    if (edit.value) {
      name.value = name.value.trim()
      origin.value = origin.value.trim()

      store.commit('updateElement', {
        ...datacode.value,
        name: name.value,
        data: [{ origin: origin.value, code: code.value }],
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: datacode.value.id }
      store.state.typeView = VIEW_STATE
    } else {
      store.commit('addElement', {
        type: TYPE_CODE_ID,
        name: name.value,
        data: [{ origin: origin.value, code: code.value }]
      })
    }
    name.value = ''
    origin.value = ''
    code.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="saveElement">
    <div class="m-4">
      <label for="name_id">Nombre</label>
      <input type="text" name="" id="name_id" v-model="name" />
    </div>
    <div class="m-4">
      <label for="origin_id">Fuente</label>
      <input type="text" name="" id="origin_id" v-model="origin" />
    </div>
    <div class="m-4">
      <label for="code_id">Codigo</label>
      <br />
      <textarea
        id="code_id"
        cols="30"
        rows="10"
        v-model="code"
        @keydown.enter.exact.prevent="saveElement"
      ></textarea>
    </div>
    <button type="submit" class="bg-green-600 text-white px-2">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
