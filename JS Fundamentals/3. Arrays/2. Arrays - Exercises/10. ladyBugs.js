function ladyBugs(input) {
    const boxLength = input.shift();
    let box = [];
    box.length = boxLength;
    box.fill(0);
   
    input
      .shift()
      .split(" ")
      .forEach(currentItem => {
        if (currentItem >= 0 && currentItem < box.length) {
          box[currentItem] = 1;
        }
      });
    input.forEach(item => {
      let [bug, direction, distance] = item.split(" ");
      bug = Number(bug);
      distance = Number(distance);

      if (box[bug] === 1) {
        box[bug] = 0;
        let jump = Number(distance);
        if (direction === "right") {
          while (box[bug + jump] === 1) {
            jump += Number(distance);
          }
          if (box[bug + jump] >= 0 && box[bug + jump] < box.length) {
            box[bug + jump] = 1;
          }
        } else {
          while (box[bug - jump] === 1) {
            jump += distance;
          }
          if (box[bug - jump] >= 0 && box[bug - jump] < box.length) {
            box[bug - jump] = 1;
          }
        }
      }
    });
    
    console.log(box.join(" "));
  }
  
  ladyBugs([ 5, '3',
  '3 left 2',
  '1 left -2'])