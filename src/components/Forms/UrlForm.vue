<script setup>
import { reactive, ref } from 'vue'
import store from '../../store'

const { edit, dataurl } = defineProps(['edit', 'dataurl'])

const name = ref('')
const element = ref('')
const urls = reactive([])

if (edit) {
  name.value = dataurl.name
  for (let i = 0; i < dataurl.data.length; i++) urls.push(dataurl.data[i])
}

const addElement = () => {
  urls.push(element.value)
  element.value = ''
}

const saveElement = () => {
  if (urls.length > 0) {
    if (edit) {
      store.commit('updateElement', {
        ...dataurl,
        name: name.value,
        data: urls,
        dateUpdated: Date.now()
      })
    } else {
      store.commit('addElement', {
        type: 1,
        name: name.value,
        data: urls
      })
    }
  }
}

const deleteUrl = () => {
  // TODO: ELIMINAR DE LA LISTA
}
</script>

<template>
  <form action="">
    <div class="m-4">
      <label for="name_id">nombre</label>
      <input id="name_id" type="text" v-model="name" />
    </div>

    <div class="m-4">
      <label for="element_id">elemento</label>
      <input id="element_id" type="text" v-model="element" />
    </div>

    <button class="bg-sky-700 text-white px-2" @click.prevent="addElement">Agregar</button>
    <ul>
      <li v-for="el in urls">
        <span>{{ el }}</span>
        <button class="bg-blue-500" @click.prevent="editUrl">Edit</button>
        <button class="bg-red-500" @click.prevent="deleteUrl">X</button>
      </li>
    </ul>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
