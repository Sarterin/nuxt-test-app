<template>
  <div :class="$style.contentWrapper">
    <Navbar :categories="categories" />
    <div :class="$style.content">
      <div v-for="item in sortedItems" :key="item.id">
        <Item
          :class="$style.items"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.category)
  },
  data () {
    return {
      categories: [],
      items: []
    }
  },
  async fetch () {
    if (!this.$store.state.categories.length) {
      this.categories = await fetch('https://frontend-test.idaproject.com/api/product-category')
        .then(res => res.json())
      this.$store.commit('setCategories', this.categories)
    }
    this.items = await fetch(`https://frontend-test.idaproject.com/api/product?category=${this.category}`)
      .then(res => res.json())
  },
  computed: {
    category () {
      return this.$route.params.category
    },
    sortedItems () {
      return this.$store.state.filterType === 'price'
        ? this.items.map(i => i).sort((a, b) => a.price > b.price ? 1 : -1)
        : this.items.map(i => i).sort((a, b) => a.rating < b.rating ? 1 : -1)
    }
  },
  mounted () {
    if (this.$store.state.categories.length) {
      this.categories = this.$store.state.categories
    }
  }
}
</script>

<style module>
  body {
    margin: 0;
    font-family: 'PT Sans';
    overflow-y: scroll;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .contentWrapper {
    display: flex;
    margin-right: 108px;
  }
  .content {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-left: 90px;
  }
  .items {
    display: flex;
    margin: 0 16px 16px 0;
  }
</style>
