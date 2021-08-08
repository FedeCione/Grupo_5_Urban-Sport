let fs = require('fs');

module.exports = {
    getproductos : JSON.parse(fs.readFileSync('./src/data/productos.json', 'utf-8')),
    writeJSON : (dataBase) => {
        fs.writeFileSync('./src/data/productos.json', JSON.stringify(dataBase), "utf-8")
    }
}
