// write your code here
document.addEventListener("DOMContentLoaded", function() {
// Getting data from server

    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramens => {
        let ramenMenu = document.querySelector('#ramen-menu')
        for (const i of ramens) {
            let img = document.createElement('img')
            img.src = i.image
            img.className = "ramen-img"
            ramenMenu.appendChild(img)
        }
    })
})










// // Adding click event on each image 
// let image = document.querySelectorAll("#ramen-menu img")
// document.image.addEventListener("click", () => {
//     // After clicking the image 
//     let ramens = getData()    
//     // Compare the src in the image tag which was clicked compare it with data
//     for (const i of ramens) {
//         if (i.image === image.src) {
//             const imageToShow =document.querySelector("#ramen-detail img.detail-image")
//             imageToShow = i.image
//         }
//     }

// })



function getData() {
    let URL = `http://localhost:3000/ramens`
    fetch(URL).then(resp => resp.json())
    .then(function(ramens) {
        return ramens
    })
}

