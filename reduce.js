// var numbers = [1,2,1,1]
// var insts = ['Katty', 'Sofia', 'Maxwill','John']
// var arr = [1,3,4,5,5,7,3,4,2,3]

// var sum = numbers.reduce((acc,next)=>{
//     return acc+next
// },11)

// // console.log(sum);

// var newInstrs = insts.reduce((acc, next)=>{
//    return acc += ' ' + next
// },'New instructors:')


// var dub = arr.reduce((acc,next)=>{
//     if(next in acc){
//         acc[next]++
//     }else{
//         acc[next] = 1
//     }
//     return acc
// },{})

// console.log(dub);



function extractValue(arr, key){
    
    return arr.reduce((acc, next)=>{
        acc.push(next[key])
        return acc
    },[])
    
    
}

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
var result1 = extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
// console.log(result1);



function vowelCount(str){
    

    var vowels = "aeiou";
    return str.toLowerCase().split('').reduce(function(acc,next){
        if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
   
}

function addKeyAndValue(arr, key, value){
    
    return arr.reduce(function(acc,next,idx){
          acc[idx][key] = value;
          return acc;
      },arr);
  }
  
  var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
  addKeyAndValue(arr, 'title', 'Instructor') // 
    [
      {title: 'Instructor', name: 'Elie'}, 
      {title: 'Instructor', name: 'Tim'}, 
      {title: 'Instructor', name: 'Matt'}, 
      {title: 'Instructor', name: 'Colt'}
     ]