<template>
  <aside :class="$style.navbar">
    <div :class="$style.productTypes">
      <ul>
        <li
          v-for="category in categories"
          :key="category.id"
        >
          <nuxt-link :to="`/${category.id}`" :active-class="$style.active" :class="$style.navlinks">
            {{ category.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    categories: {
      default: []
    }
  },
  computed: {
    path () {
      return `/${this.ca}`
    }
  }
}
</script>

<style module lang="scss">
  .navbar {
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  ul li {
    padding: 0;
    margin: 0 0 16px 0;
    list-style: none;
  }
  .navlinks {
    font-weight: 400;
    font-size: 16px;
    color: #959DAD;
    text-decoration-line: none;

    &:hover {
      color: #59606D;
    }
  }
  .active {
    color: #1F1F1F;
    text-decoration-line: underline;
  }
</style>
