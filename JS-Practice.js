class Clock {
  constructor() {
    // 1. Create a Date object.
    // this.date = new Date();
    const date = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.hours = `${date.getHours()}`.padStart(2, 0);
    this.minutes = `${date.getMinutes()}`.padStart(2, 0);
    this.seconds = `${date.getSeconds()}`.padStart(2, 0);
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    const formattedTime = [
      this.hours,
      this.minutes,
      this.seconds,
    ].join(':');

    // Use console.log to print it.
    console.log(formattedTime);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.incrementSecs();
    this.printTime();
  }

  incrementSecs() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.incrementMins();
    }
  }

  incrementMins() {
    this.minutes++;
    if (this.minutes === 60) {
      this.minutes = 0;
      this.incrementHrs();
    }
  }

  incrementHrs() {
    this.hours = (this.hours + 1) % 24;
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
  reader.question(`${el1} greater than ${el2}? `, (answer) => {
    if (answer === 'yes' || answer || 'Yes' || answer === 'y') {
      callback(true);
    } else
      answer === 'No' || answer === 'no' || answer === 'n'
        ? callback(false)
        : console.log('Please try again - Invalid Input');
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(
  arr,
  i,
  madeAnySwaps,
  outerBubbleSortLoop
) {
  if (i === arr.length - 1) {
    return outerBubbleSortLoop(madeAnySwaps);
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], (answer) => {
      if (answer === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
        return innerBubbleSortLoop(
          arr,
          i + 1,
          madeAnySwaps,
          outerBubbleSortLoop
        );
      } else {
        madeAnySwaps = false;
        return innerBubbleSortLoop(
          arr,
          i + 1,
          madeAnySwaps,
          outerBubbleSortLoop
        );
      }
    });
  }
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    madeAnySwaps === true
      ? innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
      : sortCompletionCallback(arr);
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log('Sorted array: ' + JSON.stringify(arr));
  reader.close();
});
