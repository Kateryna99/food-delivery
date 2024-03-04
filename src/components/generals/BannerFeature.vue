<template>
<div class="banner-feature">
  <div class="banner-feature__wrapper">
    <div class="banner-feature__block">
      <div class="banner-feature__img">
        <img :src="feature.icon" alt="">
      </div>
      <div class="banner-feature__item">
        <p class="banner-feature__text">{{feature.text}}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BannerFeature",
  props: {
    feature: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.banner-feature {
  &__wrapper {
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__item {
  }

  &__img {
    width: 48px;
    height: 48px;
    flex-shrink: 0;

    img{
      width: 100%;
      height: 100%;

      object-fit: contain;
      object-position: center;
    }
  }

  &__text {
   text-transform: lowercase;

    &::first-letter {
      text-transform: uppercase;
    }
  }
}
</style>