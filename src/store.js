import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

const store = createStore({
  state() {
    return {
      typeView: 1,
      data: [],
      types: [
        {
          id: 1,
          name: 'link'
        },
        {
          id: 2,
          name: 'info'
        },
        {
          id: 3,
          name: 'code'
        },
        {
          id: 4,
          name: 'file'
        }
      ],
      selectElement: {}
    }
  },
  getters: {
    getElement(state) {
      return state.data.filter((d) => d.id == state.selectElement.id)
    },
    getElementByType: (state) => (id) => {
      return state.data.filter((d) => d.type === id)
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
    }
  }
})

export default store
