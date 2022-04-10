const getAllPokemon = () => { 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then((data) => {
        getTwoPokemon(data)
    })
}
getAllPokemon()

const getTwoPokemon = (data) => {
    let pokemon1 = data.results.at(Math.floor(Math.random() * data.results.length))
    let pokemon2 = data.results.at(Math.floor(Math.random() * data.results.length))
    getPokeInfo(pokemon1, pokemon2);
}

const getPokeInfo = (pokemon1, pokemon2) => {

    fetch(pokemon1.url)
    .then(res => res.json())
    .then((poke1) => {
        getDMGMoves1(poke1)
    })

    fetch(pokemon2.url)
    .then(res => res.json())
    .then((poke2) => {
        getDMGMoves2(poke2)
    })
}

const getDMGMoves1 = (poke1) => {

    poke1.moves.forEach(moves => {
        fetch(moves.move.url)
        .then(res => res.json())
        .then((data) => {
            if(data.power !== null) {
                return data
            }
        })
    });
}

const getDMGMoves2 = (poke2) => {
    
}