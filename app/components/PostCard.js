export function PostCard(props){
    let { date, id, slug, title, jetpack_featured_media_url, featured_media_src_url } = props;
    let dateFormat = new Date(date).toLocaleString(),

    // Si el arrelo trae featured_media_src_url, debe ponerse ese
    urlPoster = jetpack_featured_media_url
    ? jetpack_featured_media_url
    : "app/assets/favicon-32x32.png"

    document.addEventListener("click", e => {
        if(!e.target.matches(".post-card a")) return false;

        /*Ver almacenamiento de id de post en
        Inspecionar elemento > Application > LocalStorage > Servidor
        */
        localStorage.setItem("wpPostId", e.target.dataset.id);
        
    })

    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}" />
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${date}">${dateFormat}</time>
                <a href="#/${slug}" data-id="${id}">Ver Publicación</a>
            </p>
        </article>
    `;
}