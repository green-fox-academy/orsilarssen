'use strict';
declare function require(path: string): any;
const fs = require('fs');

function getMostCommonCharacters(fileName) {
  const getCount = (text, character) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === character) {
        count++;
      }
    }
    return count;
  };
  const getCommonCharacter = (text, exceptCharacter = null) => {
    let commonCharacter = 'a';
    let commonCharacterCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (exceptCharacter && exceptCharacter === text[i]) {
        continue;
      }
    
      const count = getCount(text, text[i]);
  
      if (count > commonCharacterCount) {
        commonCharacterCount = count;
        commonCharacter = text[i];
      }
    }
    return {
      character: commonCharacter,
      count: commonCharacterCount,
    };
  }
  const data = fs.readFileSync(fileName, 'utf8');
  const commonCharacter = getCommonCharacter(data);
  const secondCommonCharacter = getCommonCharacter(data, commonCharacter.character);
  
  return {
    [commonCharacter.character]: commonCharacter.count,
    [secondCommonCharacter.character]: secondCommonCharacter.count, 
  };
}
console.log(getMostCommonCharacters('../countchar.txt'));