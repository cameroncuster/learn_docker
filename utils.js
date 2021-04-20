const fs = require('fs')

function writeFile(filename, payload) {
    fs.writeFileSync(filename, JSON.stringify(payload), 'utf8', (error) => {
        if (error) {
            console.log(error)
        }
    })
}

module.exports = {
    writeFile
}
