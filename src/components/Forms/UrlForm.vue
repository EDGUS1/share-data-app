<script setup>
import { reactive, ref, toRefs, watch } from 'vue'
import store from '../../store'
import { TYPE_LINK_ID, VIEW_STATE } from '../../constants'

const props = defineProps(['edit', 'dataurl'])
const { edit, dataurl } = toRefs(props)

const name = ref('')
const element = ref('')
const old_element_index = ref(0)
const urls = reactive([])
const editUrlField = ref(false)

if (edit.value) {
  name.value = dataurl.value.name
  for (let i = 0; i < dataurl.value.data.length; i++) urls.push(dataurl.value.data[i])
}

watch(dataurl, () => {
  if (edit.value) {
    name.value = dataurl.value.name
    urls.splice(0)
    for (let i = 0; i < dataurl.value.data.length; i++) urls.push(dataurl.value.data[i])
  }
})

const addElement = () => {
  if (editUrlField.value) {
    urls[old_element_index.value] = element.value
    editUrlField.value = false
  } else {
    if (element.value.length > 0) {
      urls.push(element.value)
    }
  }
  element.value = ''
}

const deleteUrl = (index) => {
  urls.splice(index, 1)
  editUrlField.value = false
  element.value = ''
}

const editUrl = (el, index) => {
  old_element_index.value = index
  element.value = el
  editUrlField.value = true
}

const saveElement = () => {
  if (urls.length > 0) {
    const data_url = [...urls]
    name.value = name.value.trim()

    if (edit.value) {
      store.commit('updateElement', {
        ...dataurl.value,
        name: name.value,
        data: data_url,
        dateUpdated: Date.now()
      })
      store.state.selectElement = { id: dataurl.value.id }
      store.state.typeView = VIEW_STATE
    } else {
      store.commit('addElement', {
        type: TYPE_LINK_ID,
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
  <form class="h-fit bg-[#2a2f3b] p-3 rounded" @submit.prevent="saveElement">
    <div class="flex justify-between my-4 flex-col">
      <label for="name_id">Nombre</label>
      <input
        id="name_id"
        type="text"
        v-model="name"
        class="w-full bg-gray-600 p-2 rounded outline-0 mt-1"
      />
    </div>

    <div class="flex justify-between my-4 flex-col">
      <label for="element_id">Url</label>
      <input
        id="element_id"
        type="text"
        v-model="element"
        class="w-full bg-gray-600 p-2 rounded outline-0 mt-1"
      />
    </div>

    <div class="flex justify-end">
      <button
        class="bg-sky-700 text-white px-3 py-1 hover:opacity-75 rounded"
        @click.prevent="addElement"
      >
        {{ editUrlField ? 'Actualizar' : 'Agregar' }}
      </button>
    </div>
    <ul class="my-5" v-if="urls.length > 0">
      <li class="flex justify-between my-2" v-for="(url, index) in urls" :key="index">
        <span>{{ url }}</span>
        <div>
          <button
            class="bg-blue-500 mx-3 px-3 py-1 hover:opacity-75 rounded"
            @click.prevent="editUrl(url, index)"
          >
            Edit
          </button>
          <button
            class="bg-red-500 px-3 py-1 hover:opacity-75 rounded"
            @click.prevent="deleteUrl(index)"
          >
            X
          </button>
        </div>
      </li>
    </ul>
    <div class="my-5" v-else>No hay url agregadas</div>
    <button type="submit" class="w-full bg-green-600 text-white p-1 hover:opacity-75 rounded">
      {{ edit ? 'Actualizar' : 'Guardar' }}
    </button>
  </form>
</template>
