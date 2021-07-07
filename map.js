
// var arr = [1,2,3,4,5]

// arr.map((value, index, array)=>{
// console.log(value*2);
// })


// function map(arr, callback){
//   var newArray = []
//   for(var i = 0; i<arr.length; i++){
//       newArray.push(callback(arr[i],i, arr))
//   }

//   return newArray
// }

function extractKey(arr, key){
    var newArray = []
  arr.map((item)=>{
    newArray.push(item[key])
  })
   console.log(newArray);
   return newArray
}

extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')

function doubleValues(arr){
    
    var newArray = []
    arr.map((num)=>{
        newArray.push(num*2)
    })
     return newArray
}

valTimesIndex([1,2,3])

function valTimesIndex(arr){
    
    var newArray = []
    arr.map((number,index)=>{
        newArray.push(number*index)
    })
    
    return newArray
    
}

valTimesIndex([1,2,3])


function extractFullName(arr){
    var newArray = []
    
    arr.map((item)=>{
        newArray.push(item['first']+ ' '+ item['last'])
    })
    console.log(newArray);
    return newArray
}

extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])