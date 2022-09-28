const plants = require('./db.json')

//Get, put, delete and a push. 

module.exports = {
    getPlants: (req, res) => {
        res.status(200).send(plants)
    }

}