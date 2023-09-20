fetch("https://pokeapi.co/api/v2/pokemon/100")
.then((res) => res.json())
.then((datos) => {
    //Imprimiendo datos de elemento "abilities"
    console.log("Respuesta de la api", datos.abilities);
})
.catch((err) => {
    console.log(err);
})