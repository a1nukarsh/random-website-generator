console.log("helelo")

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewF
    if (views<1000){
        viewF = views
    }
    else if(views>1000000){
        viewF = views/1000000 + "M"
    }
    else{
        viewF = views/1000 + "K"
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewF} Views . ${monthsOld} months ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to ahoy | Sigma Web Dev Video #69", "CodeWithHarry", 72700000, 2, "31:22", "https://loremflickr.com/1920/1080/cars")

createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 727000, 2, "31:22", "https://loremflickr.com/1920/1080/train")
createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 727, 2, "31:22", "https://loremflickr.com/1920/1080/bikes")
createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 727000, 2, "31:22", "https://loremflickr.com/1920/1080/house")
createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 727000, 2, "31:22", "https://loremflickr.com/1920/1080/USA")
createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 727000, 2, "31:22", "https://loremflickr.com/1920/1080/child")
