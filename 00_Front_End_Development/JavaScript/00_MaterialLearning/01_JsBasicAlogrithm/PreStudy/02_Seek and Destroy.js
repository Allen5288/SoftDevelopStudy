function destroyer(arr) {
    const valsToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !valsToRemove.includes(val);
    });
  }

  function destroyer2(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
  }

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer2([1, 2, 3, 1, 2, 3], 2, 3));