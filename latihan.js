// 1. contoh array
const contohArray = [1, "imam", 28, 2, "Jordhy", 20, 3, "Jhonny", 64]
// console.log(arr)

// console.log(`ini index kedua dari array arr ${arr[1]}`)

for (let i = 0; i < contohArray.length; i++) {
// console.log(`ini index ke ${i} dari contohArray yaitu : ${contohArray[i]}`)
}

// 2. contoh mainan object 
const contohObj = {
    name: "imam",
    age: 28,
    id: 1
}

console.log(contohObj.name)

//no. 1
console.log(`ini name dari contohObj yaitu : ${contohArray.name}`)
console.log(`ini age dari contohObj yaitu : ${contohObj.age}`)
console.log(`ini id dari contohObj yaitu : ${contohObj.id}`)
console.log('==============================================')


//no. 2
for(let i = 0; i < contohArray.length; i++){
    if(i == 0 || i == 3 || i == 6){
        contohObj.id = contohArray[i]
        console.log(`${contohObj.id}`)
    }
}
console.log('============================')

//no. 3
// masukkan data object dengan arr.push (Nirwana)
// tapi hanya masukkan data yang bernama imam, hafizh, syifa (pake IF dari hafizh no 2) ke dalam array kosong
// dari array kosong yang udah di masukkan data diatas, tapi cuman print yang age nya dibawah 28 dan id nya  (loping dan if2
let data = [];

const obj1 = { name: 'Imam', age: 28, id: 1 };
const obj2 = { name: 'Hafizh', age: 20, id: 2 };
const obj4 = { name: 'Ale', age: 22, id: 3 };
const obj5 = { name: 'Dimas', age: 23, id: 4 };
const obj6 = { name: 'Adella', age: 25, id: 5 };
const obj7 = { name: 'Syifa', age: 21, id: 6 };
const names = ['Imam', 'Hafizh', 'Syifa']

for(const object of [obj1, obj2, obj4, obj5, obj6, obj7]){
    if(names.includes(object.name)){
        data.push(object)
    }
    
}

for(let i = 0; i<data.length; i++){
    if(data[i].age < 28 && data[i].id == 2){
        console.log(data[i])
    }
}
// arr of object
// arr = [{ name: 'Imam', age: 28, id: 1 }]