/*  Avoid using global / upper-scoped variables */

// Not Good
const code = 'let x = 5;let y = 10;let z = x + y'
const lines = splitCodeIntoLines()
console.log(lines)
function splitCodeIntoLines(){
    return code.split(';')
}

// Good
const codeFromUser = 'let x = 5;let y = 10;let z = x + y'
const lines = splitCodeIntoLines(codeFromUser)
console.log(lines)
function splitCodeIntoLines(code){
    return code.split(';')
}


/*  Avoid changing the value of reference */

// Not Good
function addItemToCart(cart,item){
    cart.push({item,date:Date.now()})
}

//  Good
function addItemToCart(cart,item){
    return [...cart ,{item,date:Date.now()}]
}
