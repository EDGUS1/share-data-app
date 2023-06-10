<script setup>
import { reactive, ref } from 'vue'

const props = defineProps(['data', 'selected', 'isactive'])
const emit = defineEmits(['selectOption'])

const classList = reactive({ selectclicked: false, caretrotate: false, menuopen: false })
const is_active = ref(-1)

const selectedClicked = 'border border-[#26489a] border-solid shadow-[ 0_0_0.8em_#26489a]'
const caretRotate = 'rotate-180'
const menuOpen = 'block opacity-100'

const onchangeselect = () => {
  classList.menuopen = !classList.menuopen
  classList.caretrotate = !classList.caretrotate
  classList.selectclicked = !classList.selectclicked
}

const onclickelement = (d, index) => {
  props.selected.name = d.name
  classList.selectclicked = false
  classList.caretrotate = false
  classList.menuopen = false
  is_active.value = index
  emit('selectOption', d.id)
}
</script>
<template>
  <div class="min-w-[15em] relative my-2">
    <div
      class="bg-[#2a2f3b] text-white flex justify-between items-center border-2 border-[#2a2f3b] border-solid rounded p-3 cursor-pointer transition-colors duration-[0.3s] hover:bg-[#323741]"
      @click="onchangeselect"
      :class="[classList.selectclicked ? selectedClicked : '']"
    >
      <span> {{ selected.name }} </span>
      <div
        class="w-0 h-0 border-l-4 border-r-4 border-solid border-x-transparent border-t-[6px] border-t-purple-50 transition-transform"
        :class="[classList.caretrotate ? caretRotate : '']"
      ></div>
    </div>
    <ul
      class="py-1 px-3 bg-[#323741] border border-[#363143] border-solid shadow-[0_0.5em_1em_rgba(0,0,0,0.2)] rounded text-[#9fa5b5] absolute top-11 left-[50%] w-full -translate-x-1/2 duration-200 z-10 my-3"
      :class="[classList.menuopen ? menuOpen : 'opacity-0 hidden']"
    >
      <li
        class="py-3 px-2 my-1 mx-0 rounded-md cursor-pointer hover:bg-[#2a2d35]"
        v-for="(d, index) in data"
        @click="onclickelement(d, index)"
        :class="[index === is_active ? 'bg-[#23242a]' : '']"
      >
        {{ d.name }}
      </li>
    </ul>
  </div>
</template>
