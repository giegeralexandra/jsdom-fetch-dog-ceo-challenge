console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(handleImageAppending)
    
    let dogBreeds = document.getElementById("dog-breeds")
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(response => {
        let dogBreedsArr = Object.keys(response.message)
        dogBreedsArr.forEach((breed) => {
            dogBreeds.innerHTML += `<li>${breed}</li>`
        })
    })

    let dogUL = document.getElementById("dog-breeds")
    dogUL.addEventListener("click", function (e){
        if (e.target.tagName === "LI"){
            e.target.style.color = "purple"
        }
    })

    let dogSelect = document.getElementById("breed-dropdown")
    dogSelect.addEventListener("change", function (e) {
        fetch ('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(response => {
            let dogBreedsArr = Object.keys(response.message)
            let filteredArray = dogBreedsArr.filter(breed => {
                return breed.startsWith(e.target.value)
            })

            dogUL.innerHTML = ""
            filteredArray.forEach(breed => {
                dogUL.innerHTML += `<li>${breed}</li>`
            })
        })
    })
})

function addImage(url) {
    return `<img src="${url}"/>`
}

function handleImageAppending(jsonObject){
    let dogImageContainer = document.getElementById("dog-image-container")
    jsonObject.message.forEach(url => {
        dogImageContainer.innerHTML += addImage(url)
        })
}






