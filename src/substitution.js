// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
 function substitution(input, alphabet, encode = true) {
  if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false;

  const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = "";

  for (let char of input) {
    const charLower = char.toLowerCase();

    if (encode) {
      const index = normalAlphabet.indexOf(charLower);
      if (index === -1) {
        result += char;
      } else {
        const newChar = alphabet[index];
        result += newChar;
      }
    } else {
      const index = alphabet.indexOf(charLower);
      if (index === -1) {
        result += char;
      } else {
        const newChar = normalAlphabet[index];
        result += newChar;
      }
    }
  }

  return result;
}
  return {
    substitution,
  };
})();

module.exports = substitutionModule;
