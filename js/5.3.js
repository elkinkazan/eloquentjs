function every(arr, func) {
  // everyBool = true;
  // for (let element of arr) {
  //   if (!func(element)) everyBool = false;
  // };
  // return everyBool;

  return !arr.some(element => !func(element));
};

console.log(every([1, 3, 5], n => n < 10));
