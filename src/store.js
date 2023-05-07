import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const store = createStore({
  state() {
    return {
      typeView: 0,
      data: [],
      selectElement: {},
      editElement: {}
    }
  },
  getters: {
    getElement(state) {
      return state.data.filter((d) => d.id == state.selectElement.id)
    },
    getElementByType: (state) => (id) => {
      return state.data.filter((d) => d.type === id)
    },
    getElementToEdit(state) {
      return state.data.filter((d) => d.id == state.editElement.id)
    }
  },
  mutations: {
    addElement(state, newData) {
      state.data.push({
        id: uuidv4(),
        ...newData,
        dateCreated: Date.now(),
        dateUpdated: Date.now()
      })
    },
    updateElement(state, updateData) {
      state.data.forEach((e, index) => {
        if (e.id === updateData.id) state.data.splice(index, 1, updateData)
      })
    },
    deleteElement(state, index) {
      state.data.splice(index, 1)
    }
  }
})

export default store
