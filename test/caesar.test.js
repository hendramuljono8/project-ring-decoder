// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("Caesar Cipher", () => {
  it("should shift characters in the alphabet by the specified number", () => {
    expect(caesar("thinkful", 3)).to.equal("wklqnixo");
    expect(caesar("message", -1)).to.equal("ldrrzfd");
  });

 it("should maintain spaces and other non-alphabetic characters", () => {
    expect(caesar("You are an excellent spy", 5)).to.equal("dtz fwj fs jchjqqjsy xud");
});
  
  it("should wrap from 'z' to 'a'", () => {
    expect(caesar("zebra", 1)).to.equal("afcsb");
  });

  it("should return false if shift value is 0, less than -25, greater than 25, or not present", () => {
    expect(caesar("thinkful", 0)).to.be.false;
    expect(caesar("thinkful", -26)).to.be.false;
    expect(caesar("thinkful", 26)).to.be.false;
    expect(caesar("thinkful")).to.be.false;
  });

  it("should allow for a negative shift that will shift to the left", () => {
    expect(caesar("wklqnixo", -3)).to.equal("thinkful");
  });

  it("should ignore capital letters", () => {
    expect(caesar("THINKFUL", 3)).to.equal("wklqnixo");
  });
});