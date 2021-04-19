const figurines = require('../data/figurines')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(figurines)
    })
}

function create(figurine) {
    return new Promise((resolve, reject) => {
        const newFigurine = {id: '4', ...figurine}
        figurines.push(newFigurine)
        resolve(inewFigurine)
    })
}

function findByID(id) {
    return new Promise((resolve, reject) => {
        const figurine = figurines.find((p) => p.id === id)
        resolve(figurine)
    })
}

module.exports = {
    findAll,
    findByID,
    create
}
