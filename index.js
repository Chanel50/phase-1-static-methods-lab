class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ');
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !exceptions.includes(word.toLowerCase())) {
        return this.capitalize(word);
      } else {
        return word;
      }
    });
    return titleizedWords.join(' ');
  }
}

// Example usage:
console.log(Formatter.capitalize('hello world')); // Output: 'Hello world'
console.log(Formatter.sanitize("h3ll0-w0rld'!")); // Output: 'h3ll0-w0rld'
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // Output: 'The Quick Brown Fox Jumps over the Lazy Dog'
