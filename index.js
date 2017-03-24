function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function addTwo(n) {
    console.log(n+2)
  }
}

function returnsAnAnonymousFunction() {
  return function() {
  }
}