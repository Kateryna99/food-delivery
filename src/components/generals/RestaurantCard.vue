<template>
<div class="restaurant-card">
  <div class="restaurant-card__wrapper">
    <div class="restaurant-card__img">
      <img :src="restaurant.imgUrl" :alt="restaurant.logo">
    </div>
    <div class="restaurant-card__logo">
      <img :src="restaurant.logo" :alt="restaurant.logo">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "RestaurantCard",
  props: {
    restaurant: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.restaurant-card {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    box-shadow: 0 2px 16px rgba(60, 62, 74, 0.08);

    height: 300px;
    cursor: pointer;
    overflow: hidden;



    &:hover {
      .restaurant-card__img {
        img{
          transform: scale(1.1);
        }
      }
    }
  }

  &__img {
    width: 100%;
    height: 184px;

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;

      transition: transform 0.3s ease;
    }
  }

  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 100%;
      height: 100%;

      object-fit: contain;
      object-position: center;
    }
  }
}
</style>