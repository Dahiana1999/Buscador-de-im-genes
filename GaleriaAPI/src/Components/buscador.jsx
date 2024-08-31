import React from "react";



function Buscador() {
    return (
        <>
        <header>
            <h1 className="title">Buscador de imágenes</h1>
            <form action="" id="form-busqueda">
                <input type="text" id="caja-busqueda" placeholder="Busca una imagen" />
                <button>Buscar</button>
            </form>
        </header> 
        <div id="resultado-busqueda">
        </div>
        <button id="mostrar-mas">Cargar más</button>
        </>
    );
}

export default Buscador;