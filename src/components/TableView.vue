<template>
  <div class="container-main-table-view">
    <div class="container-background-table">
      <div class="container-background-table__content">
        <div class="content-greeting">
          <h4 class="content-greeting__title">Empleados</h4>
          <p class="content-greeting__subtitle">Gestiona tus empleados</p>
        </div>
        <div class="container-principal-buttons">
          <div class="container-principal-buttons__container-download">
            <i class="fa-solid fa-file-arrow-down"></i>
            <button class="download-button">Descargar</button>
          </div>
          <div class="container-principal-buttons__container-plus">
            <i class="fa-solid fa-plus"></i>
            <button class="create-button">Nuevo</button>
          </div>
        </div>
      </div>
      <div class="container-background-table__CTA">
        <div class="search__container">
          <input type="text" class="search__input" placeholder="Buscar empleado" />
          <i class="fa-solid fa-magnifying-glass search__icon"></i>
        </div>
        <div class="select__container">
          <select class="select__input">
            <option value="" disabled selected>Nombre de cargo</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
      </div>
      <div class="container-background-table__table">
        <table-reusable
          :employeeList="refResponseDataEmployee"
          @editEmployee="editEmployee()"
          @deleteEmployee="deleteEmployee"
          @viewDetails="viewDetails"
        >
        </table-reusable>
        <paginator-reusable
          :pageCount="1"
          @changePage="handlePageChange"
          @changeItemsPerPage="handleItemsPerPageChange"
        >
        </paginator-reusable>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import TableReusable from '../components/reusable/TableReusable.vue'
import PaginatorReusable from '../components/reusable/PaginatorReusable.vue'
import { employeesServices } from '../services/employees';

const employeesPerPageOptions = [8, 15]
const currentPage = ref(1)
const itemsPerPage = ref(employeesPerPageOptions[8])
const limit = 10
const page = 1
const refResponseDataEmployee = ref(null)


// let empleadosData = ref(null)
const userStorage = JSON.parse(localStorage.getItem('responseLogin'))

const empleadosData = async () => {
  try {
    const {data} = await employeesServices(
      userStorage?.token,
      limit,
      page
    )
    console.log('res.', data)
    refResponseDataEmployee.value= data;
    return data
  } catch (error) {
    console.error('Error al obtener empleados:', error.message)
    error.value = error.message
    return null // Puedes devolver un valor predeterminado o manejar el error según tus necesidades
  }
}
const viewDetails = (employee) => {
  console.log('Ver detalles de empleado:', employee)
}
const editEmployee = (employee) => {
  console.log('Editar empleado:', employee)
}

const deleteEmployee = (employee) => {
  console.log('Eliminar empleado:', employee)
}

const handlePageChange = (pageNumber) => {
  currentPage.value = pageNumber
}

const handleItemsPerPageChange = (newItemsPerPage) => {
  itemsPerPage.value = newItemsPerPage
  currentPage.value = 1
}

// Actualizar el número total de páginas cuando cambia la lista de empleados
watch([empleadosData, itemsPerPage], () => {
  currentPage.value = 1
})
</script>

<style lang="scss" scoped>
@import '../utils/styles/_mixins.scss';
.container-main-table-view {
  display: flex;
  width: 1160px;
  padding: 0px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  .container-background-table {
    background: $color-white;
    width: 100%;
    padding: 2.4px;
    &__content {
      display: flex;
      align-items: center;
      gap: 20px;
      align-self: stretch;
      padding: 24px;
      .content-greeting {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        flex: 1 0 0;
        &__title {
          @include font-title-secundary;
          margin: 0;
        }
        &__subtitle {
          @include font-title-label($color-font-grey-subtitle);
          margin: 0;
        }
      }
      .container-principal-buttons {
        column-count: 2;
        &__container-download {
          display: flex;
          width: 150px;
          padding: 21px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 10px;
          border: 1px solid $color-black;
          cursor: pointer;
          .download-button {
            @include text-button();
            @include font-button-bold($color-font-black);
          }
        }
        &__container-plus {
          display: flex;
          padding: 21px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          align-self: stretch;
          border-radius: 10px;
          background: $color-black;
          color: $color-white;
          cursor: pointer;
          .create-button {
            @include text-button();
            @include font-button-bold($color-font-white);
          }
        }
      }
    }
    &__CTA {
      display: flex;
      padding: 24px;
      gap: 54px;
      .search {
        &__container {
          position: relative;
          height: 54px;
          width: 70%;
        }
        &__input {
          padding-left: 30px;
          width: 100%;
          border-radius: 10px;
          border: 1px solid $color-input-grey;
          background-color: transparent;
          outline: none;
          height: 100%;
        }
        &__icon {
          position: absolute;
          top: 50%;
          right: 10px;
          transform: translateY(-50%);
          width: 15px;
          height: 15px;
          background-size: cover;
        }
      }
      .select {
        &__container {
          position: relative;
          height: 58px;
          width: 40%;
        }
        &__input {
          padding-left: 30px;
          width: 100%;
          border-radius: 10px;
          border: 1px solid $color-input-grey;
          background-color: transparent;
          outline: none;
          height: 100%;
        }
      }
    }
  }
}
</style>