function frankenSplice(arr1, arr2, n) {
  let ret = [];
  let arr22 = arr2;
  let pre = arr22.slice(0, n);
  ret.push(...arr22.slice(0, n));
  ret.push(...arr1);
  ret.push(...arr22.slice(n, arr2.length));
  return ret;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));