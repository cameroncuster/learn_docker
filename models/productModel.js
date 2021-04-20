let figurines = require('../data/figurines')
const { v4: uuidv4 } = require('uuid')

const { writeFile } = require('../utils')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(figurines)
    })
}

function create(figurine) {
    return new Promise((resolve, reject) => {
        const newFigurine = {id: uuidv4(), ...figurine}
        figurines.push(newFigurine)
        writeFile('./data/figurines.json', figurines)
        resolve(inewFigurine)
    })
}

function update(id, modified) {
    return new Promise((resolve, reject) => {
        const index = figurines.findIndex((p) => p.id === id)
        figurines[index] = {id, ...modified}
        writeFile('./data/figurines.json', figurines)
        resolve(figurines[index])
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        figurines = figurines.filter((p) => p.id !== id)
        writeFile('./data/figurines.json', figurines)
        resolve()
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
    create,
    update,
    remove
}
