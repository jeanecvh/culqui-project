<script setup lang="ts">
import FormLogin from '../components/form/FormLogin.vue'
</script>

<template>
  <main class="container-main">
    <div class="container-main__layout">
      <div class="container-main__front-page">
        <img
          class="container-main__img-employees"
          alt="empleados analizando data"
          src="../assets/login.png"
        />
        <div class="container-main__line-green"></div>
        <div class="container-main__front-text">
          <img src="../assets/logo_white.svg" alt="logo de culqui" />
          <h1>Dale más power⚡a tus empleados hoy 💪</h1>
        </div>
      </div>
      <div class="container-main__form">
        <FormLogin></FormLogin>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container-main {
  min-height: 100vh;
  &__layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__img-employees {
    height: 100%;
    width: 100%;
  }

  &__line-green {
    height: 20px;
    background-color: green;
  }
}
</style>
