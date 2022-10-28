let count = 1
const totalCount = document.getElementById("counter")

let arrayOfNames = []


document.getElementById("add").onclick = function () {
    let text = document.getElementById("member").value 
    if (text == ""){
        return;
    }
    else{
        let li = "<li>" + text + "</li>"
        document.getElementById("list-obj").innerHTML += li
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
    let list = document.getElementById("list")
    for (i of list){
        arrayOfNames.push(i)
    }
    
}

document.getElementById("reset").onclick = function() {
    location.reload();
    return false;
}
