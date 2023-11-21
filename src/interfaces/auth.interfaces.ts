// Interfaz genérica para la propiedad data
export interface Response<T> {
  status: string
  data: T
}

// Interfaz específica para los datos del usuario
export interface UserData {
  token: string
  user: {
    id: number
    nombre: string
    correo: string
    cargo: string
    departamento: string
    oficina: string
    estadoCuenta: string
  }
}
