const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);


// using-mapping to find the squrt
const number = [1, 4, 9];
const roots = number.map((nums) => Math.sqrt(nums))
console.log(roots)

// using map to reformat object in an array
const KvArray = [
    {Key: 1, Value: 10},
    {Key: 2, Value: 20},
    {Key: 3, Value: 30}
];
const reformattedArray = KvArray.map(({Key, Value}) => ({[Key]: Value}));
console.log(reformattedArray)
console.log(KvArray)