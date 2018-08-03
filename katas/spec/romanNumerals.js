// testing for roman numeral generation
const expect = require('chai').expect;
const romanNum = require('../romanNumerals');

describe('romanNumeral', () => {
  it('should return I for 1', () => {
    expect(romanNum(1)).to.equal('I');
  });

  it('should return II for 2', () => {
    expect(romanNum(2)).to.equal('II');
  });

  it('should return III for 3', () => {
    expect(romanNum(3)).to.equal('III');
  });

  it('should return IV for 4', () => {
    expect(romanNum(4)).to.equal('IV');
  });

  it('should return V for 5', () => {
    expect(romanNum(5)).to.equal('V');
  });

  it('should return IX for 9', () => {
    expect(romanNum(9)).to.equal('IX');
  });

  it('should return X for 10', () => {
    expect(romanNum(10)).to.equal('X');
  });

  it('should return XC for 90', () => {
    expect(romanNum(90)).to.equal('XC');
  });

  it('should return C for 100', () => {
    expect(romanNum(100)).to.equal('C');
  });

  it('should return CD for 400', () => {
    expect(romanNum(400)).to.equal('CD');
  });

  it('should return CDCCC for 800', () => {
    expect(romanNum(800)).to.equal('DCCC');
  });
  it('should return MMMMCMXCIX for 4999', () => {
    expect(romanNum(4999)).to.equal('MMMMCMXCIX');
  });
});
