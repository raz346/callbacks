
// ## functions can be stored in variables and passed around
// ## functions can do everything that other objects can do (like having attributes assigned to them).

function findWaldo(arr, found) {
  arr.forEach(function(indexEntry, i) {
    if (indexEntry === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);