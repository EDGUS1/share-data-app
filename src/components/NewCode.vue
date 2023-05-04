<script setup>
import { ref } from 'vue'
import store from '../store'

const name = ref('')
const origin = ref('')
const code = ref('')

const saveElement = () => {
  if (code.value.length > 0) {
    store.commit('addElement', {
      type: 3,
      name: name.value,
      data: [{ origin: origin.value, code: code.value }]
    })
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
      Guardar
    </button>
  </form>
</template>
