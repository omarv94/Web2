let btntrackC1 = document.querySelector("#btntrackC1"),
  btntrackC2 = document.querySelector("#btntrackC2"),
  btntrackC3 = document.querySelector("#btntrackC3"),
  btntrackC4 = document.querySelector("#btntrackC4");

let btntrackH1 = document.querySelector("#btntrackH1"),
  btntrackH2 = document.querySelector("#btntrackH2"),
  btntrackH3 = document.querySelector("#btntrackH3"),
  btntrackH4 = document.querySelector("#btntrackH4");

let btntrackS1 = document.querySelector("#btntrackS1"),
  btntrackS2 = document.querySelector("#btntrackS2"),
  btntrackS3 = document.querySelector("#btntrackS3"),
  btntrackS4 = document.querySelector("#btntrackS4");

const llave1 = "grant_type=client_credentials",
  llave2 = "client_id=71685fc3bc13460d8ed0649c968a5925",
  llave3 = "client_secret=30bde0b442f54259bd299beb6ac3b1ad";

const parametrosPOST = {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: `${llave1}&${llave2}&${llave3}`,
};

const urlPOST = " https://accounts.spotify.com/api/token";

fetch(urlPOST, parametrosPOST)
  .then((respuesta) => respuesta.json())
  .then((datos) => obtenerToken(datos));

const obtenerToken = (datos) => {
  let token = datos.access_token;
  token = `Bearer ${token}`;
  const parametrosGET = {
    method: "GET",
    headers: { Authorization: token },
  };
  const urlGETcaifanes =
      "https://api.spotify.com/v1/artists/1GImnM7WYVp95431ypofy9/top-tracks?market=ES",
    urlGETsodaStereo =
      "https://api.spotify.com/v1/artists/7An4yvF7hDYDolN4m5zKBp/top-tracks?market=ES",
    urlGETheroes =
      "https://api.spotify.com/v1/artists/3qAPxVwIQRBuz5ImPUxpZT/top-tracks?market=ES";

  fetch(urlGETcaifanes, parametrosGET)
    .then((respuesta) => respuesta.json())
    .then((datos) => depurarArtista(datos));

  fetch(urlGETheroes, parametrosGET)
    .then((respuesta) => respuesta.json())
    .then((datos) => depurarArtista1(datos));

  fetch(urlGETsodaStereo, parametrosGET)
    .then((respuesta) => respuesta.json())
    .then((datos) => depurarArtista2(datos));
};

const depurarArtista = (datos) => {
  let nombre1 = datos.tracks[0].name;
  let audio1 = datos.tracks[0].preview_url;
  let imagen1 = datos.tracks[0].album.images[0].url;

  let tituloDOM = document.getElementById("titulo3");
  let imagenDOM = document.getElementById("imagen3");
  let audioDOM = document.getElementById("audio3");

  audioDOM.src = audio1;
  imagenDOM.src = imagen1;
  tituloDOM.textContent = nombre1;

  btntrackC1.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre2 = temasiguiente[0].name;
    let audio2 = temasiguiente[0].preview_url;
    let imagen2 = temasiguiente[0].album.images[0].url;

    let tituloDOM = document.getElementById("titulo3");
    let imagenDOM = document.getElementById("imagen3");
    let audioDOM = document.getElementById("audio3");

    audioDOM.src = audio2;
    imagenDOM.src = imagen2;
    tituloDOM.textContent = nombre2;
  });

  btntrackC2.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre3 = temasiguiente[1].name;
    let audio3 = temasiguiente[1].preview_url;
    let imagen3 = temasiguiente[1].album.images[0].url;

    let tituloDOM = document.getElementById("titulo3");
    let imagenDOM = document.getElementById("imagen3");
    let audioDOM = document.getElementById("audio3");

    audioDOM.src = audio3;
    imagenDOM.src = imagen3;
    tituloDOM.textContent = nombre3;
  });

  btntrackC3.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    console.log(temasiguiente);
    let nombre3 = temasiguiente[2].name;
    let audio3 = temasiguiente[2].preview_url;
    let imagen3 = temasiguiente[2].album.images[0].url;

    let tituloDOM = document.getElementById("titulo3");
    let imagenDOM = document.getElementById("imagen3");
    let audioDOM = document.getElementById("audio3");

    audioDOM.src = audio3;
    imagenDOM.src = imagen3;
    tituloDOM.textContent = nombre3;
  });

  btntrackC4.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    console.log(temasiguiente);
    let nombre4 = temasiguiente[7].name;
    let audio4 = temasiguiente[7].preview_url;
    let imagen4 = temasiguiente[7].album.images[0].url;

    let tituloDOM = document.getElementById("titulo3");
    let imagenDOM = document.getElementById("imagen3");
    let audioDOM = document.getElementById("audio3");

    audioDOM.src = audio4;
    imagenDOM.src = imagen4;
    tituloDOM.textContent = nombre4;
  });

  //artista diferente, heroes del siliencio
};

