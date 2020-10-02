function renderDifficultyLevel(currentLevel) {
   const difficultyLevel = [
      '1 - Very Easy',
      '2 - Easy',
      '3 - Medium (Standard 3x3)',
      '4 - Intermediate',
      '5 - Expert',
      '6 - Hardcore'
    ];
    
   return difficultyLevel.map(level => {
     const valueLevel = +level.split(' - ')[0];
     return valueLevel === Number(currentLevel)
       ? `<option value="${valueLevel}" selected="selected">${level}</option>`
       : `<option value="${valueLevel}">${level}</option>`
   }).join("");
 }

module.exports = {
   renderDifficultyLevel
}