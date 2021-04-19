const figurines = require('../data/figurines')

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(figurines)
    })
}

module.exports = {
    findAll
}
