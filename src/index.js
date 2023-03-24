// write your code here
document.addEventListener("DOMContentLoaded", function() {
// Getting data from server

    fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(ramens => {
        let ramenMenu = document.querySelector('#ramen-menu')
        // Adding each img to ramen-img div
        for (const i of ramens) {
            let img = document.createElement('img')
            img.src = i.image
            img.className = "ramen-img"
            ramenMenu.appendChild(img)
        }
    })
    // Task num 2 adding a click event via the images 
    let ramenMenu = document.querySelector('#ramen-menu')
    ramenMenu.addEventListener('click', function(e) {
        
        if (e.target.className === "ramen-img") {
            let img = document.querySelector('#ramen-detail img')
            img.src = e.target.src
        }

        // Task num 3 getting data from server for clicked image
        fetch("http://localhost:3000/ramens")
        .then(resp => resp.json())
        .then(ramens => {
            // console.log(e.target)
            let clickedImg = e.target.src
            console.log(`.` + clickedImg.substring(21))
            for (const i of ramens) {
                // comparing img src to clicked img src
                if(`.` + clickedImg.substring(21) ===  i.image ) {
                    // Adding name to h2
                    let name = document.querySelector(`h2.name`)
                    name.textContent = i.name
                    // Adding restaurant to h3
                    let restaurant = document.querySelector(`h3.restaurant`)
                    restaurant.textContent = i.restaurant
                    // Adding rating to span
                    let rating = document.querySelector(`#rating-display`)
                    rating.textContent = i.rating
                    // Adding comment to span
                    let comment = document.querySelector(`#comment-display`)
                    comment.textContent = i.comment
                }
                // console.log(i.image)
            }
        })
        
        


    })

})



