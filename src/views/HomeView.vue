<script setup lang="ts">
import FormLogin from '../components/form/FormLogin.vue'
</script>

<template>
  <main class="container-main">
    <div class="container-main__layout">
      <div class="layout-front-page">
        <img
          class="layout-front-page__img-employees"
          alt="empleados analizando data"
          src="../assets/login.png"
        />
        <div class="layout-front-page__line-green"></div>
        <div class="front">
          <img class="front__img" src="../assets/logo_white.svg" alt="logo de culqui" />
          <h1 class="front__text">Dale más power⚡a tus empleados hoy 💪</h1>
        </div>
      </div>
      <div class="layout-main-form">
        <FormLogin></FormLogin>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../utils/styles/_mixins.scss';
.container-main {
  min-height: 100%;
  &__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .layout-front-page {
      margin: 0;
      background-color: #282828;
      color: white;
      &__img-employees {
        height: 500px;
        width: 100%;
        background-size: cover;
      }
      &__line-green {
        height: 7px;
        background-color: green;
      }
      .front {
        padding: 50px;
        &__text {
          @include font-title-primary;
          margin: 0;
        }
      }
    }
    .layout-main-form {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
