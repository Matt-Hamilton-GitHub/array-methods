// newArray = [];

// [11,22,33,5,6,23,56,34,23,6778,53,23,12,4]
// .forEach(function(value, index, array){
//     if(index === 0){
//         console.log('0-index num called');
//         newArray.push(0)
//         console.log(newArray);
//     }
//     if(value%2 !== 0){
//     console.log('number w/ index ' + index + ': odd');
//     newArray.push(value)
//     console.log(newArray);
    
//     }else{
//         console.log('number w/ index ' + index + ': even');
//         newArray.push(value/2)
//         console.log(newArray);
//     }


// })

// ------------------------

// forEach

function doubleValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val * 2)
    })
    return newArr;
}

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr;
}

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1])
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}