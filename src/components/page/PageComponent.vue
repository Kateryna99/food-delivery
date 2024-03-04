<template>
<div class="page">
  <banner-component/>
  <restaurant-component/>
  <nearest-restaurants/>
  <specialities-component/>
  <stats-component/>
  <map-component/>
  <instagram-component/>
</div>
</template>

<script>
import BannerComponent from "@/components/page/banner/BannerComponent";
import RestaurantComponent from "@/components/page/restaurants/RestaurantComponent";
import NearestRestaurants from "@/components/generals/NearestRestaurants";
import SpecialitiesComponent from "@/components/page/specialities/SpecialitiesComponent";
import StatsComponent from "@/components/page/stats/StatsComponent";
import MapComponent from "@/components/page/map/MapComponent";
import InstagramComponent from "@/components/page/instagram/InstagramComponent";
export default {
  name: "PageComponent",
  components: {
    InstagramComponent,
    MapComponent,
    StatsComponent, SpecialitiesComponent, NearestRestaurants, RestaurantComponent, BannerComponent}
}
</script>

<style scoped>

</style>