

<template>
  <div class="container-menu">
    <div class="container-menu__logo">
      <img class="logo__img" src="../assets/logo_black.svg" alt="logo de culqui" />
    </div>
    <div class="container-menu__routes">
      <TabsComponent
        :tab1="TableViewVue"
        :nameTab1="'Empleados'"
        :iconTab1="'fa-solid fa-user-group'"
        :tab2="TableViewVue"
        :nameTab2="'Reclutamiento'"
        :iconTab2="'fa-solid fa-briefcase'"
      ></TabsComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
import TabsComponent from './reusable/TabsComponent.vue'
import TableViewVue from './TableView.vue'
</script>

<style lang="scss" scoped>
@import '../utils/styles/_mixins.scss';
.container-menu {
  display: flex;
  width: 286px;
  height: 1024px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid $color-input-grey;
  &__logo {

    display: flex;
    height: 48px;
    align-self: center;
  }
}
</style>