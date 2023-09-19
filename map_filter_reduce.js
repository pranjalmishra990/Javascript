let arr1 = [14,23,36,487,54]
arr1.map(val =>{
   
    console.log(val+1)
})


let arr2 =  [14,23,36,487,54]
let arr3 = arr2.filter(val=>{
    if (val%2 == 0)
    return val
})
console.log(arr3)


let arr4 =  [14,23,36,487,54]
let arr5 = arr4.reduce((a,b) => {
            return a+b
})
console.log(arr5)