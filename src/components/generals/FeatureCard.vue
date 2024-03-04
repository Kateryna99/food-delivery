<template>
<div class="feature-card">
  <div class="feature-card__wrapper">
    <div class="feature-card__block">
      <div class="feature-card__item">
        <h2 class="feature-card__number">{{ feature.number }}</h2>
      </div>
    </div>
    <div class="feature-card__block">
      <p class="feature-card__text">{{feature.text}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    feature: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
.feature-card {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  &__block {
    font-family: Poppins, sans-serif;
  }

  &__item {
    border-radius: 50%;
    background-color: rgb(255, 225, 69);
    width: 126px;
    height: 126px;

    display: flex;
    justify-content: center;

    position: relative;

    &:before{
      content: '';
      position: absolute;
      top: -23px;
      left: calc(50% - 63px);

      width: 126px;
      height: 126px;

      border: 1px solid rgb(183, 156, 16);
      border-radius: 50%;
    }
  }

  &__number {

    font-size: 58px;
    font-weight: 700;
    line-height: 1.8;
  }

  &__text {
    font-weight: 600;
    letter-spacing: 0;
  }
}
</style>