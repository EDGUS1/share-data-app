import { createStore } from 'vuex'

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
    getElementByIndex: (state) => (index) => {
      return state.data[index]
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
        id: crypto.randomUUID(),
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
