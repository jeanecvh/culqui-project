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
