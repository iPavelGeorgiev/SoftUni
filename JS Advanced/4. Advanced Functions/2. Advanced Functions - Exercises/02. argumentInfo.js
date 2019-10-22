function argumentInfo(...input) {
   let [output, typeOfArgs] = input
      .reduce((accu, curr) => {
         let [output, argumentsType] = accu;
         let typeOf = typeof curr;
         output.push(`${typeOf}: ${curr}`);

         if (!argumentsType.hasOwnProperty(typeOf)) {
            argumentsType[typeOf] = 0;
         }

         argumentsType[typeOf] += 1;
         return accu;
      }, [[], {}])

      return output.join("\n") + "\n" + Object.entries(typeOfArgs)
         .sort((a, b) => b[1] - a[1])
         .map(type => `${type[0]} = ${type[1]}`)
         .join("\n");
}

console.log(argumentInfo(
   'cat', 42, function () { console.log('Hello world!'); }
));