<template>
  <div :class="$style.basketShadow" @click="closeBasket">
    <div :class="$style.basket" @click.stop>
      <div :class="$style.basketContent">
        <div :class="$style.basketHeader">
          <span :class="$style.basketTitle">Корзина</span>
          <div :class="$style.closeImage" @click="closeBasket">
            <img src="~assets/close.svg" alt="close">
          </div>
        </div>
        <div v-if="!getBasket.length && !isBasketSubmit">
          <div :class="$style.basketEmptyInfo">
            Пока что вы ничего не добавили в корзину.
          </div>
          <CustomButton textBtn="Перейти к выбору" :class="$style.basketBtn" @click.native="closeBasket"/>
        </div>
        <div v-if="getBasket.length">
          <div :class="$style.basketInfo">
            Товары в корзине
          </div>
          <BasketItem v-for="(item, index) in getBasket" :key="index" :item="item"/>
          <BasketForm :class="$style.basketForm" @success="displaySuccess"/>
        </div>
        <div v-if="isBasketSubmit" :class="$style.successMessage">
          <img src="~assets/success.png" alt="success" :class="$style.successImage">
          <div :class="$style.successText">Заявка успешно отправлена</div>
          <div :class="$style.successInfoText">Вскоре наш менеджер свяжется с Вами</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isBasketSubmit: false
    }
  },
  computed: {
    getBasket () {
      return this.$store.state.basket
    }
  },
  watch: {
    getBasket (newBasket) {
      localStorage.basket = JSON.stringify(newBasket)
    }
  },
  mounted () {
    if (localStorage.basket) {
      this.$store.commit('setBasket', JSON.parse(localStorage.basket))
    }
  },
  methods: {
    closeBasket () {
      this.$emit('closeBasket')
      this.isBasketSubmit = false
    },
    displaySuccess () {
      this.$store.commit('clearBasket')
      this.isBasketSubmit = true
    }
  }
}
</script>

<style module>
  .basketShadow {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    display: flex;
    justify-content: flex-end;
  }
  .basket {
    display: flex;
    width: 460px;
    min-height: 100%;
    background-color: #fff;
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px 0 0 8px;
    overflow-y:scroll;
    overflow-x:hidden;
  }
  .basketContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 52px 48px 0 48px;
  }
  .basketHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .basketTitle {
    font-weight: bold;
    font-size: 32px;
  }
  .closeImage {
    width: 14px;
    height: 14px;
    cursor: pointer;
  }
  .basketEmptyInfo {
    font-size: 22px;
    color: #1F1F1F;
    margin-top: 24px;
  }
  .basketInfo {
    font-size: 18px;
    color: #59606D;
    margin-top: 24px;
  }
  .basketBtn {
    margin-top: 24px;
  }
  .basketForm {
    margin-top: 32px;
  }
  .successMessage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .successImage {
    width: 80px;
    height: 80px;
  }
  .successText {
    font-size: 24px;
    font-weight: bold;
    color: #1F1F1F;
    margin-top: 24px;
  }
  .successInfoText {
    font-size: 16px;
    color: #59606D;
  }
</style>
