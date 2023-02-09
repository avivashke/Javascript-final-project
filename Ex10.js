const eDarr = [
    [1,7],
    [3,5],
    [5,0],
    [7,8],
    [0,2],
    [9,4]
];

function countZeros(eDarr) {
  let total = 0;
  for (let i = 0; i < eDarr.length; i++) {
    for (let j = 0; j < eDarr[i].length; j++){
      if(eDarr[i][j] === 0){
        total++;
      }
    }
  }
console.log(total);
}
countZeros(eDarr);