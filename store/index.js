export const state = () => ({
  basket: [],
  categories: [],
  filterType: 'price'
})

export const mutations = {
  setItemInBasket (state, item) {
    state.basket.push(item)
  },
  setBasket (state, basket) {
    state.basket = basket
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  deleteItemById (state, id) {
    const index = state.basket.indexOf(state.basket.find(item => item.id === id))
    state.basket.splice(index, 1)
  },
  clearBasket (state) {
    state.basket = []
  },
  setFilterType (state, filterType) {
    state.filterType = filterType
  }
}
