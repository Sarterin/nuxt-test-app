<template>
  <div :class="$style.item">
    <div :class="$style.itemHeader">
      <div :class="$style.rateWrapper">
        <img src="~assets/rate.svg" alt="rate" :class="$style.rateImage">
        <div :class="$style.rateNumber">
          {{ item.rating }}
        </div>
      </div>
      <img :src="itemPhoto" alt="item" :class="$style.itemImage">
      <div :class="{[$style.hidden]: getInBasket}">
        <img src="~assets/basket.svg" alt="basket" :class="$style.basketImage" @click="addToBasket">
      </div>
    </div>
    <div :class="$style.itemName">
      {{ item.name }}
    </div>
    <div :class="$style.itemPrice">
      {{ item.price }} &#8381;
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  computed: {
    itemPhoto () {
      return `https://frontend-test.idaproject.com${this.item.photo}`
    },
    getInBasket () {
      return this.$store.state.basket.find(item => JSON.stringify(item) === JSON.stringify(this.item))
    }
  },
  methods: {
    addToBasket () {
      this.$store.commit('setItemInBasket', this.item)
    }
  }
}
</script>

<style module lang="scss">
  .item {
    display: flex;
    flex-direction: column;
    width: 264px;
    height: 272px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }
  .itemHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    user-select: none;
  }
  .rateWrapper {
    display: flex;
    margin: 13px 0 0 16px;
  }
  .rateImage {
    width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
  }
  .rateNumber {
    color: #F2C94C;
    font-size: 14px;
    font-weight: bold;
  }
  .itemImage {
    width: 143px;
    height: 180px;
    margin: 18px 0 0 0;
  }
  .basketImage {
    width: 16px;
    height: 16px;
    margin: 16px 16px 0 0;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  .hidden {
    visibility: hidden;
  }
  .itemName {
    font-size: 14px;
    color: #59606D;
    margin: 16px 0 0 16px;
  }
  .itemPrice {
    font-size: 14px;
    font-weight: bold;
    margin: 6px 0 0 16px;
  }
</style>
