let p = 'alpha'
// let p = 10 (error)

console.log(p)

{
  let p = 10 // local scope
  console.log(p)
}
  console.log(p) // global scope

var pa = 10
var pa = "beta" // no error
console.log(pa)