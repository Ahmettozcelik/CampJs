let test = 5;
test = "Ahmet Levs"
console.log(test)
console.log(3);
let student = {id:1, name:"Ahmet"}
console.log(student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name+":"+puan)
}
save(undefined, student);

let students= ["Ahmet","Engin","Levs"]

console.log(students)

let students2 = [student, {id:2, name:"Ahmet"}, "İstanbul", {city:"LA"}]

console.log(students2)


