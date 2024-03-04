<template>
<div class="map section observe-root">
  <div class="section__wrapper">
    <div class="map__container">
      <div class="map__block observe-root__block">
        <div class="map__img">
          <img src="@/assets/img/page/map/map.jpg" alt="Map">
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "MapComponent"
}
</script>

<style lang="scss" scoped>
.map {
  &__wrapper {
    padding: 72px 0;
  }

  &__container {
  }

  &__block {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    height: 90vh;
    max-width: 100%;
    width: 100%;

    max-height: 700px;

    display: flex;
    justify-content: center;
    align-items: center;

    img{
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;

    }

    @media (max-width: 620px) {
      max-height: 400px;


      img {
        height: 90%;
        width: 90%;
      }
    }
  }
}
</style>