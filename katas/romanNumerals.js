/*

classic roman numeral generation kata

problem statement:
  take in a number from 1 to 4999, return the roman numeral

kata source: Greater Sum Atlanta
Roman numeral chart: http://literacy.kent.edu/Minigrants/Cinci/romanchart.htm

roman numeral values
  I = 1
  V = 5
  X = 10
  L = 50
  C = 100
  D = 500
  M = 1000

*/

require('mocha');
require('chai');

const romanNum = num => {
  let romanNum = [];
  while (num >= 1000) {
    romanNum.push('M');
    num -= 1000;
  }
  if (num >= 900) {
    romanNum.push('CM');
    num -= 900;
  } else if (num >= 500) {
    romanNum.push('D');
    num -= 500;
  } else if (num >= 400) {
    romanNum.push('CD');
    num -= 400;
  }
  while (num >= 100) {
    romanNum.push('C');
    num -= 100;
  }
  if (num >= 90) {
    romanNum.push('XC');
    num -= 90;
  }
  while (num >= 10) {
    romanNum.push('X');
    num -= 10;
  }
  if (num === 9) {
    romanNum.push('IX');
    num -= 9;
  } else if (num >= 5) {
    romanNum.push('V');
    num -= 5;
  } else if (num === 4) {
    romanNum.push('IV');
    num -= 4;
  }
  while (num > 0) {
    romanNum.push('I');
    num -= 1;
  }
  return romanNum.join('');
};

module.exports = romanNum;
