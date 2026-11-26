// Guardo el primer bloque de películas que me da el ejercicio (lo que cargo nada más entrar)
const peliculasPagina1 = {
  "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "imdbID": "tt0080684",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "imdbID": "tt0086190",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VII - The Force Awakens",
      "Year": "2015",
      "imdbID": "tt2488496",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "imdbID": "tt0121766",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "imdbID": "tt0121765",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Rogue One: A Star Wars Story",
      "Year": "2016",
      "imdbID": "tt3748528",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode VIII - The Last Jedi",
      "Year": "2017",
      "imdbID": "tt2527336",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek",
      "Year": "2009",
      "imdbID": "tt0796366",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
    }
  ],
  "totalResults": "4947",
  "Response": "True"
};

// Guardo el segundo bloque de datos que tengo en reserva para cuando le dé al botón de cargar más
const peliculasPagina2 = {
  "Search": [
    {
      "Title": "Star Wars: Episode IX - The Rise of Skywalker",
      "Year": "2019",
      "imdbID": "tt2527338",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODg5ZTNmMTUtYThlNy00NjljLWE0MGUtYmQ1NDg4NWU5MjQ1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek Into Darkness",
      "Year": "2013",
      "imdbID": "tt1408101",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg"
    },
    {
      "Title": "A Star Is Born",
      "Year": "2018",
      "imdbID": "tt1517451",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGUxZTc0NTAtNzQwMy00MmM2LTgzMGYtZWIyY2E1MGFjYmM5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Solo: A Star Wars Story",
      "Year": "2018",
      "imdbID": "tt3778644",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTM2NTI3NTc3Nl5BMl5BanBnXkFtZTgwNzM1OTQyNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek Beyond",
      "Year": "2016",
      "imdbID": "tt2660888",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BN2FhNDI1YTYtNWI0OC00ZjYxLWJlYWEtN2ZiZjRmZDY1MWJjXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: The Next Generation",
      "Year": "1987–1994",
      "imdbID": "tt0092455",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMmNiNTQ2YzYtODBjYy00ZWMwLTlmNWMtYWE1NTQ2ZTYyZmMwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: Discovery",
      "Year": "2017–2024",
      "imdbID": "tt5171438",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTZkZTc1ZmYtYTA3Mi00MzZhLWFmZTItZTM2NThjYWJlZGU4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: The Clone Wars",
      "Year": "2008–2020",
      "imdbID": "tt0458290",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTdiODQ1MDYtZjM5My00MmQ5LTk1ZWUtZWIwYjBhZGMxZDAyXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek: First Contact",
      "Year": "1996",
      "imdbID": "tt0117731",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZjc0OWE1NDMtNjRmMi00ZDc2LWI2ZmQtNzEwNWU4Nzg4NDA5XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek II: The Wrath of Khan",
      "Year": "1982",
      "imdbID": "tt0084726",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTFkZDY5NWQtMjY4Yy00OThiLTk3YjQtMDdhYTllMTI4MTdiXkEyXkFqcGc@._V1_SX300.jpg"
    }
  ],
  "totalResults": "4947",
  "Response": "True"
};

// Capturo los elementos del HTML que voy a ir modificando desde aquí
const contenedor = document.getElementById("contenedor-peliculas");
const totalResultados = document.getElementById("total-resultados");
const btnCargarMas = document.getElementById("btn-cargar-mas");

// Llevo la cuenta de cuántas llevo pintadas en pantalla (empiezo en 0)
let mostradas = 0;

// Uso esta función como una fábrica: le paso un JSON y me construye todas sus tarjetas en el HTML
function renderizarBloque(datos) {
    // Sumo las películas nuevas que entran al contador que ya tenía y actualizo el texto de arriba
    mostradas += datos.Search.length;
    totalResultados.textContent = "Mostrando " + mostradas + " de " + datos.totalResults + " resultados";

    // Recorro el array 'Search' del objeto que acabo de recibir, una película detrás de otra
    for (let i = 0; i < datos.Search.length; i++) {
        // Saco la película actual a una variable corta para no escribir tanto código luego
        const item = datos.Search[i];

        // Creo la caja principal de la tarjeta en memoria y le pongo su clase CSS
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-pelicula";

        // Creo la imagen, le enchufo la URL del póster y le pongo un alt por si falla
        const imagen = document.createElement("img");
        imagen.src = item.Poster;
        imagen.alt = "Póster de " + item.Title;

        // Creo el div que va a envolver todos los textos debajo de la foto
        const info = document.createElement("div");
        info.className = "info-pelicula";

        // Creo el título y le meto el nombre de la peli
        const titulo = document.createElement("h2");
        titulo.textContent = item.Title;

        // Creo el contenedor inferior para el año, el ID y la etiqueta de tipo
        const detalles = document.createElement("div");
        detalles.className = "detalles-pelicula";

        // Creo el span donde junto el año y el código de IMDb
        const anioYId = document.createElement("span");
        anioYId.textContent = item.Year + " • " + item.imdbID;

        // Creo el span de la etiqueta; si es una serie le pongo la clase azul y si no la roja por defecto
        const tipo = document.createElement("span");
        tipo.className = item.Type === "series" ? "etiqueta-tipo etiqueta-serie" : "etiqueta-tipo";
        tipo.textContent = item.Type;

        // Ahora toca montar el puzle de dentro hacia afuera:
        // Meto el año y el tipo dentro de la caja de detalles
        detalles.appendChild(anioYId);
        detalles.appendChild(tipo);

        // Meto el título y la caja de detalles dentro del bloque de info
        info.appendChild(titulo);
        info.appendChild(detalles);

        // Meto la imagen y el bloque de info dentro de la tarjeta principal
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(info);

        // Por último, inyecto la tarjeta ya terminada en el contenedor real de la página
        contenedor.appendChild(tarjeta);
    }
}

// Esta función salta cuando hago clic en el botón del HTML
function cargarMas() {
    // Llamo a mi fábrica pasándole el segundo bloque de datos (como usa appendChild, no borra las anteriores)
    renderizarBloque(peliculasPagina2);
    // Escondo el botón porque ya no tengo más datos que cargar y así evito que se dupliquen
    btnCargarMas.style.display = "none";
}

// Arranco el programa pintando el primer bloque nada más abrir la web
renderizarBloque(peliculasPagina1);