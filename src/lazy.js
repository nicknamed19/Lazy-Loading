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