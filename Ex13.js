let arr_1 = [2,4,7];
let arr_2 = [3,5,8];

let summedArr = [];

function sumArrElem(arr_1,arr_2){
  for (let i = 0; i < arr_1.length; i++){
 let numSum = arr_1[i] + arr_2[i]
 summedArr.push(numSum);
  }
  console.log(summedArr);
}
sumArrElem(arr_1,arr_2);

