<template>
  <div class="us-in-instagram section observe-root" id="about">
    <div class="section__wrapper">
      <div class="section__container">
        <div class="us-in-instagram__content">
          <div class="us-in-instagram__block observe-root__block">
            <h2 class="section__title">#YellowKitchens <span class="section__subtext"> in instagram </span></h2>
          </div>
          <swiper class="us-in-instagram-swiper observe-root__block"
                  :modules="modules"
                  :slides-per-view="1"
                  :space-between="24"
                  :loop="true"
                  :mousewheel="true"
                  :autoplay="{delay:2000}"
                  :breakpoints="{
                    580: {
                      slidesPerView: 2
                    },
                    768: {
                      slidesPerView: 3
                    },
                    991: {
                      slidesPerView: 4,
                      mousewheel: false,
                      loop: false,
                      autoplay: false
                    }
                  }"
          >
          <swiper-slide class="swiper__slide">
            <div class="us-in-instagram__img">
              <img src="@/assets/img/page/instagram/first_banner.jpg" alt="Kitchen">
            </div>
          </swiper-slide>
          <swiper-slide class="swiper__slide">
            <div class="us-in-instagram__img">
              <img src="@/assets/img/page/instagram/second_banner.jpg" alt="Our guests">
            </div>
          </swiper-slide>
          <swiper-slide class="swiper__slide">
            <div class="us-in-instagram__img">
              <img src="@/assets/img/page/instagram/third_banner.jpg" alt="Our chef">
            </div>
          </swiper-slide>
          <swiper-slide class="swiper__slide">
            <div class="us-in-instagram__img">
              <img src="@/assets/img/page/instagram/fourth_banner.jpg" alt="Food">
            </div>
          </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Mousewheel,Autoplay} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/scss';
import 'swiper/scss/mousewheel';

export default {
  name: "InstagramComponent",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Mousewheel,Autoplay]
    }
  }
}
</script>

<style lang="scss" scoped>
.us-in-instagram {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__block {
  }

  &__img {
    cursor: pointer;
    max-width: 296px;
    width: 100%;

    height: 300px;

    border-radius: 6px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
      object-position: center;

      transition: transform .3s ease;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}


.us-in-instagram-swiper {
  max-width: 100%;
  width: 100%;
}
</style>