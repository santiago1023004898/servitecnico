async function cargarFragmento(id, url) {
    const respuesta = await fetch(url);
    const contenido = await respuesta.text();
    document.getElementById(id).innerHTML = contenido;
}

console.log("Cargando fragmentos...");

cargarFragmento("header", "fragments/header.html");
cargarFragmento("footer", "fragments/footer.html");