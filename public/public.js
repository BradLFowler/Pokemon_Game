let arrOfMoves1 = [];
let arrOfMoves2 = [];

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
        moveSet1(poke1)
    })

    fetch(pokemon2.url)
    .then(res => res.json())
    .then((poke2) => {
        poke2
    })
}

const moveSet1 = (poke1) => {

    poke1.moves.forEach(moves => {
        fetch(moves.move.url)
        .then(res => res.json())
        .then(data => {
            if(data.power !== null) return arrOfMoves1.push(data)
            return data
        })
    });
    // checkMoves()
    fourUniqueMoves()
}

const fourUniqueMoves = () => {
    console.log(arrOfMoves1.length)
    if(arrOfMoves1.length < 8) {
        getAllPokemon()
    }

    let move1 = arrOfMoves1.find(move => move = Math.floor(Math.random() * arrOfMoves1.length))
    arrOfMoves1.splice(move1, 1)
    if(arrOfMoves1.includes(move1.name)) return arrOfMoves1.splice(move1, 1)
    console.log(move1.name)

    let move2 = arrOfMoves1.find(move => move = Math.floor(Math.random() * arrOfMoves1.length))
    arrOfMoves1.splice(move2, 1)
    if(arrOfMoves1.includes(move2.name)) return arrOfMoves1.splice(move2, 1)
    console.log(move2.name)

    let move3 = arrOfMoves1.find(move => move = Math.floor(Math.random() * arrOfMoves1.length))
    arrOfMoves1.splice(move3, 1)
    if(arrOfMoves1.includes(move3.name)) return arrOfMoves1.splice(move3, 1)
    console.log(move3.name)

    let move4 = arrOfMoves1.find(move => move = Math.floor(Math.random() * arrOfMoves1.length))
    console.log(move4.name)

    console.log(arrOfMoves1.length)
    arrOfMoves1 = []
}



const renderPokeMoves = () => {
    console.log(arrOfMoves1)
}