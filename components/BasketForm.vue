<template>
  <div>
    <div :class="$style.basketFormTitle">
      Оформить заказ
    </div>
    <form
      id="basketForm"
      novalidate="true"
      @submit.prevent="checkForm"
    >
      <input
        id="name"
        v-model="name"
        name="name"
        placeholder="Ваше имя"
        :class="$style.customInput"
      >
      <input
        id="phone"
        v-model="phone"
        v-mask="'+7 ### ###-##-##'"
        type="text"
        name="phone"
        placeholder="Телефон"
        :class="$style.customInput"
      >
      <input
        id="address"
        v-model="address"
        name="address"
        placeholder="Адрес"
        :class="$style.customInput"
      >
      <CustomButton type="submit" textBtn="Отправить" :class="$style.basketBtn" />
      <div v-if="errors.length" :class="$style.errorMessages">
        <ul>
          <li v-for="error in errors" :key="error">
            {{ error }}
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      errors: [],
      name: '',
      phone: '',
      address: ''
    }
  },

  methods: {
    checkForm () {
      this.errors = []
      if (!this.name || !this.phone || !this.address) {
        this.errors.push('Все поля должны быть заполнены')
      }
      if (this.validName(this.name)) {
        this.errors.push('Введите корректное имя')
      }
      if (this.phone.length < 16) {
        this.errors.push('Введите корректный номер телефона')
      }
      if (!this.errors.length) {
        this.send()
      }
    },
    send () {
      this.$emit('success')
    },
    validName (name) {
      const reg = /\d/g
      return reg.test(name)
    }
  }
}
</script>

<style module lang="scss">
  input {
    padding: 8px 14px;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px #F8F8F8 inset;
    }
  }
  .basketFormTitle {
    font-size: 18px;
    color: #59606D;
  }
  .basketBtn {
    margin: 38px 0;
  }
  .customInput {
    width: 336px;
    height: 34px;
    background-color: #F8F8F8;
    color: #1F1F1F;
    border-radius: 8px;
    border: none;
    outline: none;
    margin-top: 16px;
  }
  .errorMessages ul li {
    margin-bottom: 4px;
  }
  .errorMessages {
    font-size: 14px;
    color: red;
    margin-top: 10px;
  }
</style>
