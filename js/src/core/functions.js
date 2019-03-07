isPrime = (num) => {
  for (i = 2; i < num; i++){
    if(num < 2 || num % i === 0){
      return false;
    } else {
      return true;
    }
  }
};

arraySum = (array) => {
  let x = 0
  array.forEach(item =>{
    x += item
  })
  return x;
};

fizzBuzz = (num) => {
  if(typeof num !== "number") {
    return null;
  } else if(num % 3 == 0 && num % 5 == 0) {
    return 'fizzbuzz';
  } else if (num % 3 == 0) {
    return 'fizz';
  } else if (num % 5 == 0) {
    return 'buzz';
  } else {
    return num;
  }
};
