let f = function(arr) {

  // Если массив состоит не только из массивов, но и чисел-элементов
  // let arr1 = [];
  // for (let element of arr) {
  //   if (Array.isArray(element)) {
  //       arr1 = arr1.concat(element);
  //   } else {
  //       arr1.push(element)
  //       };
  // };
  // return arr1;

  return arr.reduce((a, b) =>  a.concat(b));
};
console.log(f([[3,4],[5,6,7,],[8,9,10,11]]));
