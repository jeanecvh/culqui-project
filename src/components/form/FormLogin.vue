<template>
  <div>
    <h2>Inicia sesión</h2>
    <form @submit="submitForm">
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p>¿Eres nuevo aquí? <a href="#">Crea una cuenta</a></p>
  </div>
</template>

