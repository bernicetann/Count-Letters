function countLetters(string) {
  var output = {};
  var stringArray = string.split('');

  for (var i = 0; i < stringArray.length; i++) { // make a loop that iterates over all the characters in the arguement once
    var key = stringArray[i]; //the current character at point in the loop

      if (key !== ' ') { // if key is not a space, do everything in the if statment

      if (output[key]) {  //if key already exists at this point in loop,
        //then we must push to our object the indices of that key
        output[key].push(i);
      } else { //otherwise push to object
        output[key] = [i]; //
      }
      }

  }
  return output;
}



console.log(countLetters("lighthouse in the house"));


