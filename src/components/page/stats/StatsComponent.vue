<template>
<div class="stats observe-root">
  <div class="stats__wrapper">
    <div class="stats__container">
      <div class="stats__content observe-root__block">
        <feature-card v-for="item in getFeaturesList" :key="item.id" :feature="item"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from "pinia";
import {useGeneralStore} from "@/store";
import FeatureCard from "@/components/generals/FeatureCard";
export default {
  name: "StatsComponent",
  components: {FeatureCard},
  computed: {
    ...mapState(useGeneralStore, ['getFeaturesList']),
  }
}
</script>

<style lang="scss" scoped>
.stats {
  &__wrapper {
    min-height: 40vh;
    overflow: hidden;

    background-image: url("@/assets/img/page/banner/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;

    padding: 25px;
  }

  &__container {
    max-width: 900px;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 80px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2,minmax(0,1fr));
    }
  }
}
</style>