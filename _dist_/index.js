import { registerImage } from './lazy.js'

const app = document.getElementById('app')
app.className = 'grid justify-items-center gap-2 p-4 grid-cols-4 justify-items-center2'

const minimum = 1;
const maximum = 122;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const btnCreateImg = document.getElementById('createImg')


const btnDeleteImg = document.getElementById('deleteImg')


btnCreateImg.addEventListener('click', createImg)

btnDeleteImg.addEventListener('click', deleteImg)

function deleteImg() {
    app.innerHTML = ''
}

function createImg() {

        const figure = document.createElement('figure')
        figure.className = 'w-40 h-40 overflow-hidden'
        
        const image = document.createElement('img')
        image.className = 'object-cover w-full h-full bg-gray-300 rounded-xl'
        image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`
        
        figure.append(image)
        
        
        app.append(figure)      
        registerImage(figure)  
}