const depurarArtista1 = (datos) => {
  let nombre1 = datos.tracks[0].name;
  let audio1 = datos.tracks[0].preview_url;
  let imagen1 = datos.tracks[0].album.images[0].url;

  let tituloDOM = document.getElementById("titulo2");
  let imagenDOM = document.getElementById("imagen2");
  let audioDOM = document.getElementById("audio2");

  audioDOM.src = audio1;
  imagenDOM.src = imagen1;
  tituloDOM.textContent = nombre1;

  btntrackH1.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre2 = temasiguiente[0].name;
    let audio2 = temasiguiente[0].preview_url;
    let imagen2 = temasiguiente[0].album.images[0].url;

    let tituloDOM = document.getElementById("titulo2");
    let imagenDOM = document.getElementById("imagen2");
    let audioDOM = document.getElementById("audio2");

    audioDOM.src = audio2;
    imagenDOM.src = imagen2;
    tituloDOM.textContent = nombre2;
  });

  btntrackH2.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre3 = temasiguiente[1].name;
    let audio3 = temasiguiente[1].preview_url;
    let imagen3 = temasiguiente[1].album.images[0].url;

    let tituloDOM = document.getElementById("titulo2");
    let imagenDOM = document.getElementById("imagen2");
    let audioDOM = document.getElementById("audio2");

    audioDOM.src = audio3;
    imagenDOM.src = imagen3;
    tituloDOM.textContent = nombre3;
  });

  btntrackH3.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre3 = temasiguiente[2].name;
    let audio3 = temasiguiente[2].preview_url;
    let imagen3 = temasiguiente[2].album.images[0].url;

    let tituloDOM = document.getElementById("titulo2");
    let imagenDOM = document.getElementById("imagen2");
    let audioDOM = document.getElementById("audio2");

    audioDOM.src = audio3;
    imagenDOM.src = imagen3;
    tituloDOM.textContent = nombre3;
  });

  btntrackH4.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre4 = temasiguiente[6].name;
    let audio4 = temasiguiente[6].preview_url;
    let imagen4 = temasiguiente[6].album.images[0].url;

    let tituloDOM = document.getElementById("titulo2");
    let imagenDOM = document.getElementById("imagen2");
    let audioDOM = document.getElementById("audio2");

    audioDOM.src = audio4;
    imagenDOM.src = imagen4;
    tituloDOM.textContent = nombre4;
  });
};

// nuebo artista,Soda Stereo

const depurarArtista2 = (datos) => {
  let nombre1 = datos.tracks[0].name;
  let audio1 = datos.tracks[0].preview_url;
  let imagen1 = datos.tracks[0].album.images[0].url;

  let tituloDOM = document.getElementById("titulo4");
  let imagenDOM = document.getElementById("imagen4");
  let audioDOM = document.getElementById("audio4");

  audioDOM.src = audio1;
  imagenDOM.src = imagen1;
  tituloDOM.textContent = nombre1;

  btntrackS1.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre2 = temasiguiente[0].name;
    let audio2 = temasiguiente[0].preview_url;
    let imagen2 = temasiguiente[0].album.images[0].url;

    let tituloDOM = document.getElementById("titulo4");
    let imagenDOM = document.getElementById("imagen4");
    let audioDOM = document.getElementById("audio4");

    audioDOM.src = audio2;
    imagenDOM.src = imagen2;
    tituloDOM.textContent = nombre2;
  });

  btntrackS2.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre3 = temasiguiente[1].name;
    let audio3 = temasiguiente[1].preview_url;
    let imagen3 = temasiguiente[1].album.images[0].url;

    let tituloDOM = document.getElementById("titulo4");
    let imagenDOM = document.getElementById("imagen4");
    let audioDOM = document.getElementById("audio4");

    audioDOM.src = audio3;
    imagenDOM.src = imagen3;
    tituloDOM.textContent = nombre3;
  });

  btntrackS3.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre3 = temasiguiente[2].name;
    let audio3 = temasiguiente[2].preview_url;
    let imagen3 = temasiguiente[2].album.images[0].url;

    let tituloDOM = document.getElementById("titulo4");
    let imagenDOM = document.getElementById("imagen4");
    let audioDOM = document.getElementById("audio4");

    audioDOM.src = audio3;
    imagenDOM.src = imagen3;
    tituloDOM.textContent = nombre3;
  });

  btntrackS4.addEventListener("click", () => {
    let temasiguiente = datos.tracks;
    let nombre4 = temasiguiente[6].name;
    let audio4 = temasiguiente[6].preview_url;
    let imagen4 = temasiguiente[6].album.images[0].url;

    let tituloDOM = document.getElementById("titulo4");
    let imagenDOM = document.getElementById("imagen4");
    let audioDOM = document.getElementById("audio4");

    audioDOM.src = audio4;
    imagenDOM.src = imagen4;
    tituloDOM.textContent = nombre4;
  });
};
