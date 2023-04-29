/*api es el nombre que yo le puse*/

import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

export async function Router() {
    const d = document,
        w = window,
        $main = d.getElementById("main");

    let { hash } = location;

    console.log(hash);

    $main.innerHTML = null;

    if (!hash || hash === "#/") {
        /*Aqui se espera hasta hacer la peticion ajax mientras muestra el loader
        Cuando termina el loader se quita
        */
        await ajax({  
            url: api.POST,
            cbSuccess: (posts) => {
                console.log(posts);
                let html = "";
                /*Adicionar contenido HTML según cargen los posts */
                posts.forEach((post) => (html += PostCard(post)));
                $main.innerHTML = html;
            },
        });
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch");
        
        if (!query) {
            d.querySelector(".loader").style.display = "none";
            return false;
        }

        /*Busquedas usando el valor de wpSearch guardado en localStorage */
        await ajax({
            url: `${api.SEARCH+query}`,
            cbSuccess: (search) => {
                console.log(search);
                let html = "";

                /*Si la busqueda viene vacia, se muestra un error. Si no muestra los resultados*/
                if(search.length === 0) {
                    html = `
                        <p class="error">
                            No existen resultados de búsqueda para el término

                            <mark class="error-mark">${query}</mark>
                        </p>
                    `;
                } else {
                    search.forEach(post => html += SearchCard(post));
                }

                $main.innerHTML = html;
            }
        });


    } else if (hash === "#/contacto") {
        $main.innerHTML = `<h2>Seccion de Contacto</h2>`;
    } else {
        
        $main.innerHTML = `<h2>Aquí cargará el contenido del Post previamente seleccionado</h2>`;
        await ajax({  
            /*Usar el id almacenado en localStorage para ver el post */
            url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post) => {
                $main.innerHTML = Post(post)
            },
        });
    }

    /*El loader espera a que el contenido cargue y luego se quita*/
    d.querySelector(".loader").style.display = "none";

    
}
