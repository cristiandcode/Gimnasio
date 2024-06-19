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
