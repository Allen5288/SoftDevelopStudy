function pairElement(str) {
    let pairs = {
    "G": "C",
    "C": "G", 
    "A": "T",
    "T": "A"
    };
    let ret = [];
    for (let i = 0; i < str.length; i++) {
      let tmp = [str[i], pairs[str[i]]];
      ret.push(tmp);  
    }
    return ret;
}

function pairElement1(str) {
    // create object for pair lookup
    const pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  
    // map character to array of character and matching pair
    return str
      .split("")
      .map(x => [x, pairs[x]]);
}
  

function pairElement2(str) {
    // Function to match each character with the base pair
    const matchWithBasePair = function(char) {
      switch (char) {
        case "A":
          return ["A", "T"];
        case "T":
          return ["T", "A"];
        case "C":
          return ["C", "G"];
        case "G":
          return ["G", "C"];
      }
    };
  
    // Find pair for every character in the string
    const pairs = [];
    for (let i = 0; i < str.length; i++) {
      pairs.push(matchWithBasePair(str[i]));
    }
  
    return pairs;
}
  
console.log(pairElement("GCG"));