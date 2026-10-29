const arr = [1, 2, 3, 4, 5];

// myMap function
function myMap(arr, fn) {
    let out = [];
    for (let i = 0; i < arr.length; i++) out.push(fn(arr[i], i, arr));
    return out;
}

// map aur myMap ek hi function
Array.prototype.map = Array.prototype.myMap = function (fn) { return myMap(this, fn); };

console.log(arr.map((v) => v * 2));
console.log(arr.myMap((v) => v * 2));
console.log(myMap(arr, (v, i) => i + ":" + v));
console.log(arr.map((v) => v + 1).myMap((v) => v * v));
console.log(arr.map === arr.myMap);
