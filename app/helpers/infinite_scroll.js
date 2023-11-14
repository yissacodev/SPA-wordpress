import api from "../helpers/wp_api.js"
import { SearchCard } from "../components/SearchCard.js";
import { PostCard } from "../components/PostCard.js";
import { ajax } from "./ajax.js";

export async function InfiniteScroll(){
    const d = document,
    w = window;

    let query = localStorage.getItem("wpSearch"),
        apiURL,
        Component; //HOC - High Order Component

    w.addEventListener("scroll", async(e) => {
        let { scrollTop, clientHeight, scrollHeight } = d.documentElement, //Etiqueta <html></html>>
            { hash } = w.location;

            //console.log( scrollTop, clientHeight, scrollHeight, hash );

            if( scrollTop + clientHeight >= scrollHeight ){
                api.page++;

                if(!hash || hash === "#/"){ //Si estoy en el home
                    apiURL = `${api.POSTS}&page=${api.page}`; //Cantidad de posts por pagina
                    Component = PostCard; //Carga la lógica del componente a Component
                } else if (hash.includes("#/search")){
                    apiURL = `${api.SEARCH}${query}&page=${api.page}`;
                    Component =  SearchCard;
                } else {
                    return false;
                }

                /*Añadir el loader al final de los posts*/
                d.querySelector(".loader").style.display ="block";

                await ajax({
                    url: apiURL,
                    cbSuccess: (posts) => {
                        
                        let html = "";
                        posts.forEach( post => html += Component( post )); //Manda los post al componente asignado
                        d.getElementById("main").insertAdjacentHTML("beforeend", html);
                        
                        /*Remover loader cuando carguen los posts por página */
                        d.querySelector(".loader").style.display ="none";

                    }
                })
            }
    })

}