<template>
  <div class="wrapper">
    <header-component/>
    <page-component/>
    <footer-component/>
  </div>
</template>

<script>

import HeaderComponent from "@/components/header/HeaderComponent";
import PageComponent from "@/components/page/PageComponent";
import FooterComponent from "@/components/footer/FooterComponent";
export default {
  name: "MainComponent",
  components: {FooterComponent, PageComponent, HeaderComponent},
  methods:{
    observeElements(elementId) {
      const elements = document.querySelectorAll(`.${elementId}`);
      console.log(elements);
      this.observer = new IntersectionObserver(this.intersectionCallback);
      elements.forEach(element => {
        this.observer.observe(element);
      });
    },
    unobserveElements() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    intersectionCallback(entries) {
      entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.add('observe-root--active') : entry.target.classList.remove('observe-root--active');
      });
    },
  },
  mounted() {
    this.observeElements('observe-root')
  }
}
</script>

<style scoped>

</style>