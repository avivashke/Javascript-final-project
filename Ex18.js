let names = ['chris', 'kevin', 'naveed', 'pete', 'victor'];
let copiedNames = [];
let index = 0;
function addNames(names, copiedNames){
  while (index < names.length){
    if (names[index] === 'pete') {
      copiedNames.splice(0, copiedNames.length);  
      break
    } else { 
      copiedNames.push(names[index]);   
    }
    index ++;    
  }
  
  console.log(copiedNames);
}

addNames(names, copiedNames);