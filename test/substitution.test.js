// Write your tests here!

const substitutionModule = require("../src/substitution");
const { expect } = require("chai");

describe("Substitution Cipher", () => {
  const { substitution } = substitutionModule;

  it("should correctly encode the message with the given substitution alphabet", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
   expect(substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.equal("elp xhm xf mbymwwmfj dne");
    expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("y&ii$r&");
  });

  it("should correctly decode the message with the given substitution alphabet", () => {
    expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("thinkful");
    expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
  });

  it("should return false if substitution alphabet is not exactly 26 characters", () => {
    expect(substitution("thinkful", "short")).to.be.false;
  });

  it("should return false if substitution alphabet does not contain unique characters", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
  });

  it("should maintain spaces and other special characters", () => {
expect(substitution("A Message", "bcdefghijklmnopqrstuvwxyza")).to.equal("b nfttbhf");
  });

  it("should ignore capital letters", () => {
    expect(substitution("A Message", "bcdefghijklmnopqrstuvwxyza")).to.equal("b nfttbhf");
  });
});