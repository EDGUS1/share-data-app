<script setup>
import { ref, toRefs, watch } from 'vue'
import store from '../../store'

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
  if (code.value.length > 0) {
    if (edit.value) {
      store.commit('updateElement', {
        ...datacode.value,
        name: name.value,
        data: [{ origin: origin.value, code: code.value }],
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: datacode.value.id }
      store.state.typeView = 2
    } else {
      store.commit('addElement', {
        type: 3,
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
  <form action="">
    <div class="m-4">
      <label for="">Nombre</label>
      <input type="text" name="" id="" v-model="name" />
    </div>
    <div class="m-4">
      <label for="">Fuente</label>
      <input type="text" name="" id="" v-model="origin" />
    </div>
    <div class="m-4">
      <label for="">Codigo</label>
      <br />
      <textarea name="" id="" cols="30" rows="10" v-model="code"></textarea>
    </div>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
