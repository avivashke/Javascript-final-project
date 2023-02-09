function findDup(arr){
    let countObj = {};
    let result = [];
  
    for(let i=0; i<arr.length; i++){
      if(countObj[arr[i]] === undefined){
        countObj[arr[i]] = 1;
      } else {
        countObj[arr[i]] += 1;
      }
    }
  
    for(let key in countObj){
      if(countObj[key] > 1)
        result.push(key);
    }
  
    return result;
  }
  var arr = [4,2,34,4,1,12,1,4];
  console.log(findDup(arr));
  