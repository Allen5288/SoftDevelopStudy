function rot13(str) {
    let decoded = "";
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) { // Check if it's an uppercase letter
        let decodedCharCode = charCode - 13;
        if (decodedCharCode < 65) {
          decodedCharCode += 26; // Wrap around if it goes before 'A'
        }
        decoded += String.fromCharCode(decodedCharCode);
      } else {
        decoded += str[i]; // Non-alphabetic characters are passed as-is
      }
    }
  
    return decoded;
  }
  
  console.log(rot13("SERR PBQR PNZC"));