<script setup lang="ts">
</script>
<template>
  <div class="container-header">
    <div class="container-header__user">
      <div class="user__initials">
        <p>{{ obtenerInicialesNombre }}</p>
      </div>
      <div class="user__name">{{ userName }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../utils/styles/_mixins.scss';
.container-header {
  display: flex;
  height: 44px;
  padding: 24px 32px;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid $color-input-grey;
  background: $color-white;
  &__user {
    display: flex;
    align-items: center;
    .user__initials {
      display: flex;
      width: 32px;
      height: 32px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 32px;
      background: $color-backgroud-name-user;
      @include font-list-menu($color-font-white);
    }
    .user__name {
      @include font-name-user;
      margin-left: 8px;
    }
  }
}
</style>

<script setup lang="ts">
import { computed } from 'vue'

const userStorage = localStorage.getItem('responseLogin')

const userName = computed(() => {
  return JSON.parse(userStorage).user.nombre
});

const obtenerInicialesNombre = computed(() => {
  const user = userName.value;
  const iniciales = user
    .split(' ')
    .map((parte) => parte.charAt(0))
    .join('')
  return iniciales
})
</script>