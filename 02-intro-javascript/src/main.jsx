//console.log('Hello World');

const nombreUsuario = "Juan";
const apellidoUsuario = "Perez";

const nombreCompleto = `
${getSaludo()} me llamo ${nombreUsuario} ${apellidoUsuario} 
y tengo ${getEdad()} años

`;
console.log(nombreCompleto);

function getSaludo() {
  return "Hola";
}
function getEdad(){
    return 30;
}
