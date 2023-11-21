<script setup lang="ts">
import MenuView from '../components/MenuView.vue'
import TableView from '../components/TableView.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
</script>

<template>
  <main class="container-main-employees">
    <div class="container-main-employees__layout">
      <div class="container-main-employees__MenuView">
        <MenuView></MenuView>
      </div>
      <div class="container-main-employees__TableView">
        <HeaderComponent></HeaderComponent>
        <TableView></TableView>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import '../utils/styles/_mixins.scss';
.container-main-employees {
  min-height: 100%;
  &__layout {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
  }
  &__TableView {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background: $color-background-view;
  }
}
</style>
