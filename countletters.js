
function countLetters(string) {
  var output = {};
  string = string.split(' ').join('');

  for (i = 0; i < string.length; i++) {
    var key = string[i];
    //var outputvalue = .length;

      if (output[key]) {  //if it the value for key exists at this point in loop,
        //then we must increment value
        output[key] += 1; //increment the value
      } else {
        output[key] = 1; //create property value pair
      }
  }

  return output;
}

console.log(countLetters("lighthouse in the house"));