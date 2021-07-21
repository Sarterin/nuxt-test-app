<template>
  <header :class="$style.header">
    <img src="~assets/logo.svg" alt="logo" :class="$style.logo">
    <div @click="openBasket">
      <img src="~assets/basket.svg" alt="basket" :class="$style.basket">
      <div v-if="getBasketLength" :class="$style.basketCircle">
        <div :class="$style.basketCount">
          {{ getBasketLength }}
        </div>
      </div>
    </div>
    <transition :name="$style.fade">
      <Basket v-show="isOpenBasket" @closeBasket="closeBasket"/>
    </transition>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isOpenBasket: false
    }
  },
  computed: {
    getBasketLength () {
      return this.$store.state.basket.length
    },
    activeBasket () {
      return this.isOpenBasket ? 'opened' : 'closed'
    }
  },
  methods: {
    openBasket () {
      this.isOpenBasket = true
      document.body.style.overflow = 'hidden'
    },
    closeBasket () {
      this.isOpenBasket = false
      window.document.body.removeAttribute('style')
    }
  }
}
</script>

<style module lang="scss">
  .fade {
    &:global(-enter-active) { transition: opacity .5s; }
    &:global(-leave-active) { transition: opacity .5s; }
    &:global(-enter) { opacity: 0; }
    &:global(-leave-to) { opacity: 0; }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 66px;
    background-color: #FFFFFF;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }

  .logo {
    width: 72px;
    height: 28px;
    margin-left: 88px;
  }

  .basket {
    width: 24px;
    height: 26px;
    margin-right: 108px;
    cursor: pointer;
  }
  .basketCircle {
    position: absolute;
    top: 15px;
    right: 105px;
    background-color: #959DAD;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
  }
  .basketCount {
    color: white;
    font-size: 7px;
    padding: 1px 0 0 4px;
  }
</style>
