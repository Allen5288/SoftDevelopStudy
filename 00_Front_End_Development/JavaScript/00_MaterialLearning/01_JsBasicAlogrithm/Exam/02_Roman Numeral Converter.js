const convertInfo = {
    '1000': 'M',
    '900': 'CM',
    '500': 'D',
    '400': 'CD',
    '100': 'C',
    '90': 'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9' : 'IX',
    '5' : 'V',
    '4' : 'IV',
    '1' : 'I',
  }
  
  const calNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const MaxNum = 13;
  
  function convertToRoman(num) {
   let rtn = [];
   for (let i = 0; i < MaxNum; i++) {
     let tmpNum = calNum[i];
     while (num >= tmpNum) {
       num -= tmpNum;
       rtn.push(convertInfo[tmpNum]);
     }
   }
   rtn = rtn.join('');
   console.log(rtn);
   return rtn;
  }
  
  convertToRoman(97);
  convertToRoman(99);
  convertToRoman(798);
  convertToRoman(97);
  convertToRoman(3999);