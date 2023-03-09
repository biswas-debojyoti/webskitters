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
console.log(debu)
console.log("6666")
debu.then(function(data){
console.log(data)
})


let arr =[1,2,3,4,5,6,7,8,9,11]

console.log(arr)

async function nill1() {
    console.log("1111")
    const url1 = 'https://api.github.com/users';
    const responce = await fetch(url1)
    console.log("2222")
    const users = await responce.json()
    console.log("3333")
    console.log("4444")
    return users
}
console.log("5555")
let debu1 = nill1()
console.log(debu1)
console.log("6666")
debu1.then(function(data1){
console.log(data1)
})


