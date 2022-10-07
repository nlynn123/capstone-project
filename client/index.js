const baseURL = 'http://localhost:2323'

const showPlants = document.querySelector('#plantDisplay')
const addBtn = document.querySelector('#addPlant')

//axios request to get plants display, I need to loop over that array,
//and I need to create plant cards for each item in the plants array. 
const getAllPlants = () => {
    axios.get(`${baseURL}/getPlants`)
    .then((res) =>{
        displayPlants(res.data)
        console.log(res.data)
    })
    .catch((err)=> {
        console.log(err)
    })
}

const displayPlants = (arr) => {
    for(let i=0; i<arr.length; i++){
        createPlantCard(arr[i])
    }
}


const createPlantCard = (plant) => {
    const plantCard = document.createElement('section')
    plantCard.classList.add('plant-card')

    plantCard.innerHTML = `
    <img src=${plant.picture} class ='plant-image' alt='plant image'/>
    <p>${plant.name}</p>
    <p class = 'plant-description'>${plant.description}</p>
    <button onclick="deletePlant(${plant.id})">Delete</button>
    `
    showPlants.appendChild(plantCard)
}

const deletePlant = (id) => {
    axios.delete(`${baseURL}/deletePlant/${id}`)
    .then((res)=> {
        showPlants.innerHTML = ''
        displayPlants(res.data)
    })
}
const addPlant = () => {
    let nameInput =document.querySelector('#nameInput')
    let descriptionInput = document.querySelector('#descriptionInput')
    let imageInput = document.querySelector('#imageInput')

    let newPlant = {
        name: nameInput.value,
        description: descriptionInput.value,
        picture: imageInput.value
    }
    axios.post(`${baseURL}/addPlant`, newPlant)
.then((res) => {
    showPlants.innerHTML= ''

    nameInput.value = ''
    descriptionInput.value= ''
    imageInput.value = ''
    displayPlants(res.data)
})
}


getAllPlants()
addBtn.addEventListener('click', addPlant)