let arr = [10,20,30,40,50,60,70,80,90]
arr.forEach(element =>{
    console.log(element*element)
})

for(let i of arr)(
    console.log(i)
)

for(let j in arr)(
    console.log(j)
)

let str = "Pranjal"
let new_arr = Array.from(str)
console.log(new_arr)