/*Scope 1*/
const nombreUsuario = "Pedro";
const apellidoUsuario = "Navaja";
let edadUsuario = 30;

console.log(`${nombreUsuario} ${apellidoUsuario} tiene ${edadUsuario} años`);

if (true) {
    /*Scope 2*/
  const nombreUsuario = "Juanito";
  const apellidoUsuario = "Alimana";
  let edadUsuario = 27;

  console.log(`${nombreUsuario} ${apellidoUsuario} tiene ${edadUsuario} años`);
}

console.log(`${nombreUsuario} ${apellidoUsuario} tiene ${edadUsuario} años`);
