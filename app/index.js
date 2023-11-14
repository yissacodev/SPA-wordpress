/*Desencadena la invocacion de todos los componentes de la app*/

import api from "./helpers/wp_api.js"
import { App } from "./App.js";

/*Hasta que carge el DOMcontentLoades cargar funcion App */
document.addEventListener("DOMContentLoaded", App);

/*Cuando cambie el # en la dirección */
window.addEventListener("hashchange", () => {
    api.page = 1; //Paginador se reinicia
    App();
});

/*Ejecución inmediata funcion() 
Ejecución no inmediata funcion

*/