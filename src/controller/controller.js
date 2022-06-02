const path = require ("path");

const controller = {
    index1: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index.html"))
    },
    index2: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/index2.html"))
    }
}

module.exports = controller; 