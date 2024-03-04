import {defineStore} from 'pinia';
import {bannerFeatures, restaurantsList, specialitiesList,featuresList} from "@/store/helpers/data";

export const useGeneralStore = defineStore('general', {
    state: () => ({
        bannerFeatures,
        restaurantsList,
        specialitiesList,
        featuresList
    }),
    getters: {
        getBannerFeatures: (state) => state.bannerFeatures,
        getRestaurantsList: (state) => state.restaurantsList,
        getSpecialitiesList: (state) => state.specialitiesList,
        getFeaturesList: (state) => state.featuresList
    },
    actions: {
    },
})