import type { Response, UserData } from '../interfaces/auth.interfaces';
const apiUrl: string = 'https://fepruebatecnicaculqi-backend-production.up.railway.app';
export async function loginService(body: Record<string, any>): Promise<Response<UserData>> {
    // Configuración de la solicitud
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  
    try {
      // Realizar la solicitud con fetch
      const response = await fetch(apiUrl+'/auth/login', config);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const data: Response<UserData>  = await response.json();
      return data
    } catch (error:any) {
      // Manejar errores aquí
      console.error('Error al realizar la solicitud:', error.message);
      throw error
    }
  }
  
  // Ejemplo de uso


  