var funcCallar = function(func, arg) {
  return func(arg);
}

var firstVal = function(arr, func) {
  return {
    firstEl: func(arr[0]),
    nEl: func(arr)
  }
}
