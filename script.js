'use strict';
var userString = prompt('Введите вашу строку');
function isPalindrome(string) {
  var newString = '';
  for (var i=0;i<string.length;i++) {
    var letter = string[i].toLowerCase();
    if (letter == 'ё') {
      newString += 'е';
    }
    if (letter == 'ъ'||letter == 'ь') {
      continue;
    }
    if (letter >= 'а' && letter <= 'я'||letter >= 'a' && letter <= 'z') {
      newString += letter;
    }
  }
  if (newString.length<2){
    return true;
  }
  var firstLetter = newString[0];
  var lastLetter = newString[newString.length-1];
  if (firstLetter==lastLetter) {
    return isPalindrome(newString.slice(1,newString.length-1));
    }       
    return false;
}
alert (isPalindrome(userString)? 'Это палиндром':'Это не палиндром');