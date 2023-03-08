async function nill() {
    console.log("1111")
    const url = 'https://api.github.com/users';
    const responce = await fetch(url)
    console.log("2222")
    const users = await responce.json()
    console.log("3333")
    console.log("4444")
    return users
}
console.log("5555")
let debu = nill()
console.log("6666")
console.log(debu)
debu.then(function(data){
console.log(data)
})




