const app = document.getElementById('app')
app.className = 'grid gap-2 p-4 grid-cols-2 justify-items-center2'

const api = 'https://api.thecatapi.com/v1/images/search?limit=1'

const btnCreateImg = document.createElement('button')
btnCreateImg.className = 'w-32 h-10 bg-green-300 rounded-xl'
btnCreateImg.textContent = 'Generar imagen'

app.append(btnCreateImg)

btnCreateImg.addEventListener('click', createImg)

function createImg() {

        const figure = document.createElement('figure')
        figure.className = 'w-40 h-40'
        
        const image = document.createElement('img')
        
        figure.append(image)

        const getData = async (url) => {
            const res = await fetch(url)
            const data = await res.json()
            image.src = data[0].url
        }
        
        getData(api)
        app.append(figure)        
}

