function palindrome(str) {
    let regex = /[a-zA-Z0-9]/gi;
    str=str.toLowerCase();
  
    str = str.replace('/[^a-zA-Z]/ig', '');
    let rt = str.match(regex);
    let comp = rt.slice().reverse();
  
    return rt.join('') == comp.join('');
  }

  function palindrome2(str) {
    // Convert the input string to lowercase
    str = str.toLowerCase();
  
    // Remove non-alphanumeric characters from the string
    str = str.replace(/[^a-z0-9]/g, "");
  
    // Convert the string to an array of characters
    let arr = [...str];
  
    // Create a reversed version of the array
    let reversedArr = arr.slice().reverse();
  
    // Check if the original and reversed arrays are equal
    return arr.join("") === reversedArr.join("");
  }
  
  palindrome("1 eye for of 1 eye.");