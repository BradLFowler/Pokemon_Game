let poke1data = [];
let poke2data = [];

let allMoves1 = [];
let allMoves2 = [];

let usableMoves1 = [];
let usableMoves2 = [];

const getAllPokemon = () => { 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then((data) => {
        getPokemon1(data)
        getPokemon2(data)
    })
}
getAllPokemon()

const getPokemon1 = (data) => {
    let pokemon1 = data.results.at(Math.floor(Math.random() * data.results.length))
    return getPokeInfo1(pokemon1)
}

const getPokeInfo1 = (pokemon1) => {

    fetch(pokemon1.url)
    .then(res => res.json())
    .then((poke1) => {
        poke1data.unshift(poke1)
        return moveSet1(poke1)
    })
}

const moveSet1 = (poke1) => {

    poke1.moves.forEach(moves => {
        fetch(moves.move.url)
        .then(res => res.json())
        .then(data => {
            if(data.power !== null) return allMoves1.push(data)
            return data
        })
    });
    return fourUniqueMoves1()
}

const fourUniqueMoves1 = () => {

    if(allMoves1.length > 10) {
        
        let move1 = allMoves1.find(movenum1 => movenum1 = Math.floor(Math.random() * allMoves1.length))
        allMoves1.splice(move1, 1)
        allMoves1.filter(move => {
            if(move.name == move1.name) {
               allMoves1.splice(move, 1)
            }
        })

        let move2 = allMoves1.find(movenum2 => movenum2 = Math.floor(Math.random() * allMoves1.length))
        allMoves1.splice(move2, 1)
        allMoves1.filter(move => {
            if(move.name == move2.name) {
               allMoves1.splice(move, 1)
            }
        })

        let move3 = allMoves1.find(movenum3 => movenum3 = Math.floor(Math.random() * allMoves1.length))
        allMoves1.splice(move3, 1)
        allMoves1.filter(move => {
            if(move.name == move3.name) {
               allMoves1.splice(move, 1)
            }
        })

        let move4 = allMoves1.find(movenum4 => movenum4 = Math.floor(Math.random() * allMoves1.length))

        allMoves1 = []
        usableMoves1.push(move1, move2, move3, move4)
        renderPoke1Info()
    }
}

const renderPoke1Info = () => {
    console.log(poke1data)

    let pokemon1 = poke1data.pop()
    console.log(pokemon1)

    let rendmove1 = usableMoves1.shift()
    console.log(rendmove1.name)

    let rendmove2 = usableMoves1.shift()

    let rendmove3 = usableMoves1.shift()

    let rendmove4 = usableMoves1.shift()

}  

const getPokemon2 = (data) => {
    let pokemon2 = data.results.at(Math.floor(Math.random() * data.results.length))
    return getPokeInfo2(pokemon2)
}

const getPokeInfo2 = (pokemon2) => {

    fetch(pokemon2.url)
    .then(res => res.json())
    .then((poke2) => {
        poke2data.unshift(pokemon2)
        return moveSet2(poke2)
    })
}

const moveSet2 = (poke2) => {

    poke2.moves.forEach(moves => {
        fetch(moves.move.url)
        .then(res => res.json())
        .then(data => {
            if(data.power !== null) return allMoves2.push(data)
            return data
        })
    });
    return fourUniqueMoves2()
}

const fourUniqueMoves2 = () => {

    if(allMoves2.length > 10) {
        
        let move1 = allMoves2.find(movenum1 => movenum1 = Math.floor(Math.random() * allMoves2.length))
        allMoves2.splice(move1, 1)
        allMoves2.filter(move => {
            if(move.name == move1.name) {
               allMoves2.splice(move, 1)
            }
        })

        let move2 = allMoves2.find(movenum2 => movenum2 = Math.floor(Math.random() * allMoves2.length))
        allMoves2.splice(move2, 1)
        allMoves2.filter(move => {
            if(move.name == move2.name) {
               allMoves2.splice(move, 1)
            }
        })

        let move3 = allMoves2.find(movenum3 => movenum3 = Math.floor(Math.random() * allMoves2.length))
        allMoves2.splice(move3, 1)
        allMoves2.filter(move => {
            if(move.name == move3.name) {
               allMoves2.splice(move, 1)
            }
        })

        let move4 = allMoves2.find(movenum4 => movenum4 = Math.floor(Math.random() * allMoves2.length))

        allMoves2 = []
        usableMoves2.push(move1, move2, move3, move4)
        renderPoke2Info()
    }
}

const renderPoke2Info = () => {
    // console.log(poke2data)

    let pokemon2 = poke2data.pop()
    // console.log(pokemon2)

    let rendmove1 = usableMoves2.shift()
    // console.log(rendmove1.name)
    
    let rendmove2 = usableMoves2.shift()

    let rendmove3 = usableMoves2.shift()

    let rendmove4 = usableMoves2.shift()

}