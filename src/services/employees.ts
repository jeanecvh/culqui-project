// Función para obtener empleados desde la API
export async function employeesServices(token: string, limit: number, page: number): Promise<void> {
  const apiUrl = `https://fepruebatecnicaculqi-backend-production.up.railway.app/empleados?limit=${limit}&page=${page}`;

  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`,
    },
  };

  try {
    const response = await fetch(apiUrl, config);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('data',data)
    return data;
  } catch (error: any) {
    // Manejar errores aquí
    console.error('Error al realizar la solicitud:', error.message);
    throw error; // Re-lanzar el error para que el componente que llama a la función pueda manejarlo
  }
}


