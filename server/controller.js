const plants = require('./db.json')
let plantId=4

//Get, put, delete and a push. 

module.exports = {
    getPlants: (req, res) => {
        res.status(200).send(plants)
    },
    addPlant: (req, res) => {
        const {name, picture, description} =req. body

        let newPlantObject = {
            id: plantId,
            name: name,
            picture: picture,
            description: description
        }

        plants.push(newPlantObject)
        plantId++
        res.status(200).send(plants)
    },

    deletePlant: (req, res) => {
        const index = plants.findIndex(el => el.id === +req.params.id)

        plants.splice(index, 1)

        res.status(200).send(plants)
    }

}