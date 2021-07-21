<template>
  <div :class="$style.filterWrapper">
    <h1 :class="$style.title">
      Каталог
    </h1>
    <span :class="$style.filter" @click.stop="toggleFilter">
      Сортировать по:
      <span :class="$style.filterType">{{currentFilter.value}}</span>
      <img src="~assets/arrow.svg" alt="arrow" :class="$style.arrowImage">
    </span>
    <FilterModal v-if="isOpenFilter" @closeFilter="closeFilter" @setFilter="setFilter" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpenFilter: false,
      currentFilter: { name: 'price', value: 'цене' }
    }
  },
  methods: {
    toggleFilter () {
      this.isOpenFilter = !this.isOpenFilter
    },
    closeFilter () {
      this.isOpenFilter = false
    },
    setFilter (filterType) {
      this.currentFilter = filterType
      this.$store.commit('setFilterType', filterType.name)
    }
  }
}
</script>

<style module lang="scss">
  .filterWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 97px;
    margin-right: 108px;
  }
  .title {
    margin-top: 32px;
    font-weight: bold;
    font-size: 32px;
  }
  .filter {
    font-size: 16px;
    color: #1F1F1F;
    cursor: pointer;
    user-select: none;
    margin-left: 90px;
    white-space: nowrap;
  }
  .filterType {
    font-size: 16px;
    color: #59606D;
  }
  .arrowImage {
    width: 5px;
    height: 3px;
    margin-bottom: 3px;
  }
  .filterTypes {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 160px;
    height: 68px;
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    right: 110px;
    top: 130px;
    z-index: 1;
  }
  .filterItem {
    margin: 4px 0;
    padding: 2px 12px;
    color: #959DAD;
    &:hover {
      background-color: #F8F8F8;
      color: #1F1F1F;
      cursor: pointer;
    }
  }
</style>
