const userAdministrador = {
  email: "stkgym@mail.com",
  password: "Stkgym2024",
};

export const login = (usuario) => {
  if (
    usuario.email === userAdministrador.email &&
    usuario.password === userAdministrador.password
  ) {
    localStorage.setItem("usuarioGym", JSON.stringify(userAdministrador.email));
    return true;
  } else {
    return false;
  }
};

export const listarClases = async () => {
  try {
    const respuesta = await fetch("http://localhost:3000/clases");
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
//Get editar
export const obtenerClases = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/clases"+id);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const crearClase = async (claseNueva) => {
  try {
    const respuesta = await fetch("http://localhost:3000/clases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(claseNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
//Borrar Clase

export const eliminarClases = async (id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/clases/"+id,{
        method: "DELETE"
    });
    return respuesta
  } catch (error) {
    console.error(error);
  }
}
// Editar clase actualizada PUT
export const editarClase = async (claseActualizada, id) => {
  try {
    const respuesta = await fetch("http://localhost:3000/clases/"+id,{
        method: "PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(claseActualizada)
    });
    return respuesta
  } catch (error) {
    console.error(error);
  }
};