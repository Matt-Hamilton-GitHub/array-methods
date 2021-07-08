var arr = [1,2,4,5]

// var condition = arr.some(item => item > 9)//false

// console.log(condition);

var condition = arr.every(item => item > 3)

console.log(condition);

function hasOddNumber(arr){
    return arr.some(num => num%2 !== 0)
    
}

function hasAZero(num){
    var numbers = num.toString().split('')
    return numbers.some(item => item === '0')
}

function hasNoDuplicates(arr){
    
    return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val)
  })
    
}

function hasCertainKey(arr, key){
    return arr.every(item => key in item )
}
function hasCertainValue(arr, key, searchValue){
    return arr.every(item => item[key] === searchValue)
}