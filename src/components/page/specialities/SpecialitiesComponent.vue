<template>
  <div class=" section observe-root" id="specialities">
    <div class="section__wrapper">
      <div class="section__container">
        <div class="section__content">
          <div class="section__row observe-root__block">
            <div class="section__item">
              <h2 class="section__title">Specialities</h2>
            </div>
            <div class="section__item">
              <button class="button button--secondary">show all</button>
            </div>
          </div>
          <swiper class="swiper specialties-swiper observe-root__block"
                  :modules="modules"
                  :space-between="24"
                  :slides-per-view="2"
                  :mousewheel="true"
                  :loop="true"
                  :autoplay="{delay:2000}"
                  :breakpoints="{
                     480:{
                       slidesPerView:3
                     },
                     650:{
                       slidesPerView:4
                     },
                     920:{
                       slidesPerView:5
                     },
                     1120:{
                       slidesPerView:6
                     },
                     1200:{
                       slidesPerView:7
                     }
                  }"

                  @swiper="onSwiperReady"
                  @reachEnd="onReachEnd"
                  @reachBeginning="onReachBeginning"
          >
            <swiper-slide v-for="item in getSpecialitiesList" :key="item.id" class="swiper__slide">
              <specialty-card :specialty="item"/>
            </swiper-slide>
            <button class="swiper__button swiper__button--next" :class="{'swiper__button--disabled':isButtonNextDisabled}" @click="nextSlide"></button>
            <button class="swiper__button swiper__button--prev" :class="{'swiper__button--disabled':isButtonPrevDisabled}" @click="previousSlide"></button>
          </swiper>
        </div>
      </div>
    </div>
  </div>
<!--:autoplay="{delay:2000}"  -->
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Mousewheel,Autoplay} from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/mousewheel';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import SpecialtyCard from "@/components/generals/SpecialtyCard";

export default {
  name: "SpecialitiesComponent",
  components: {
    SpecialtyCard,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Mousewheel,Autoplay],
      swiperInstance: null,
      isButtonNextDisabled: false,
      isButtonPrevDisabled: false
    }
  },
  computed: {
    ...mapState(useGeneralStore, ['getSpecialitiesList'])
  },
  methods:{
    nextSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slideNext();
      }
    },
    previousSlide() {
      if (this.swiperInstance) {
        this.swiperInstance.slidePrev();
      }
    },
    onSwiperReady(swiper) {
      this.swiperInstance = swiper;
    },
    onReachEnd() {
      this.isButtonNextDisabled = true
      this.isButtonPrevDisabled = false;
    },
    onReachBeginning() {
      this.isButtonPrevDisabled = true
      this.isButtonNextDisabled = false;
    }
  },
}
</script>

<style lang="scss" scoped>

</style>