<template>
  <div class="container-table">
    <table class="container-table__table" tabindex="0">
      <thead class="table-thead">
        <tr class="table-tr">
          <th class="table-tr__name" tabindex="0">
            {{ 'Nombre' }}
          </th>
          <th class="table-tr__position" tabindex="0">
            {{ 'Nombre cargo' }}
          </th>
          <th class="table-tr__department" tabindex="0">
            {{ 'Departamento' }}
          </th>
          <th class="table-tr__office" tabindex="0">
            {{ 'Oficina' }}
          </th>
          <th class="table-tr__account" tabindex="0">
            {{ 'Cuenta' }}
          </th>
          <th class="table-tr__actions" tabindex="0">
            {{ 'Acciones' }}
          </th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(employee, index) in props.employeeList" :key="index" class="table-tr">
          <td class="table-tr__name-email" tabindex="0">
            <div class="name-email">
              <span class="name-email__name">{{ employee.nombre }}</span>
              <span class="name-email__email">{{ employee.correo }}</span>
            </div>
          </td>
          <td tabindex="0">{{ employee.cargo }}</td>
          <td tabindex="0">{{ employee.departamento }}</td>
          <td tabindex="0">{{ employee.oficina }}</td>
          <td tabindex="0">{{ employee.estadoCuenta }}</td>
          <td style="width: 150px" tabindex="0">
            <div class="action-buttons">
              <div class="action-buttons__container">
                <i class="fa-regular fa-eye"></i>
                <button class="button_detail" @click="viewDetails(index)"></button>
              </div>
              <div class="action-buttons__container">
                <i class="fa-solid fa-pen"></i>
                <button class="button_edit" @click="editEmployee(index)"></button>
              </div>
              <div class="action-buttons__container">
                <i class="fa-solid fa-trash"></i>
                <button class="button_delete" @click="deleteEmployee(index)"></button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  employeeList: {
    type: Array,
    default: () => []
  }
})


const emit = defineEmits(['editEmployee', 'deleteEmployee', 'viewDetails']);

const columnCount = 6; 


</script>

<style lang="scss" scoped>
@import '../../utils/styles/_mixins.scss';
.container-table {
  padding: 24px;
  &__table {
    width: 100%;
    thead {
      background-color: #f2f2f2;
      height: 56px;
      tr {
        border-radius: 10px 0px 0px 10px;
        background: $color-background-view;
        text-align: left;
        padding: 16px !important;
        @include font-name-user($color-font-grey-subtitle);
        .table-tr {
          &__name,
          &__position,
          &__department,
          &__office,
          &__account {
            text-align: left;
            padding: 16px;
          }
          &__actions {
            text-align: right;
            padding: 16px;
          }
        }
      }
    }
    tbody {
      tr {
        .table-tr {
          &__name-email {
            .name-email {
              display: flex;
              flex-direction: column;
              &__name {
                @include font-table-rows-name();
              }
              &__email {
                @include font-table-rows-email();
              }
            }
          }
        }
        td {
          height: 64px;
          padding: 18px 16px;
          @include font-table-rows();
        }
      }
    }
  }
}

.action-buttons {
  display: flex;
  gap: 8px;
  &__container {
    position: relative;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    .button_detail{
        background: $color-font-green;
    }
    .button_edit{
        background: $color-blue;
    }
    .button_delete{
        background: $color-red;
    }
    button {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 20%;
      border: none;
    }
    i {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
    }
    
  }
}
</style>