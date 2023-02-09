let array = [true, false, false, true, true, false];
let index = 0;
let result = -1;

function checkSucc(array, index, result){
while (index < array.length){
  if (array[index] === array[index + 1]){
    result = index + 1;
    break;
  }
  else{
   index ++;
}
}
  console.log(result);
};
checkSucc(array,index);