let test = 5;
test = "Ahmet Levs"
//console.log(test)
//console.log(3);
let student = {id:1, name:"Ahmet"}
//console.log(student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name+":"+puan)
}
//save(undefined, student);
let students= ["Ahmet","Engin","Levs"]
//console.log(students)
let students2 = [student, {id:2, name:"Ahmet"}, "İstanbul", {city:"LA"}]
//console.log(students2)

//rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10, ["Ahmet", "Levs", "Tr", "61"], [["Ahmet", "Levs", "Eu"]])

//spread
let points = [1,2,5,7,9,6,5,4,3]
console.log(...points)
console.log(Math.max(...points))
console.log(..."Abc","d","efg","h")

//destructure
let populations = [10000,20000,30000,[40000,100000]]
let [little,middle,high,[veryHigh,maximum]] = populations

console.log(little)
console.log(middle)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunc([attr]) {
    console.log(attr)
}

someFunc(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)
