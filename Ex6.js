var students = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 22,
      country: "USA",
      city: "New York",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      age: 24,
      country: "Canada",
      city: "Toronto",
    },
    {
      id: 3,
      firstName: "Mike",
      lastName: "James",
      age: 25,
      country: "UK",
      city: "London",
    },
    {
      id: 4,
      firstName: "Rachel",
      lastName: "Brown",
      age: 28,
      country: "Australia",
      city: "Sydney",
    },
    {
      id: 5,
      firstName: "Tom",
      lastName: "Davis",
      age: 29,
      country: "Germany",
      city: "Berlin",
    },
  ];
  
  var prop = "age";
  
  function deleteProperty(students, prop){
    for(let i = 0; i < students.length; i++){
      let student = students[i];
      if(student.hasOwnProperty(prop)){
        delete student[prop];
       console.log(student);
      }
    }
  };
  
  deleteProperty(students, prop);
  
  
  function printObjects(array) {
  for (let i = 0; i < array.length; i++) {
  for (const key in array[i]) {
  console.log(key + ": " + array[i][key]);
  }
  }
  };
  printObjects(students);
  
  
  
  
  