<template>
  <div class="restaurants section observe-root" id="restaurants">
    <div class="restaurants__wrapper">
      <div class="restaurants__container">
        <div class="restaurants__content">
          <div class="section__row observe-root__block">
            <div class="section__item">
              <h2 class="section__title">Restaurants</h2>
            </div>
            <div class="section__item">
              <button class="button button--secondary">show all</button>
            </div>
          </div>
          <swiper
              :modules="modules"
              :slides-per-view="1"
              :loop="true"
              :mousewheel="true"
              :spaceBetween="24"
              :breakpoints="{
               1200: {
                 slidesPerView: 4,
                 mousewheel: false,
                 loop: false
               },
               991: {
                 slidesPerView: 3,
                 },
                 520: {
                   slidesPerView: 2,
                 }
               }"
              class="restaurants-swiper observe-root__block">
            <swiper-slide v-for="item in getRestaurantsList" :key="item.id">
              <restaurant-card :restaurant="item"/>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import RestaurantCard from "@/components/generals/RestaurantCard";

export default {
  name: "RestaurantComponent",
  components: {
    RestaurantCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Mousewheel]
    }
  },
  computed: {
    ...mapState(useGeneralStore, ['getRestaurantsList']),
  },


}
</script>

<style lang="scss" scoped>
.restaurants {
  &__wrapper {
    padding: 48px 0 72px;
  }

  &__container {
  }

  &__item {
  }
}

.swiper-slide {
  width: 280px;
}

</style>