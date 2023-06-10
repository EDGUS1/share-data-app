<script setup>
import { reactive, ref, toRefs, watch } from 'vue'
import store from '../../store'
import downloadFile from '../../helpers/downloadFile.js'
import { TYPE_FILE_ID, VIEW_STATE } from '../../constants'

const props = defineProps(['edit', 'datafile'])
const { edit, datafile } = toRefs(props)

const name = ref('')
const file_list = reactive([])

if (edit.value) {
  name.value = datafile.value.name
  for (let i = 0; i < datafile.value.data.length; i++) file_list.push(datafile.value.data[i])
}

watch(datafile, () => {
  if (edit.value) {
    name.value = datafile.value.name
    file_list.splice(0)
    for (let i = 0; i < datafile.value.data.length; i++) file_list.push(datafile.value.data[i])
  }
})

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
  if (file_list.length > 0) {
    const data_files = [...file_list]
    name.value = name.value.trim()
    if (edit.value) {
      store.commit('updateElement', {
        ...datafile.value,
        name: name.value,
        data: data_files,
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: datafile.value.id }
      store.state.typeView = VIEW_STATE
    } else {
      store.commit('addElement', {
        type: TYPE_FILE_ID,
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
    <div class="flex my-4">
      <label
        for="file_id"
        class="w-full text-center rounded p-2 bg-blue-600 hover:opacity-75 cursor-pointer"
        >Agregar nuevo archivo</label
      >
      <input type="file" id="file_id" class="hidden" multiple @change="addFile" />
    </div>
    <ul class="my-5" v-if="file_list.length > 0">
      <li class="flex justify-between my-2" v-for="(file, index) in file_list" :key="index">
        <span>{{ file.name }}</span>
        <div>
          <button
            class="bg-blue-500 mx-3 px-3 py-1 hover:opacity-75 rounded"
            @click.prevent="downloadFile(file)"
          >
            Descargar
          </button>
          <button
            class="bg-red-500 px-3 py-1 hover:opacity-75 rounded"
            @click.prevent="deteleFile(index)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>
    <div class="my-5" v-else>No hay archivos agregados</div>
    <button type="submit" class="w-full bg-green-600 text-white p-1 hover:opacity-75 rounded">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
