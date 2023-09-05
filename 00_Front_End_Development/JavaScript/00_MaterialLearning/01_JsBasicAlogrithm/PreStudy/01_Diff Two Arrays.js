function diffArray(arr1, arr2) {
    const newArr = [];
  
    // * 
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }

  function diffArray2(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(item => !arr1.includes(item) || !arr2.includes(item));
  }

  function diffArray3(arr1, arr2) {
    return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
    function diff(a, b) {
      return a.filter(item => b.indexOf(item) === -1);
    }
  }

  function diffArray4(arr1, arr2) {
    const difference = new Set(arr1);
    arr2.forEach((ele) =>
      difference.has(ele) ? difference.delete(ele) : difference.add(ele)
    );
    return Array.from(difference);
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray4([1, 2, 3, 5], [1, 2, 3, 4, 5]));