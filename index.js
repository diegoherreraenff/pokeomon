function setup() {
    const body = document.querySelector("body")
    const div = document.getElementById("div")
    const btnBuscar = document.getElementById("btnBuscar")
    const query = document.getElementById("input")
    const remove = document.querySelectorAll("div")
    const ul = document.createElement("ul")
    body.appendChild(query)
    body.appendChild(btnBuscar)

    


    btnBuscar.addEventListener("click", event => {
        const limpia = document.getElementById("div")
        limpia.innerHTML="";
        event.preventDefault()



        const buscarPokemon = query.value
        fetch(`https://pokeapi.co/api/v2/pokemon/${buscarPokemon}`)
            .then(response => response.json())

            .then(data => {

                //ability 


                console.log(data)
                const div = document.getElementById("div")
                div.appendChild(ul)

                data.abilities.map(element => element.ability.name)
                    .forEach(ability => {
                        const li = document.createElement("li")
                        li.innerText = ability
                        ul.appendChild(li)

                    });

                    

                // imagenes

                const imagen = document.createElement("img")
                imagen.style = "rounded"
                imagen.style.border = "solid"
                imagen.style.backgroundColor= "#464552"
                imagen.style.borderColor = "red"
                div.appendChild(imagen)
                imagen.style.width = "200px"

                const dataSpeites = Object.values(data.sprites).filter(element => {
                    if (typeof element === typeof "") {
                        return element
                    }
                })




                console.log(dataSpeites)
                let index = 0
                setInterval(() => {
                    if (index == dataSpeites.length) {
                        index = 0
                    }
                    imagen.src = dataSpeites[index]
                    index += 1

                }, 400)



                //datos



                const divStats = document.getElementById("div")
                const ulStats = document.createElement("ul")


                const estadistica = data.stats
                estadistica.forEach(element => {
                    const liStats = document.createElement("li")
                    body.appendChild(divStats)
                    divStats.appendChild(ulStats)
                    ulStats.appendChild(liStats)
                    let result = `${element.stat.name}:${element.base_stat}`
                    liStats.innerText = result

                })

                // tipos
                const type = data.types
                type.forEach(element => {
                    const div = document.getElementById("div")
                    //const body = document.getElementById("body")
                    let result = `${element.type.name}`
                    const h2Type = document.createElement("h2")
                    div.appendChild(h2Type)
                    h2Type.innerText = `the type element is : ${result}`
                })



            }




            )
    }


    )

}



window.onload = setup