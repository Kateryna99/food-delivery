<template>
<header class="header">
  <div class="header__wrapper">
    <div class="header__container">
      <div class="header__content">
        <div class="logo">
          <div class="logo__block logo__block--width">
            <a href="#" class="logo__item">
              <img src="@/assets/img/header/logo.png" alt="Logo" class="logo__img">
            </a>
          </div>
        </div>
        <div class="header__block">
          <div class="header__item header__item--position">
            <p class="header__text">Log in</p>
          </div>
          <div class="header__item">
            <p class="header__text header__text--icon">0</p>
          </div>
          <div class="nav nav-menu" :class="{'nav-menu--active':openedMenu}">
            <div class="nav-menu__wrapper">
              <ul class="nav-menu__list">
                <li class="nav__item nav-menu__item" @click.prevent="smoothSlideToBlock('delivery')">
                  <a href="#" class="nav__link nav__link--up">Delivery info</a>
                  <a href="#" class="nav__link nav__link--down">Delivery info</a>
                </li>
                <li class="nav__item nav-menu__item" @click.prevent="smoothSlideToBlock('about')">
                  <a href="#" class="nav__link nav__link--up">About us</a>
                  <a href="#" class="nav__link nav__link--down">About us</a>
                </li>
                <li class="nav__item nav-menu__item" @click.prevent="smoothSlideToBlock('restaurants')">
                  <a href="#" class="nav__link nav__link--up">Restaurants</a>
                  <a href="#" class="nav__link nav__link--down">Restaurants</a>
                </li>
                <li class="nav__item nav-menu__item" @click.prevent="smoothSlideToBlock('specialities')">
                  <a href="#" class="nav__link nav__link--up">Specialities</a>
                  <a href="#" class="nav__link nav__link--down">Specialities</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="burger" :class="{'burger--active':openedMenu}" @click="menuAction">
            <div class="burger__wrapper">
              <div class="burger__item"></div>
              <div class="burger__item"></div>
              <div class="burger__item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data(){
    return {
      openedMenu: false
    }
  },
  methods:{
    menuAction(){
      this.openedMenu = !this.openedMenu
    },
    smoothSlideToBlock(id){
      document.getElementById(id).scrollIntoView({behavior: 'smooth',block: 'center'})
    },
    closeMenuOnClick(event){
      if(event.target.classList.contains('nav-menu') || event.target.closest('.nav-menu')){
        this.openedMenu = false
      }
    }
  },
  created() {
    document.addEventListener('click', this.closeMenuOnClick)
  }
}
</script>

<style scoped>

</style>