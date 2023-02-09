function revArr(myArr) {
    let reversedArr = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
      reversedArr.push(myArr[i]);
    }
      console.log(reversedArr);
  }
  
  let myArr = [43, "what", 9, true, "cannot", false, "be", 3, true];
  
  revArr(myArr);