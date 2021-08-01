// Here we "normalize" the string by calling `.toLowerCase` and then
// split the string at white space, giving us an array of words.
// When then map that array translating each word,
// then join the words with 2 white spaces.
function morseEncode(str) {
  str = str.toLowerCase();
  return str.split(' ').map(translateWord).join('  ');
}

// Translate word receives a word, splits that word into an array of individual letters.
// When then iterate over that array and translate each letter, then we
// join the letters together with 1 white space between.
function translateWord(word) {
  return word.split('').map(translateLetters).join(' ');
}

// Here we translate a single letter, if the letter is in our morseCode
// object we return the translated version of the letter,
// otherwise, we return the original letter.
function translateLetters(letter) {
  var morseCode = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..'
  };

  return morseCode[letter] || letter;
}
