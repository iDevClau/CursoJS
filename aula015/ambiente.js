let num = [5, 8, 4]
num[3] = 6
num.push(7)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}


// console.log('Outro Vetor: ')
// let num1 = [5, 8, 4]
// num[3] = 6
// num.push(7)
// num.sort()
// console.log(num)