// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("Polybius Cipher", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    expect(polybius("thinkful")).to.equal("4432423352125413");
    expect(polybius("Hello world")).to.equal("3251131343 2543241341");
  });

  it("should decode a message by translating each pair of numbers into a letter", () => {
    expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
  });

  it("should translate both 'i' and 'j' to 42 when encoding", () => {
    expect(polybius("ij")).to.equal("4242");
  });

  it("should translate 42 to both 'i' and 'j' when decoding", () => {
    expect(polybius("42", false)).to.include("i/j");
  });

  it("should leave spaces as is", () => {
    expect(polybius("Hello World")).to.include(" ");
  });

  it("should return false if the length of all numbers is odd when decoding", () => {
    expect(polybius("44324233521254134", false)).to.be.false;
  });
});
