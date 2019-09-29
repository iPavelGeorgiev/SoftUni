function netherRealms(input) {
   input[0].split(/[, ]+/).sort().forEach(elem => {
      let name = elem.match(/[^, ]+/g).join('');
      let multy = [];
      let health = elem.match(/[^\+\-\*\/\.]/gi) !== null ? elem.match(/[^0-9\+\-\*\/\.]/gi).map(e => e.charCodeAt()).reduce((a, b) => a + b) : 0;
      let dmg = 0;
      let dmgRegex = /[+-]*[\d]+\.[\d]*|[-+]*[\d]+|[*/]/g
      elem.match(dmgRegex) !== null ? elem.match(dmgRegex).forEach((e, ind) => {
          if (e !== '*' && e !== '/') {
              dmg += Number(e)
          } else {
              multy.push(e)
          }
          if (ind === elem.match(dmgRegex).length - 1) {
              multy.forEach(el => el === '*' ? dmg *= 2 : dmg /= 2)
          }
      }) : void (0)

      console.log(`${name} - ${health} health, ${dmg.toFixed(2)} damage`);
  });
}

netherRealms(
   [ 'Gos/ho' ]
)