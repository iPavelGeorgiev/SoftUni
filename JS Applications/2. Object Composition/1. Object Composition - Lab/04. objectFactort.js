function objectFactory(input) {
   return Object.assign({}, ...JSON.parse(input));
}

console.log(objectFactory(`[{"canFly": true},{"canMove":true, "doors": 4},{"capacity": 255},{"canFly":true, "canLand": true}]`));