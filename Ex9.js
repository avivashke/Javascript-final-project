function print2DArr(dDarr) {
    for(let i = 0; i < dDarr.length; i++) {
      for(let j = 0; j < dDarr[i].length; j++) {
        console.log(dDarr[i][j]);
      }
    }
  };

  const dDarr = [
      [1,2],
      [3,4],
      [5,6],
      [7,8]
  ];
  
  print2DArr(dDarr);