export const useCounterStore = defineStore('counter', {

  state: () => ({
    count: 1,
  }),

  getters: {
    double: state => state.count * 2,
  },

  actions: {
    increment() {
      this.count += 1
    },
  },
})
