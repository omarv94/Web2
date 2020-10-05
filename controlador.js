const url ="https://api.spotify.com/v1/artists/3JCyEziWwDZksR1WY8EckM/top-tracks?country=US&=",
   toquen ="Bearer BQAHTj6ws--bz87reWb35tv90BAwxhHHfM5qaV9-5hbpKNhf1QjeJS9w5kqXTajy3YIALi0pEWaKCFo3cHodgAWKCmdXXwC_IKENONZITXcmDynEjcAFKP8mkTXwTC0n9ts_imE5_3q3VDa7k9KG89Pzq5rWha4";

const parametros ={
    method :'GET',
    headers :{
        'Authorization' :toquen
    }
};
fetch(url,parametros) 
    .then(respuesta => respuesta.json())
    .then(datos =>console.log(datos))
