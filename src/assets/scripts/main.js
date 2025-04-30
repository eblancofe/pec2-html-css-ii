/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from 'bootstrap';
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

function colores__usados() {
  let conjunto_color = new Set(); //almacenar en conjunto
  let guardamos = document.querySelectorAll("*"); //metemos elementos del DOM

  guardamos.forEach(elemento => {
    let coger = window.getComputedStyle(elemento); //guardamos estilos CSS de la Web
    conjunto_color.add("Color de fuente = " + coger.conjunto_color); //metemos color fuente en conjunto
    conjunto_color.add("Color de fondo = " + coger.backgroundColor); //metemos color background en conjunto
  });
  return Array.from(conjunto_color); //devolvemos Array
}

console.log(colores__usados()); //mostramos en consola
