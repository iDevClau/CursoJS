let valores = [1, 7, 8, 3, 4]
valores.sort()
// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

//SIMPLIFICADO:

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}