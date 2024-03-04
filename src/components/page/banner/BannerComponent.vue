<template>
  <div class="banner observe-root">
    <div class="banner__wrapper">
      <div class="banner__container">
        <div class="banner__content">
          <div class="banner__block observe-root__block">
            <div class="banner__item">
              <h1 class="banner__title">Your Food court at home</h1>
            </div>
            <div class="banner__features banner-features" id="delivery">
              <div class="banner-features__block ">
                <div class="banner-features__item">
                  <h5 class="banner-features__title">Delivery</h5>
                </div>
                <div class="banner-features__item">
                  <p class="banner-features__subtitle">Order in</p>
                </div>
              </div>
              <div class="banner-features__block">
                <div class="banner-features__item">
                  <h5 class="banner-features__title">Take out</h5>
                </div>
                <div class="banner-features__item">
                  <p class="banner-features__subtitle">Grab and go</p>
                </div>
              </div>
            </div>
          </div>
          <div class="banner__block observe-root__block">
            <div class="banner__img">
              <img src="@/assets/img/page/banner/banner_img.png" alt="">
              <p class="banner__text">Fresh salad, Il Pasifigio</p>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-info">
        <div class="banner-info__wrapper">
          <banner-feature v-for="item in getBannerFeatures" :key="item.id" :feature="{
          icon: item.icon,
          text: item.text
        }"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import BannerFeature from "@/components/generals/BannerFeature";

export default {
  name: "BannerComponent",
  components: {BannerFeature},
  computed: {
    ...mapState(useGeneralStore, ['getBannerFeatures'])
  }
}
</script>

<style lang="scss" scoped>
.banner {
  &__wrapper {
    min-height: 100vh;
    padding: 97px 0 123px 0;

    position: relative;
    z-index: 5;

    max-width: 2000px;
    width: 100%;

    margin: 0 auto;

    @media (max-width: 991px) {
      display: flex;
      flex-direction: column;
      gap: 40px;

      padding-bottom: 30px;
    }
  }

  &__container {
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      flex-direction: column;
      gap: 30px;

      .banner__block {
        gap: 40px;
      }
      .banner__img {
        align-self: center;
      }
    }
    @media (max-width: 580px) {
      gap: 10px;

      .banner__block {
        gap: 20px;
      }
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 88px;

  }

  &__item {
  }

  &__title {
    max-width: 534px;
    width: 100%;

    font-family: 'Poppins', sans-serif;
    font-size: 58px;
    font-weight: 300;
    line-height: 1.1;

    padding-top: 50px;

    @media (max-width: 991px) {
      font-size: 45px;
      max-width: 400px;
    }
    @media (max-width: 767px) {
      max-width: 100%;
    }
  }

  &__features {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__img {
    height: 85vh;
    width: 100%;


    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 40px;

      display: block;

      background-image: url("@/assets/img/page/banner/arrow.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      width: 5vh;
      height: 10vh;

      @media (max-width: 620px) {
        bottom: 40px;
      }
      @media (max-width: 480px) {
        bottom: 0;
      }
    }

    img {
      width: 100%;
      height: 100%;

      object-fit: contain;
      object-position: center;

      animation: rotate 16s linear infinite;

      @keyframes rotate {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 40px;
      left: -71px;

      display: block;
      background-image: url("@/assets/img/page/banner/rucola.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      height: 19vh;
      width: 10vw;

      transform: rotate(-20deg);

      @media (max-width: 767px) {
        content: none;
      }
    }

    @media (max-height: 1366px) and (max-width: 1024px) {
      width: 50vw;
      height: 60vh;

      &::before {
        width: 16vw;
      }
      &::after {
        bottom: 40px;
      }
      .banner__text {
        bottom: -10px;
      }
    }
    @media (max-width: 767px ) {
      width: 100%;

      &::after{
        bottom: 20px;
      }
    }

  }

  &__text {
    position: absolute;
    bottom: -50px;
    right: 0;

    @media (max-width: 620px) {
      bottom: 0;
      font-size: 14px;
    }
    @media (max-width: 480px) {
      bottom: -30px;
    }
  }
}


.banner-features {
  &__block {
    padding: 18px 24px;
    border: 2px solid rgb(255, 225, 69);

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__item {
  }

  &__title {
    font-weight: 700;
    line-height: 1.2;
  }

  &__subtitle {
    font-size: 12px;

  }
}

.banner-info {
  position: absolute;
  left: 0;
  bottom: 0;

  &__wrapper {
    padding: 28px 24px 28px 1vw;

    max-width: 70vw;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 35px;

    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);

    @media (min-width: 1500px) {
      max-width: 55vw;
    }

    @media (max-width: 1200px) {
      column-gap: 15px;
      font-size: 14px;
    }
  }

  @media (max-width: 991px) {
    position: relative;
    .banner-info__wrapper {
      grid-template-columns: minmax(0, 1fr);
      row-gap: 15px;

      max-width: max-content;
    }
  }
}


</style>