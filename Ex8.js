//#1
const student = {
    name: 'Aviv',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
  };
  
  function printStudentData(student){
    console.log('Student name: ' + student['name']);
    console.log('Student age: ' + student['age']);
    console.log('Student hobbies: ' + student.hobbies[0] + ", " + student.hobbies[1] + ", " + student.hobbies[2]);
  };
  
  printStudentData(student);


  //#2
  function addHobbie(student, hobby){
    student.hobbies = student.hobbies.concat(hobby);
  }
  let hobby = 'Tea';
  addHobbie(student, hobby);


  //#3
  function addHobbie(student, hobby){
    student.hobbies = student.hobbies.concat(hobby);
    console.log('Student hobbies: ' + student.hobbies);
  }
  let hobby = 'Tea';
  addHobbie(student, hobby);


  //#4, #5
function delHobby(student, hobby){
  let index = student.hobbies.indexOf(hobby);
  
  if (index > -1) {
    student.hobbies.splice(index, 1);
  } 
  
  console.log(student.hobbies);
}


delHobby(student, hobby);


//#6

function addProperty(student, lastName) {
    student.lastName = lastName;
    
    console.log(student);
  }
  
  
  let lastName = 'Ashkenazi';
  
  addProperty(student, lastName);