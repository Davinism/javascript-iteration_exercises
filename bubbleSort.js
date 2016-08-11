
Array.prototype.bubbleSort = function () {
  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

console.log([3, 1, 4, 2, 6, 5].bubbleSort());
