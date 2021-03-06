let poke1data = [];
let poke2data = [];

let allMoves1 = [];
let allMoves2 = [];

let usableMoves1 = [];
let usableMoves2 = [];

const getAllPokemon = async () => { 
    await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then((data) => {
        return getTwoPokemon(data)
    })
}
// getAllPokemon()

const getTwoPokemon = (data) => {
    let pokemon1 = data.results[Math.floor(Math.random() * data.results.length)]
    let pokemon2 = data.results[Math.floor(Math.random() * data.results.length)]
    getPokeInfo1(pokemon1)
    getPokeInfo2(pokemon2)
}

const getPokeInfo1 = async (pokemon1) => {

    await fetch(pokemon1.url)
    .then(res => res.json())
    .then((poke1) => {
        poke1data.unshift(poke1)
        return moveSet1(poke1)
    })
}

const getPokeInfo2 = async (pokemon2) => {

    await fetch(pokemon2.url)
    .then(res => res.json())
    .then((poke2) => {
        poke2data.unshift(poke2)
        return moveSet2(poke2)
    })
}

const moveSet1 = async (poke1) => {

    await poke1.moves.forEach(moves => {
        fetch(moves.move.url)
        .then(res => res.json())
        .then(data => {
            if(data.power !== null) return allMoves1.push(data)
        })
    });
    return fourUniqueMoves1()
}

const moveSet2 = async (poke2) => {

    await poke2.moves.forEach(moves => {
        fetch(moves.move.url)
        .then(res => res.json())
        .then(data => {
            if(data.power !== null) return allMoves2.push(data)
        })
    });
    return fourUniqueMoves2()
}

const fourUniqueMoves1 = () => {

    if(allMoves1.length > 4) {
        
        let move1 = allMoves1[Math.floor(Math.random() * allMoves1.length)]
        allMoves1.splice(move1, 1)
        allMoves1.filter(move => {
            if(move.name == move1.name) {
               allMoves1.splice(move, 1)
            }
        })

        let move2 = allMoves1[Math.floor(Math.random() * allMoves1.length)]
        allMoves1.splice(move2, 1)
        allMoves1.filter(move => {
            if(move.name == move2.name) {
               allMoves1.splice(move, 1)
            }
        })

        let move3 = allMoves1[Math.floor(Math.random() * allMoves1.length)]
        allMoves1.splice(move3, 1)
        allMoves1.filter(move => {
            if(move.name == move3.name) {
               allMoves1.splice(move, 1)
            }
        })

        let move4 = allMoves1[Math.floor(Math.random() * allMoves1.length)]

        allMoves1 = []
        usableMoves1.push(move1, move2, move3, move4)
    }
}

const fourUniqueMoves2 = () => {

    if(allMoves2.length > 4) {
        
        let move1 = allMoves2[Math.floor(Math.random() * allMoves2.length)]
        allMoves2.splice(move1, 1)
        allMoves2.filter(move => {
            if(move.name == move1.name) {
               allMoves2.splice(move, 1)
            }
        })

        let move2 = allMoves2[Math.floor(Math.random() * allMoves2.length)]
        allMoves2.splice(move2, 1)
        allMoves2.filter(move => {
            if(move.name == move2.name) {
               allMoves2.splice(move, 1)
            }
        })

        let move3 = allMoves2[Math.floor(Math.random() * allMoves2.length)]
        allMoves2.splice(move3, 1)
        allMoves2.filter(move => {
            if(move.name == move3.name) {
               allMoves2.splice(move, 1)
            }
        })

        let move4 = allMoves2[Math.floor(Math.random() * allMoves2.length)]

        allMoves2 = []
        usableMoves2.push(move1, move2, move3, move4)
    }
    renderPokeMoves()
}


const renderPokeMoves = () => {
    console.log(usableMoves1)
    console.log(usableMoves2)
}