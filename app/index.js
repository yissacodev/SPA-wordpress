/*Desencadena la invocacion de todos los componentes de la app*/

import { App } from "./App.js";

/*Hasta que carge el DOMcontentLoades cargar funcion App */
document.addEventListener("DOMContentLoaded", App);

/*Cuando cambie el # en la dirección */
window.addEventListener("hashchange", App);

/*Ejecución inmediata funcion() 
Ejecución no inmediata funcion

*/