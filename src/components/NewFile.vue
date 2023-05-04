<script setup>
import { reactive, ref } from 'vue'
import store from '../store'
import downloadFile from '../helpers/downloadFile.js'

const name = ref('')
const file_list = reactive([])

const addFile = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    file_list.push(e.target.files[i])
  }

  // const file = e.target.files[0]
  // const reader = new FileReader()
  // reader.onload = function () {
  //   const arrayBuffer = this.result
  //   const array = new Uint8Array(arrayBuffer)
  //   const binaryString = String.fromCharCode.apply(null, array)

  //   console.log(binaryString)
  // }
  // reader.readAsArrayBuffer(file)
}

const saveElement = () => {
  if (file_list.length > 0) {
    store.commit('addElement', {
      type: 4,
      name: name.value,
      data: file_list
    })
  }
}
</script>

<template>
  <form action="">
    <div class="m-4">
      <label for="name_id">Nombre</label>
      <input type="text" name="" id="name_id" v-model="name" />
    </div>
    <div class="m-4">
      <label for="file_id">Archivo</label>
      <input type="file" name="" id="file_id" multiple @change="addFile" />
    </div>
    <div>
      <ul>
        <li v-for="el in file_list">
          <span>{{ el.name }}</span>
          <button class="bg-blue-200" @click.prevent="downloadFile(el)">Descargar</button>
        </li>
      </ul>
    </div>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      Guardar
    </button>
  </form>
</template>
