class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = `${date.getHours()}`.padStart(2, 0);
    this.minutes = `${date.getMinutes()}`.padStart(2, 0);
    this.seconds = `${date.getSeconds()}`.padStart(2, 0);
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    setInterval(() => {
      this.seconds += 1;
      this.printTime();
    }, 1000);
  }
}

const clock = new Clock();

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const addNumbers = (sum, numsLeft, cb) => {
  if (numsLeft > 0) {
    rl.question('Enter a number: ', (answer) => {
      const num = parseInt(answer);
      sum += num;
      numsLeft--;
      console.log(sum);
      addNumbers(sum, numsLeft, cb);
    });
  } else if (numsLeft === 0) {
    cb(sum);
    rl.close();
  }
};

Function.prototype.myBind = function (context) {
  let that = this;
  return () => that.apply(context);
};

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(
  arr,
  i,
  madeAnySwaps,
  outerBubbleSortLoop
) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log('Sorted array: ' + JSON.stringify(arr));
  reader.close();
});
