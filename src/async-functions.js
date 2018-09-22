function giveItBackLater(value, callback) {
  function waitWithReturn() {
    callback(value);
  }
  setTimeout(waitWithReturn, 500);
}

function addSomePromises() {}

function promiseToGiveItBackLater(value) {
  return new Promise((resolve, reject) => {
    resolve(setTimeout((value) => value, 500));
  });
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };
