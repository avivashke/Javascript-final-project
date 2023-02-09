let names = ['chris', 'kevin', 'naveed', 'pete', 'victor'];
let copiedNames = [];
let index = 0;

function addNames(names, copiedNames){
  while (index < names.length){
   copiedNames.push(names[index]);
    index ++;
  }
  console.log(copiedNames);
};
addNames(names, copiedNames);
