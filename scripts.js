let n = prompt('Enter the number: ');
let arr = []
for(let i = 1; i <= n; i++ ){
    arr[i-1] = i
}

console.log(arr)

let sum = arr.reduce((res, cur)=>{
    return res + cur
});

console.log(sum)

let mul = arr.reduce((res, cur)=>{
    return res * cur
});

console.log(mul)