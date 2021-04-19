const figurines = require('../data/figurines')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(figurines)
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
    findByID
}
