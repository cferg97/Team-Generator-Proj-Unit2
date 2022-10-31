let count = 1
const totalCount = document.getElementById("counter")
const cardContainer = document.getElementById("right-side")
const teamQueue = document.querySelector("#list-obj > ul")
let arrayOfNames = []
let nameContainer = []

document.getElementById("add").onclick = function () {
    let text = document.getElementById("member").value 
    if (text == ""){
        return;
    }
    else{
        let li = "<li>" + text + "</li>"
        document.getElementById("list-obj").innerHTML += li
        arrayOfNames.push(text)
        document.getElementById("member").value = ""
    }
}

document.getElementById("plus").onclick = function () {
    count++
    totalCount.innerHTML = count
    

    let div = document.createElement("div")
    div.classList.add("card")
    div.classList.add("card-body")

    document.getElementById("right-side").appendChild(div)
    div.id = "team" + count

    // div.insertAdjacentHTML("afterbegin","<h2>" + "Team " + count + "</h2")
    div.innerHTML = "<h2>" + "Team " + count + "</h2>" 

}

document.getElementById("minus").onclick = function () {
    if (count === 1){
        return;
    }
    else{
    count--
    totalCount.innerHTML = count
    let parentNode = document.getElementById("right-side")
    parentNode.removeChild(parentNode.lastChild)
    }
}


document.getElementById("assign").onclick = function () {
    const ul = document.querySelector("#list-obj")
    const newName = ul.lastElementChild
    newName.classList.add("new-names")
    const cards = document.querySelectorAll(".card-body ul")

    for (let i=0; i < (Math.random()* cards.length); i++){
        cards[i].appendChild(newName)
    }
}

document.getElementById("reset").onclick = function() {
    location.reload();
    return false;
}

