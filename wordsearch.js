//transpose matrix function @Jiane @WillianChu
const transpose = function(matrix) {
    const newMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        newMatrix.push([]);
        for (let j = 0; j < matrix.length; j++) {
        newMatrix[i].push(matrix[j][i]);
        }
    }
    return newMatrix;
    };
  
  //wordSearch function
  const wordSearch = (letters, word) => {
    if (letters.length === 0 || word === '') return undefined;
  
    //check for horizontal match
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (const l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
    //rotate the array with transpose()
    const transposedLetters = transpose(letters);
        
    //check for vertical match
    const verticalJoin = transposedLetters.map(ls => ls.join(''));
    for (const l of verticalJoin) {
      if (l.includes(word)) return true;
    }
      
    return false;
  };
  
  module.exports = wordSearch;