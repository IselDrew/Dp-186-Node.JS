//work on exceptions

function myPop(arr) {
  if (!arr.length) {
    return;
  }

  const popedElem = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return popedElem;
}

function myPush(arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    arr[arr.length] = args[i];
  }

  return arr.length;
}

function myShift(arr) {
  if(!arr.length) {
    return;
  }

  const shiftedElem = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return shiftedElem;
}

function myUnshift(arr, ...args) {
  for (let i = args.length - 1; i >= 0; i--) {
    arr.length = arr.length + 1;
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = args[i]
  }

  return arr.length;
}

const arr1 = [1, 2, 10, 15];
const arr2 = [];
const arr3 = ['Hello', 'How', 'Are', 'Ya'];

// console.log('Default: ', arr1);
// console.log(myShift());
// console.log('Changed: ', arr1);

console.log(myUnshift(arr2, 2))
console.log(arr2)

