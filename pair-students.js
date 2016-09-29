const _ = require('lodash');
var fs  = require('promisify-node')('fs');

// generatePairs
//   arr      an array of names (String)
//   returns  an array of pairs (Array) containing 2 names each
function generatePairs(arr) {
  return _.chain(arr)
          .shuffle()
          .chunk(2)
          .value();
}

// readStudentFile
//   filepath     a String containing the filepath to read from
//   returns      a Promise which resolve to a list of name pairs
function readStudentFile(filepath = './students.txt') {
  return fs.readFile(filepath, { encoding: 'utf8' })
           .then(text => generatePairs(text.split('\n')));
}

// writePairsFile
//   pairs       the pairs to write (expects a list of list of names)
//   filename    the file to write to
//   returns     the promise that the file has been written
function writePairsFile(pairs, filename = 'pairs.txt') {
  const lines = pairs.map(pair => pair.join(', '));
  return fs.writeFile(filename, lines.join('\n'))
           .catch(console.error)
}


module.exports = { readStudentFile, generatePairs, writePairsFile };
