removeWithoutCopy = (arr, item) => {
  arr.forEach((x) => {
    arr.splice(arr.indexOf(item), 1)
  })
  return arr;
};

append = (arr, item) => {
  arr.push(item)
  return arr;
};

truncate = (arr) => {
  arr.splice(arr.length-1)
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item)
  return arr;
};

curtail = (arr) => {
  arr.shift()
  return arr;
};

concat = (arr1, arr2) => {
  arr3 = arr1.concat(arr2)
  return arr3;
};

insert = (arr, item, index) => {
  arr.splice(index, 0 , item)
  return arr;
}

count = (arr, item) => {
  arr2 = []
  arr.forEach(each => {
    if (each === item) {
      arr2.push(each)
    }
  })
  return arr2.length;
};

duplicates = (arr) => {
  sorted = arr.slice().sort();
  results= [];
  for (x = 0; x < sorted.length - 1; x++){
    if (sorted[x+1] == sorted[x]){
      if(!results.includes(sorted[x])) {
        results.push(sorted[x])
      }
    }
  }
  return results;
};

square = (arr) => {
 arr2 = arr.map((item) =>{
   return item * item
 })
 return arr2
};

findAllOccurrences = (arr, item) => {
  results = [];
  for(let i in arr){
    if (item === arr[i]){
      results.push(i);
    }
  }
  return results;
};
