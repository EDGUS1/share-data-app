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
  <form class="h-fit bg-[#2a2f3b] p-3 rounded" @submit.prevent="saveElement">
    <div class="flex justify-between my-4 flex-col">
      <label for="name_id">Nombre</label>
      <input
        type="text"
        id="name_id"
        v-model="name"
        class="w-full bg-gray-600 p-2 rounded outline-0 mt-1"
      />
    </div>
    <div class="flex justify-between my-4 flex-col">
      <label for="origin_id">Fuente</label>
      <input
        type="text"
        id="origin_id"
        v-model="origin"
        class="w-full bg-gray-600 p-2 rounded outline-0 mt-1"
      />
    </div>
    <div class="my-4">
      <label for="code_id" class="block my-2">Codigo</label>
      <textarea
        id="code_id"
        rows="7"
        v-model="code"
        class="w-full bg-gray-600 rounded p-1 outline-0"
        @keydown.enter.exact.prevent="saveElement"
      ></textarea>
    </div>
    <button type="submit" class="w-full bg-green-600 text-white p-1 hover:opacity-75 rounded">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
