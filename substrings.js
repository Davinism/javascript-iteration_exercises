String.prototype.substrings = function () {
  let resultArr = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      resultArr.push(this.slice(i, j));
    }
  }

  return resultArr;
};

console.log("cat".substrings());
