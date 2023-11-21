import type { UserData } from '../interfaces/auth.interfaces';
import type { Response } from '@/interfaces/response.interfaces';
const apiUrl: string = 'https://fepruebatecnicaculqi-backend-production.up.railway.app';
export async function loginService(body: Record<string, any>): Promise<Response<UserData>> {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  
    try {
      const response = await fetch(apiUrl+'/auth/login', config);
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      const data: Response<UserData>  = await response.json();
      return data
    } catch (error:any) {
      console.error('Error al realizar la solicitud:', error.message);
      throw error
    }
  }