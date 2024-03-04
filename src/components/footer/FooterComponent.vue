<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__container">
        <div class="footer__content">
          <div class="footer__top">
            <div class="logo">
              <div class="logo__block">
                <div class="logo__item">
                  <img src="@/assets/img/footer/logo.svg" alt="" class="logo__img">
                </div>
              </div>
            </div>
            <div class="nav nav-footer">
              <div class="nav-footer__wrapper">
                <div class="nav-footer__block">
                  <div class="footer__item">
                    <h4 class="nav-footer__title">About Us</h4>
                  </div>
                  <div class="footer__item">
                    <ul class="nav-footer__list">
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Concept</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Concept</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Franchise</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Franchise</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Business</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Business</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Restaurant signup</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Restaurant signup</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">For Investors</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">For Investors</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-footer__block">
                  <div class="footer__item">
                    <h4 class="nav-footer__title">Get help</h4>
                  </div>
                  <div class="footer__item">
                    <ul class="nav-footer__list">
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Read FAQs</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Read FAQs</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Restaurants</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Restaurants</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Specialities</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Specialities</a>
                      </li>
                      <li class="nav__item">
                        <a href="#" class="nav__link nav__link--white nav__link--up">Sign up to deliver</a>
                        <a href="#" class="nav__link nav__link--white nav__link--down">Sign up to deliver</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="nav-footer__block">
                  <div class="footer__item">
                    <h4 class="nav-footer__title">Contact us</h4>
                  </div>
                  <div class="footer__item">
                    <ul class="nav-footer__list">
                      <li class="nav-footer__item">
                        <a href="#" class="nav-footer__link">Yellow kitchen Paris 11</a>
                      </li>
                      <li class="nav-footer__item">
                        <a href="#" class="nav-footer__link">69 avenue de la Republique 75011 Paris</a>
                      </li>
                      <li class="nav-footer__item">
                        <a href="#" class="nav-footer__link">0800 111 126</a>
                      </li>
                      <li class="nav-footer__item">
                        <a href="#" class="nav-footer__link">contact@yellowkitchens.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer__down">
            <div class="socials">
              <div class="socials__wrapper">
                <div class="socials__item icon-insta"></div>
                <div class="socials__item icon-twitter"></div>
                <div class="socials__item icon-fb"></div>
              </div>
            </div>
            <div class="footer__block">
              <div class="footer__item">
                <p class="footer__text">Privacy Policy</p>
              </div>
              <div class="footer__item">
                <p class="footer__text">Terms</p>
              </div>
              <div class="footer__item">
                <p class="footer__text">© 2020 Yellow kitchen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
.footer {
  &__wrapper {
    background-color: rgb(63, 66, 85);
    padding: 48px 0 52px 0;
  }

  &__container {
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 100px;

    @media (max-height: 1024px) {
      gap: 50px;
    }
  }

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 15px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: stretch;
      gap: 30px;
    }
  }

  &__item {
  }

  &__down {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    
    @media (max-width: 650px) {
      flex-direction: column;
    }
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 60px;
  }

  &__text {
    color: #FFFFFF;
    font-weight: 800;
    font-size: 12px;
  }
}

.nav-footer {
  &__wrapper {
    display: flex;
    align-items: start;
    gap: 80px;

    @media (max-width: 991px) {
      gap: 40px;
    }
    @media (max-width: 710px) {
      width: 100%;
     display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    color: #FFFFFF;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__item {
  }

  &__link {
    max-width: 297px;
    width: 100%;

    color: #FFFFFF;
    display: block;
  }
}

.icon-insta {

  &:hover {
    color: #833AB4;
  }
}

.icon-twitter {
  &:hover {
    color: #1DA1F2;
  }
}

.icon-fb {
  &:hover {
    color: #3B5998;
  }
}
</style>