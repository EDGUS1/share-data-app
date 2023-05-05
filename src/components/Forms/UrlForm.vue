<script setup>
import { reactive, ref } from 'vue'
import store from '../../store'

const name = ref('')
const element = ref('')

const urls = reactive([])

const addElement = () => {
  urls.push(element.value)
  element.value = ''
}

const saveElement = () => {
  if (urls.length > 0) {
    store.commit('addElement', {
      type: 1,
      name: name.value,
      data: urls
    })
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

    <button class="bg-sky-700 text-white px-2" @click.prevent="addElement">Agregar</button>
    <ul>
      <li v-for="el in urls">{{ el }}</li>
    </ul>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      Guardar
    </button>
  </form>
</template>
