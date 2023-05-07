<script setup>
import { reactive, ref } from 'vue'
import store from '../../store'

const { edit, dataurl } = defineProps(['edit', 'dataurl'])

const name = ref('')
const element = ref('')
const old_element_index = ref(0)
const urls = reactive([])
const editUrlField = ref(false)

if (edit) {
  name.value = dataurl.name
  for (let i = 0; i < dataurl.data.length; i++) urls.push(dataurl.data[i])
}

const addElement = () => {
  if (editUrlField.value) {
    urls[old_element_index.value] = element.value
    editUrlField.value = false
  } else {
    if (element.value.length > 0) {
      urls.push(element.value)
      element.value = ''
    }
  }
}

const deleteUrl = (index) => {
  urls.splice(index, 1)
}

const editUrl = (el, index) => {
  old_element_index.value = index
  element.value = el
  editUrlField.value = true
}

const saveElement = () => {
  const data_url = [...urls]
  if (urls.length > 0) {
    if (edit) {
      store.commit('updateElement', {
        ...dataurl,
        name: name.value,
        data: data_url,
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: dataurl.id }
      store.state.typeView = 2
    } else {
      store.commit('addElement', {
        type: 1,
        name: name.value,
        data: data_url
      })
    }
    name.value = ''
    urls.splice(0, urls.length)
  }
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

    <button class="bg-sky-700 text-white px-2" @click.prevent="addElement">
      {{ editUrlField ? 'Actualizar' : 'Agregar' }}
    </button>
    <ul>
      <li v-for="(el, index) in urls" :key="index">
        <span>{{ el }}</span>
        <button class="bg-blue-500" @click.prevent="editUrl(el, index)">Edit</button>
        <button class="bg-red-500" @click.prevent="deleteUrl(index)">X</button>
      </li>
    </ul>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
