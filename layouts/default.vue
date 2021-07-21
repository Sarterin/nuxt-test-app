<template>
  <div>
    <Header />
    <div :class="$style.wrapper">
      <ItemFilter />
      <Nuxt />
    </div>
  </div>
</template>

<style module>
  .wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 88px;
  }
</style>
