let myAnimals = ([
    {
      animalType: "dog",
     names: ["Bowser", "Spot", "Fido"]
   },
   {
     animalType: "ferret",
     names: ["Whiskers", "Gizmo", "Nibbles"]
   },
   {
     animalType: "rabbit",
     names: ["Thumper", "Carrot", "Bugs"]
   },
   {
     animalType: "hamster",
     names: ["Truffle", "Fuzz", "Cheeks"]
   },
   {
     animalType: "cat",
     names: ["Luna", "Kitty", "Mittens"]
   },
   {
     animalType: "cat",
     names: ["Snickers", "Fluffy", "Meowzer"]
   },
   {
     animalType: "cat",
     names: ["Simon", "Garfield", "Tiger"]
   }
     ]);
     
     function printCats(myAnimals){
   for (let animal of myAnimals){
     if(animal.animalType === "cat"){
       console.log("Animal type: " + animal.animalType);
       for (let name of animal.names){
         console.log('Name: ' + name);
       }
     }
   }
   }
   
   function printDogs(myAnimals){
     for (let animal of myAnimals){
       if (animal.animalType === 'dog'){
         console.log('Names of dog: ' + animal.names);
       }
     }
   }
     printCats(myAnimals);
     printDogs(myAnimals);
     