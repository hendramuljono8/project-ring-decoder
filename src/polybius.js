// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const alphabet = [
      ['a', 'b', 'c', 'd', 'e'],
      ['f', 'g', 'h', '(i/j)', 'k'],
      ['l', 'm', 'n', 'o', 'p'],
      ['q', 'r', 's', 't', 'u'],
      ['v', 'w', 'x', 'y', 'z']
    ];

    let result = "";

    if (encode) {
      for (let char of input.toLowerCase()) {
        if (char === ' ') {
          result += ' ';
          continue;
        }
        if (char === 'i' || char === 'j') {
          result += '42';
          continue;
        }
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            if (char === alphabet[j][i]) {
              result += `${i+1}${j+1}`;
            }
          }
        }
      }
    } else {
      if ((input.replace(/\s/g, '').length % 2) != 0) return false;
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === ' ') {
          result += ' ';
          i--;
          continue;
        }
        const num1 = input[i] - 1;
        const num2 = input[i+1] - 1;
        result += alphabet[num2][num1];
      }
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };