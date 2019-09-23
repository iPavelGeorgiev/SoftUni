function triangleArea(side1,side2,side3) {
    let p = (side1+side2+side3)/2;
    let a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
    console.log(a);
}

triangleArea(2, 3.5, 4)