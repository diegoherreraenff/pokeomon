function setup() {
    const btnBuscar = document.getElementById("btnBuscar")
    const query = document.getElementById("input")

    var kvArray = [{ clave: 1, valor: 10 },
    { clave: 2, valor: 20 },
    { clave: 3, valor: 30 }];

    var reformattedArray = kvArray.map(function (obj) {
        var rObj = {};
        rObj[obj.clave] = obj.valor;
        return rObj;
    })git;


    btnBuscar.addEventListener("click", event => {
        event.preventDefault()
        const buscarPokemon = query.value
        fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`)
            .then(response => response.json())

            .then(data => {
                const div = document.getElementById("div")
                const p = document.createElement("p")
                console.log(data)
                console.log(data.name)
                console.log (typeof data.abilities) 
                const abilitiesName = data.abilities
                names= abilitiesName.forEach(element => {
                    console.log(element.ability[0])
                    
                });
                 console.log (typeof names)
                



                /* const ability1 = data.abilities[0].ability.name
                const ability2 = data.abilities[1].ability.name
                const totalHability = "las habilidad es son " + ability1 +  "y " + ability2
                div.appendChild(p)
                p.innerText = totalHability
                console.log(totalHability)
                const habilidad = data.abilities[0].ability
                console.log (typeof habilidad)
 */








                /* let perro = {
                    nombre: "Scott",
                    color: "Negro",
                    macho: true,
                    edad: 5
                  };
                  
                  let valores = Object.values(perro); // valores = ["Scott", "Negro", true, 5];
                  for(let i=0; i< valores.length; i++){
                    console.log(valores[i]);
                  }
                 */





            });


    }


    )
}



/* const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
} */











window.onload = setup