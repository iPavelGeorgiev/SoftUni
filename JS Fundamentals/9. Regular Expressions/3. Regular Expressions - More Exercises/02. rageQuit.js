function rageQuit(input) {
   let message = "";
   let uniqueSymbols = [];
   let pattern = /(?<str>.+?)(?<num>\d+)/gmi;

   while ((part = pattern.exec(input[0])) !== null) {
      let str = part.groups.str.toUpperCase();
      let n = Number(part.groups.num);
      message += str.repeat(n);
   }

   for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (!uniqueSymbols.includes(char)) {
         uniqueSymbols.push(char);
      }
   }

   console.log(`Unique symbols used: ${uniqueSymbols.length}`);
   console.log(message);
}

rageQuit(
   [ 'e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D\'xi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]\':\\Iz.17*W:\\mwV`z-15g@hUYE{_$~}+X%*nytkW15' ]
)