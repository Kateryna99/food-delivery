<template>
<div class="nearest-restaurants section observe-root">
  <div class="nearest-restaurants__wrapper">
    <div class="nearest-restaurants__container">
      <div class="nearest-restaurants__content">
        <div class="nearest-restaurants__block observe-root__block">
          <h2 class="section__title">Your nearest restaurants</h2>
          <p class="nearest-restaurants__text">Each kitchen works with its own delivery area to deliver food to you as soon as possible</p>
        </div>
        <form action="#" class="nearest-restaurants__form observe-root__block">
          <div class="nearest-restaurants__block">
            <label for="" class="input input__label">
              <span class="input__icon icon-loc"></span>
              <input type="text" placeholder="Enter delivery address" class="input__item">
            </label>
          </div>
          <div class="nearest-restaurants__block">
            <button class="button">send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NearestRestaurants"
}
</script>

<style lang="scss" scoped>
.nearest-restaurants {
  &__wrapper {
    min-height: 40vh;

    background-color: rgb(242, 244, 250);

    display: flex;
    align-items: center;

    padding: 30px 0;
  }

  &__container {
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: start;
      gap: 50px;
    }
  }

  &__block {
  }

  &__text {
    max-width: 425px;
    width: 100%;
  }

  &__form {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

</style>