export default {
  setSearch(state, value) {
    state.search = value
  },
  getContracts(stata, value) {
    stata.contracts = value
  },
  insertSections(state, value) {
    state.sectionsByUser = value
  },
  setSections(state, data) {
    state.contracts.push(data)
  },
  setChild(state, data) {
    debugger
    const index = state.contracts.findIndex(section => data.id === section.id)
    if (!state.contracts[index].children) {
      state.contracts[index].children = {}
    }
    Object.assign(state.contracts[index].children, data.children)
    let child = state.contracts[index]
    console.log(state.contracts[index])
    return child
  },
  deleteItemById(state, data) {
    const index = state.contracts.findIndex(section => data === section.id)
    state.contracts.splice(index, 1)
  }
}
