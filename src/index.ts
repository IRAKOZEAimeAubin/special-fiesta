const log = console.log

// Arrays
const numbers = [1, 2, 3, 4]
const [a, b, ...c] = numbers
log(a, b, c)

// Generics

function identity<T>(arr: T[]): T {
    let index = Math.floor( Math.random() * arr.length )
    return arr[index]
}

const val = identity([1, 2, 3, 'Hello'])
