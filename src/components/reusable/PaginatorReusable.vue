<template>
  <div class="container-paginator">
    <div class="container-paginator__index">
      <div class="container-button">
        <button @click="goToPage(page - 1)" :disabled="page === 1">{{ '<' }}</button>
      </div>
      <div class="container-button">
        <button @click="goToPage(page + 1)" :disabled="page === pageCount">{{ '>' }}</button>
      </div>
    </div>
    <div class="container-paginator__select">
      <span class="count-length">Mostrando 1 de {{ maxPagesToShow }} de {{ page }} </span>
      <select class="select" v-model="itemsPerPage" @change="changeItemsPerPage">
        <option value="5">Mostrar 5</option>
        <option value="10">Mostrar 10</option>
        <option value="15">Mostrar 15</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watchEffect } from 'vue'

const props = defineProps({
  pageCount: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['changePage', 'changeItemsPerPage'])

const page = ref(1)
const itemsPerPage = ref(5)
const selectedPage = ref(1)

const pageOptions = ref([])

const goToPage = () => {
  if (selectedPage.value >= 1 && selectedPage.value <= props.pageCount) {
    page.value = selectedPage.value
    emit('changePage', selectedPage.value)
  }
}

const changeItemsPerPage = () => {
  emit('changeItemsPerPage', itemsPerPage.value)
}

const updatePageOptions = () => {
  const maxPagesToShow = 8
  const startPage = Math.max(1, page.value - Math.floor(maxPagesToShow / 2))

  pageOptions.value = Array.from(
    { length: Math.min(maxPagesToShow, props.pageCount) },
    (_, index) => startPage + index
  )
}

watchEffect(() => {
  updatePageOptions()
})
</script>

<style lang="scss" scoped>
@import '../../utils/styles/_mixins.scss';
.container-paginator {
  display: flex;
  padding: 24px;
  justify-content: space-between;
  gap: 24px;
  &__index {
    display: flex;
    gap: 26px;
    .container-button {
      button {
        display: flex;
        width: 32px;
        height: 32px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 8px;
        border: 1px solid $color-border-button;
        color: $color-font-grey;
      }
    }
  }
  &__select {
    display: flex;
    align-items: center;
    gap: 24px;
    .count-length {
      @include font-table-rows-name($color-font-grey);
    }
    .select {
      padding: 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 8px;
      border: 1px solid $color-border-button;
      background: $color-white;
    }
  }
}
</style>