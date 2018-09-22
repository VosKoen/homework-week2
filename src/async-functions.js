function giveItBackLater(value, callback) {
  function waitWithReturn() {
    callback(value);
  }
  setTimeout(waitWithReturn, 500);
}

function addSomePromises(somePromise) {
  return somePromise
    .then(value => value + value)
    .catch(value => value + value + value);
}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    giveItBackLater(value, resolve);
  });
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };
