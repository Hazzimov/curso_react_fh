
const nombreUsuario = "Juan";
const apellidoUsuario = "Perez";

const presentacion = `
${getSaludo()} me llamo ${nombreUsuario} ${apellidoUsuario} 
y tengo ${getEdad()} años

`;
console.log(presentacion);

function getSaludo() {
  return "Hola";
}
function getEdad(){
    return 30;
}