<script setup>
import { reactive, ref } from 'vue'
import store from '../../store'
import downloadFile from '../../helpers/downloadFile.js'

const { edit, datafile } = defineProps(['edit', 'datafile'])

const name = ref('')
const file_list = reactive([])

if (edit) {
  name.value = datafile.name
  for (let i = 0; i < datafile.data.length; i++) file_list.push(datafile.data[i])
}

const addFile = (e) => {
  for (let i = 0; i < e.target.files.length; i++) {
    file_list.push(e.target.files[i])
  }
  // e.target.value = ''
}

const deteleFile = (index) => {
  file_list.splice(index, 1)
}

const saveElement = () => {
  const data_files = [...file_list]
  if (file_list.length > 0) {
    if (edit) {
      store.commit('updateElement', {
        ...datafile,
        name: name.value,
        data: data_files,
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: datafile.id }
      store.state.typeView = 2
    } else {
      store.commit('addElement', {
        type: 4,
        name: name.value,
        data: data_files
      })
    }
    name.value = ''
    file_list.splice(0)
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
        <li v-for="(el, index) in file_list" :key="index">
          <span>{{ el.name }}</span>
          <button class="bg-blue-500" @click.prevent="downloadFile(el)">Descargar</button>
          <button class="bg-red-500" @click.prevent="deteleFile(index)">Eliminar</button>
        </li>
      </ul>
    </div>
    <button type="submit" class="bg-green-600 text-white px-2" @click.prevent="saveElement">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
