export function SearchCard(props) {

    /*Los datos destructurados son distintos ahora
    NO SE USA EL OBJETO _EMBEDED porque no existe en la respuesta
    */

    console.log(props)
    let {id, title, _embedded} = props;
    let slug = _embedded.self[0].slug;
    
    return `
    <article class="post-card">
        <h2>${title}</h2>
        <p>
            <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
        </p>
    </article>
    `;
}

/*https://www.youtube.com/watch?v=1MAUA1lZPyM&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=156 */