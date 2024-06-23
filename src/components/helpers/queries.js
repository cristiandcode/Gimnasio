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
