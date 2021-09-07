let fs = require('fs');
const path = require('path');

module.exports = {
    getproductos : JSON.parse(fs.readFileSync('./src/data/productos.json', 'utf-8')),

    writeJSON : (dataBase) => {
        fs.writeFileSync('./src/data/productos.json', JSON.stringify(dataBase), "utf-8")
    },
    users: JSON.parse(fs.readFileSync(path.join(__dirname, "./users.json"), "utf-8")),
    writeUsersJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../data/users.json"), JSON.stringify(dataBase), "utf-8")
    },
    bannerCarousel: JSON.parse(fs.readFileSync(path.join(__dirname, "/banner.json"), "utf-8")),
}
