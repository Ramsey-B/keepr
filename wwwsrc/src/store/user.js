export default {
  namespaced: true,
  state: {
    name: "test"
  },
  action: {
    test({dispatch, commit}, test) {
      console.log(test)
    }
  }
}