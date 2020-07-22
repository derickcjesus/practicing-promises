/*
    let promise = new Promise((resolve, reject) => {
    let x = 1 + 1
    if(x === 3){
        resolve("Sucess")
    }else{
        reject("error")
    }
}) 

promise
    .then((message) => {
        console.log("yeah " + message)
    })
    .catch((message) => {
        console.log("oh no " + message)
    })
*/

/*
const theBestDeveloper = "Derick boy"

function usingPromises(){
    return new Promise((resolve, reject) => {

        if(theBestDeveloper != "Derick boy"){
            reject({
                name: "what? ",
                message: theBestDeveloper + " is not the better developer"
            })
        } else {
            resolve({
                name: theBestDeveloper,
                message: " really is the best developer"
            })
        }
    })
}

usingPromises()
    .then((sucess) => {
        console.log(sucess.name + sucess.message)
    })
    .catch((error) => {
        console.log(error.name + error.message)
    })
*/

const ul = document.getElementById("users")
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
        console.log(data)

        return data.map(function (user){
            let li = document.createElement("li")
            li.innerHTML = `${user.name} (${user.username})`
            ul.appendChild(li)
        })
    })
    .catch((error) => {
        console.log("error")
    })