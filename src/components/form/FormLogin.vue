

<template>
  <div class="container-form">
    <h2 class="container-form__title">Inicia sesión</h2>
    <form class="form">
      <div class="form__container-input">
        <label for="email"
          >Correo electrónico
          <span class="required-field">*</span>
        </label>
        <input
          placeholder="Ingresa el correo electrónico"
          type="email"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="form__container-input">
        <label for="password"
          >Contraseña
          <span class="required-field">*</span>
        </label>
        <input
          placeholder="Ingresa la contraseña"
          type="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <div class="message-error" v-if="messageError">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p class="message-error__text">Correo o contraseña incorrectos</p>
      </div>

      <button type="submit" class="form__submit-button" @click.prevent="login()">
        Iniciar sesión
      </button>
    </form>
    <p class="container-form__message">
      ¿Eres nuevo aquí? <a class="link" href="#">Crea una cuenta</a>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import {loginService} from "../../services/login";
import {useRouter} from 'vue-router';
import { UserData } from "../../interfaces/auth.interfaces";
import {Response} from "../../interfaces/response.interfaces";
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const messageError: Ref<boolean> = ref(false);
const router = useRouter();

  const login = async () => {
    const body = {
    correo: email.value,
    password: password.value,
    };
    const responseLogin: Response<UserData>  = await loginService(body)

    if(responseLogin.status == 'error'){
      messageError.value = true
    } else if (responseLogin.status == 'success'){
      localStorage.setItem('responseLogin', JSON.stringify(responseLogin.data));
      messageError.value = false
      router.push({name:'employees'})
    }
  }

</script>

<style lang="scss" scoped>
@import '../../utils/styles/_mixins.scss';
.container-form {
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__title {
    @include font-title-secundary;
    text-align: center;
  }

  .form {
    width: 100%;
    &__container-input {
      display: flex;
      flex-direction: column;
      & label {
        @include font-title-label;
        padding: 5px;
        .required-field {
          color: red;
        }
      }

      & input {
        display: flex;
        padding: 16px 20px;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-radius: 10px;
        border: 1px solid $color-input-grey;
        outline: none !important;
        &::placeholder {
          @include font-title-label($color-font-grey);
        }
        &:focus,
        :active {
          border-color: $color-success;
          outline: none !important;
        }
      }
    }

    &__submit-button {
      height: 56px;
      border-radius: 10px;
      @include font-button;
      background: $color-black;
      width: 100%;
      margin: 23px 0;
    }
    .message-error {
      @include font-message-error;
      flex-direction: row;
      align-items: center;
      display: flex;
      &__text {
        padding-left: 9px;
      }
    }
  }

  &__message {
    @include font-title-label($color-font-grey);
    margin: 0;
    .link {
      color: $color-font-green;
      text-decoration: none;
    }
  }
}
</style>