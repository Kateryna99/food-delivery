<template>
<div class="specialty-card">
  <div class="specialty-card__wrapper">
    <div class="specialty-card__img">
      <img :src="specialty.imgUrl" :alt="specialty.title">
    </div>
    <div class="specialty-card__item">
      <p class="specialty-card__text">{{specialty.title}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "SpecialtyCard",
  props: {
    specialty: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.specialty-card {
  max-width: 136px;
  width: 100%;
  &__wrapper {
    padding: 10px 0 30px 0;
    border: 1px solid #E5E5E5;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;


    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    height: 136px;



    &:hover {

      .specialty-card__img {
        transform: scale(1.2);
      }
    }
  }

  &__img {
    flex-grow: 1;
    transition: transform 0.3s ease;

    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
      object-position: center;
    }
  }

  &__item {
  }

  &__text {
    text-align: center;
    text-transform: capitalize;
  }
}
</style>