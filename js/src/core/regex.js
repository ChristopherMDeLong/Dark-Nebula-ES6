containsNumber = (string) => {
  let regex = /\d/;
  return regex.test(string);
};

containsRepeatingLetter = (string) => {
  let regex = /([a-zA-Z])\1/;
  return regex.test(string);
};

endsWithVowel = (string) => {
  let regex = /([aeiouAEIOU])$/;
  return regex.test(string);
};

captureThreeNumbers = (string) => {
  let regex = /\d{3}/.exec(string);
  if(regex === null){
    return false;
  } else {
    return regex[0];
  }
};

matchesPattern = (string) => {
  
};

isUSD = (string) => {

};
