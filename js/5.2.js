let loop = function(value, condition, update, bodyfunc) {
  // if (condition(value)) {
  //   bodyfunc(value);
  //   loop(update(value), condition, update, bodyfunc)
  // };
  for (let i = value; condition(i); i = update(i)) {
   bodyfunc(i);
  }
};

loop(3, n => n > 0, n => n - 1, console.log);
