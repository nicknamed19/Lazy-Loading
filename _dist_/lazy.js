/* este bloque de código establece una función de devolución de llamada que se ejecuta cuando una imagen se hace visible en la pantalla, utilizando el API Intersection Observer para controlar la carga perezosa de las imágenes. La función registerImage se utiliza para registrar las imágenes que se deben observar para la carga perezosa. */

const fCallback = (entries) => {
    entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
            const figure = entry.target
            const image = figure.firstChild
            const url = image.dataset.src
            image.src = url

            observer.unobserve(figure)
            
        })
}
const observer = new IntersectionObserver(fCallback)

export const registerImage = (image) => {
    observer.observe(image)
}