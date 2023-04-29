export function SearchForm(){
    const d = document,
        $form = document.createElement("form"),
        $input = document.createElement("input");
    
    $form.classList.add("search-form");
    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar ...";
    $input.autocomplete = "off";

    $form.appendChild($input);

    if(location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch");
    }

    d.addEventListener("search", e => {
        if(!e.target.matches("input[type='search']")) return false;

        /*Al presionar en la X del search, se remueve "wpSearch" del localStorage */
        if(!e.target.value) localStorage.removeItem("wpSearch");
    })

    d.addEventListener("submit", e => {
        if(!e.target.matches(".search-form")) return false;

        e.preventDefault();

        /*Al poner un texto en la barra de busqueda, ese texto se guarda en localStorage wpSearch: [busqueda] */
        localStorage.setItem("wpSearch", e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    })


    return $form;
}