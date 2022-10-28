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
}

document.getElementById("minus").onclick = function () {
    if (count === 0){
        return;
    }
    else{
    count--
    totalCount.innerHTML = count
    }
}


document.getElementById("assign").onclick = function () {
    let list = document.getElementById("list")
    
}

document.getElementById("reset").onclick = function() {
    location.reload();
    return false;
}