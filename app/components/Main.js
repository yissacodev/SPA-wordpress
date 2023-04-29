export function Main(){
    const $main = document.createElement("main");
    $main.id = "main";

    /*Cuando no estemos en la sección search. No sea aplica Grid */
    if ( !location.hash.includes("#/search") ) {
        $main.classList.add("grid-fluid");

    }
    return $main;
}