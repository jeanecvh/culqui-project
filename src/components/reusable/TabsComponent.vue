<template>
  <ul class="routes-list">
    <li class="routes-list__element" :style="props.tab1 === current && classActive">
      <i :class=props.iconTab1></i>
      <button class="element__redirect" @click.prevent="currentTab(props.tab1)">
        {{ props.nameTab1 }}
      </button>
    </li>
    <li class="routes-list__element">
      <i :class=props.iconTab2></i>
      <button class="element__redirect" @click.prevent="currentTab(props.tab2)">
        {{ props.nameTab2 }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
const current = shallowRef(null)
const clickTab = ref(false)
const emit = defineEmits(['change'])

const props = defineProps({
  tab1: {
    type: Object,
    default: () => {}
  },
  tab2: {
    type: Object,
    default: () => {}
  },
    nameTab1: {
    type: String,
    default: 'none',
  },
  nameTab2: {
    type: String,
    default: 'none',
  },
  iconTab1:{
    type: String,
    default: 'none',
  },
    iconTab2:{
    type: String,
    default: 'none',
  },
})

const currentTab = (data?) => {
  current.value = data
  clickTab.value = true
  emit('change', data)
  console.log('__name', data)
}

const classActive = {
    'color': '$color-green'
}
</script>

<style lang="scss" scoped>
@import '../../utils/styles/_mixins.scss';


  .container-menu__routes {
    .routes-list {
      list-style: none;
      &__element {
        display: flex;
        padding: 16px 0px;
        align-items: center;
        align-self: stretch;
        @include font-list-menu;
        .element__redirect {
          @include text-button();
          padding: 0 10px;
          &:active{
            color: $color-green;
          }
        }
      }
    }
  }
</style>