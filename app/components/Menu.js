export function Menu(){
    const $menu = document.createElement("nav");
    // return `<h2>Menú</h2>`;

    $menu.classList.add("menu");
    $menu.innerHTML = `
    <a href="#/">Home</a>
    <span>-</span>
    <a href="#/search">Búsqueda</a>
    <span>-</span>
    <a href="#/contacto">Contacto</a>
    <span>-</span>
    <a href="https://aprendejavascript.org/" target="_blank" rel="noopener">Aprender JS</a>
    `;

    return $menu;
}

/*152 25:00 */