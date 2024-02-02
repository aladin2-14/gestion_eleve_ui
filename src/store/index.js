import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user:null,
    }
  }
})
export default store