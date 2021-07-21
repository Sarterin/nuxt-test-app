<template>
  <div :class="$style.item">
    <img :src="itemPhoto" alt="item" :class="$style.itemImage">
    <div :class="$style.itemInfo">
      <div :class="$style.itemName">{{ item.name }}</div>
      <div :class="$style.itemPrice">{{ item.price }} &#8381;</div>
      <div :class="$style.rateWrapper">
        <img src="~assets/rate.svg" alt="rate" :class="$style.rateImage">
        <div :class="$style.rateNumber">{{ item.rating }}</div>
      </div>
    </div>
    <img src="~assets/trash.svg" alt="trash" :class="$style.trashImage" @click="deleteItem(item.id)">
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
    }
  },
  methods: {
    deleteItem (id) {
      this.$store.commit('deleteItemById', id)
    }
  }
}
</script>

<style module lang="scss">
  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
    margin-top: 16px;
  }
  .itemInfo {
    display: flex;
    height: 80%;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 34px;
    width: 100%;
  }
  .rateWrapper {
    display: flex;
  }
  .rateImage {
    width: 20px;
    height: 20px;
  }
  .rateNumber {
    color: #F2C94C;
    font-size: 14px;
    font-weight: bold;
    padding-top: 1px;
  }
  .itemImage {
    width: 70px;
    height: 90px;
    margin: 15px 0 15px 25px;
  }
  .trashImage {
    width: 20px;
    height: 22px;
    cursor: pointer;
    margin-right: 16px;
    opacity: 0.6;
    &:hover {
      opacity: 1;
    }
  }
  .itemName {
    font-size: 14px;
    color: #59606D;
  }
  .itemPrice {
    font-size: 14px;
    font-weight: bold;
    margin-top: -12px;
  }
</style>
