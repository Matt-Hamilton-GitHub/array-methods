//

// var arr = [1,2,3,4,5,6,7,8,9,10]

// var newArray = arr.filter(item => item%3 !== 0)
// console.log(newArray);


// function filterByValue(arr, key){
//     return arr.filter(item => item[key] === true)
// }



// var data = filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')
// console.log(data);

function find(arr, searchValue){
    
}

function find(arr, searchValue){
    
    return arr.filter(item => item === searchValue)[0]
    
}

var data2 = find([1,2,3,4,5], 6)




function findInObj(arr, key, searchValue){
    
    return arr.filter(item => item[key] === searchValue)[0]
}

findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true)

function removeVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join('')
}

var data3 = removeVowels('Elie')

console.log(data3);


function doubleOddNumbers(arr){
    
    return arr.filter(item => item%2 !== 0 ).map(num => num*2)
    
}

doubleOddNumbers([1,2,3,4,5])