let num = [5, 8, 4]
console.log(num)
num[3] = 6
console.log(num)
num.push(7)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)

/*
for (let pos = 0; pos<=num.length; pos++) {
    console.log(num[pos])
}
*/


for (let pos in num) {
    console.log(num[pos])
}

let a = num.indexOf(6)
console.log(a)