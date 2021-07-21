<template>
  <div :class="$style.filterTypes" @click.stop>
    <div
      v-for="filter in filters"
      :key="filter.name"
      :class="$style.filterItem"
      @click="setFilter(filter)"
    >
      По {{ filter.value }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      filters: [
        { name: 'price', value: 'цене' },
        { name: 'popularity', value: 'популярности' }
      ]
    }
  },
  mounted () {
    window.addEventListener('click', this.closeFilter)
  },
  destroyed () {
    window.removeEventListener('click', this.closeFilter)
  },
  methods: {
    closeFilter () {
      this.$emit('closeFilter')
    },
    setFilter (filter) {
      this.$emit('setFilter', filter)
      this.closeFilter()
    }
  }
}
</script>

<style module lang="scss">
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

    @media (max-width: 576px) {
      right: -130px;
    }
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
