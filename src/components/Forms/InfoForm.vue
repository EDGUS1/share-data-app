<script setup>
import { ref } from 'vue'
import store from '../../store'

const { edit, datainfo } = defineProps(['edit', 'datainfo'])

const content = ref('')

if (edit) {
  content.value = datainfo.name
}

const saveElement = () => {
  if (content.value.length > 0) {
    if (edit) {
      store.commit('updateElement', {
        ...datainfo,
        name: content.value,
        dateUpdated: Date.now()
      })
    } else {
      store.commit('addElement', {
        type: 2,
        name: content.value,
        data: []
      })
    }
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
