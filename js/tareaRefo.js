let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]

//1. Ordernar los pokemons por base_damage de menor a mayor.

    function ordenarByBaseDamange(){
        return pokemons.sort((a,b) => {return a.base_damage - b.base_damage} )
    }

    console.log(ordenarByBaseDamange())
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.

    function ordenarByProp(prop){
        if(typeof pokemons[0][prop] === "number"){
            return pokemons.sort((a,b) => {return a[prop] - b[prop]})
        }
        else if(typeof pokemons[0][prop] === "string"){
            return pokemons.sort((x,y) => {return x[prop].localeCompare(y[prop])})
        }
    }
    console.log(ordenarByProp("base_hp"))

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.

    function filtrarByTipo(tipo){
        return pokemons.filter(word => word.type === tipo)
    }
    console.log(filtrarByTipo("fire"));

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.

    let PokemonMaster = {
        id: 5,
        name: "Brock",
        created_date: "10/03/1996",
        pokemon: [
            {id: 1, name: "onix", type: "rock", base_damage: "13", base_hp: "14", speed: "28" },
            {id: 2, name: "geodude", type: "rock", base_damage: "10", base_hp: "13", speed: "30"},
            {id: 3, name: "crobat", type: "poison", base_damage: "9", base_hp: "11", speed: "31"}
        ]
    }
    console.log(PokemonMaster)

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.

    function agregarPokemon(){
        let rand = Math.floor(Math.random()*pokemons.length);
        let rValue = pokemons[rand];
        return PokemonMaster.pokemon.push(rValue)
    }
    console.log(agregarPokemon())
    
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5

    function agregarMinMaxDamange(){
        for(let i=0; i < pokemons.length; i++){
        pokemons[i].min_damage = +(Math.random()*(2-1)+1).toFixed(2)
        pokemons[i].max_damage = +(Math.random()*(5-3)+3).toFixed(2)
        }
        return pokemons
    }
    console.log(agregarMinMaxDamange())

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage

    function pokemonDaño(poke){
        let objeto = pokemons.find( elem => elem.name === poke);
        let i = pokemons.indexOf(objeto);
        let daño = pokemons[i].base_damage + +(Math.random()*(pokemons[i].max_damage - pokemons[i].min_damage) + pokemons[i].min_damage).toFixed(2);

        console.log(`${objeto.name}, daño:${daño}`)
    }
    console.log(pokemonDaño("ponyta"))

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

    agregarPokemon()
    agregarPokemon()
    agregarPokemon()

    function agregarDamange(){
        for(let i=0; i < PokemonMaster.pokemon.length; i++){
        PokemonMaster.pokemon[i].min_damage = +(Math.random()*(2-1)+1).toFixed(2)
        PokemonMaster.pokemon[i].max_damage = +(Math.random()*(5-3)+3).toFixed(2)
        PokemonMaster.pokemon[i].damange = +PokemonMaster.pokemon[i].base_damage + +PokemonMaster.pokemon[i].max_damage
        }
        return PokemonMaster.pokemon
    }

    function ordenarByDamange(){
        agregarDamange()
        return (PokemonMaster.pokemon.sort((c,d) => {return c.damange - d.damange})).reverse()
    }

    console.log(ordenarByDamange())
    

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML
   
    let pokemonsCopy = [
        {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
        {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
        {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
        {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
        {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
        {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
        {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
        {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
        {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
        {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
    ]

    const root = document.getElementById("root")
    const ul = document.createElement("ul")
    root.append(ul)

    for(const index in pokemonsCopy){
        const li = document.createElement("li")
        li.textContent = pokemonsCopy[index].name
        ul.append(li)
    }

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

    const rot = document.getElementById("rot")
    const table = document.createElement("table")
    table.setAttribute('border', '1')
    rot.append(table)

    const encabezados = document.createElement("thead")
    for(const key in pokemonsCopy[0]){
        const th = document.createElement("th")
        th.textContent = capitalizarPalabra(key)
        encabezados.append(th)      
    }
    table.append(encabezados)

    for(const index in pokemonsCopy){
        const tr = document.createElement("tr")
            for(const key in pokemonsCopy[index]){
                const td = document.createElement("td")
                td.textContent = pokemonsCopy[index][key]
                tr.append(td)
            }
        table.append(tr)
    }

    
//11. Utilizando javascript modifica el codigo creado en el ejecicio anterior y agrega un evento que permita ordenar los pokemons haciendo click en sus encabezados.

//12. Corrige la function sortPokemons para que acepte ordenarlos segun id y name.


 function capitalizarPalabra(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    }