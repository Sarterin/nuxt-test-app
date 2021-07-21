<template>
  <div>
    <button :class="$style.customBtn">
      {{ textBtn }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    textBtn: {
      type: String,
      default: ''
    }
  }
}
</script>

<style module lang="scss">
  .customBtn {
    width: 364px;
    height: 50px;
    border-radius: 8px;
    color: white;
    background-color: #1F1F1F;
    border: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #59606D;
    }
  }
</style>
