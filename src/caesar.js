// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    if (!encode) {
      shift = -shift;
    }
    let output = '';
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char.match(/[a-z]/i)) {
        char = char.toLowerCase();
        let code = char.charCodeAt(0);
        let shiftedCode = (code - 97 + shift + 26) % 26 + 97;
        let shiftedChar = String.fromCharCode(shiftedCode);
        output += shiftedChar;
      } else {
        output += char;  // Maintain spaces and other non-alphabetic symbols
      }
    }
    return output;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
