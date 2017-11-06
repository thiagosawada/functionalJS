var checkValue = function(arr, val) {
  var arrLength = arr.length
  for(var i = 0; i < arrLength; i++) {
    if(val === arr[i]) {
      return true;
    }
  }
  return false;
}

checkValue = function(arr, val) {
  var result = false;
  _.each(arr, function(v){
    if(v === val) {
      result = true;
    }
  });
  return result;
}

var arr = [];

var input = {two: 2, four: 4, three: 3, twelve: 12}

for(key in input) {
  arr.push(input[key]);
}

var arr = _.map(input, function(val)) {
  return val;
};

var evenArr = _.filter(input, function(val) {
  return val % 2 == 0;
});
