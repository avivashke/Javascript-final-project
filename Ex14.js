function isPalindrome(words) {
    let reversedWords = words.map(word => word.split("").reverse().join("").toLowerCase());
    
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== reversedWords[i]) {
        console.log('is the word:' +"'"+ words[i] +"'"+ " a palindrome? false");
      }
    
      else{
        console.log('is the word:' + "'"+ words[i] +"'" + " a palindrome? true");
      }
    }
    }
    const words = ["java", "madam","racecar", "horse"];
    isPalindrome(words);