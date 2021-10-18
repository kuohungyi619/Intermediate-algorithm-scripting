// Iterate through the array arr and remove each element starting from the 0 index until
// the function func returns true when the iterated element is passed through it.
// Then return the rest of the array.

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  

  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });