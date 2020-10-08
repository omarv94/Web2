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
  token=`Bearer ${token}`;
  const parametrosGET = {
    method: "GET",
    headers: { Authorization: token },
  };
  const urlGET =
    "https://api.spotify.com/v1/artists/1GImnM7WYVp95431ypofy9/top-tracks?market=ES";

  fetch(urlGET, parametrosGET)
    .then(respuesta => respuesta.json())
    .then(datos => depurarArtista(datos));
};

const depurarArtista=(datos)=>{
    let nombre1=(datos.tracks[0].name);
    let audio1=(datos.tracks[0].preview_url);
    let imagen1=(datos.tracks[0].album.images[0].url);


    for (i=0; i <= datos.lengt; i ++)
    {
        datos[i].name
    }

}
