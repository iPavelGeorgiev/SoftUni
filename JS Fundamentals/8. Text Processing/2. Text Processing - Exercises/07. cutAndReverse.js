function cutAndReverse(text) {
   let splitIndex = text.length / 2;
   let firstPart = text.slice(0, splitIndex).split("").reverse().join("");
   let secondPart = text.slice(splitIndex).split("").reverse().join("");
   
   console.log(`${firstPart}\n${secondPart}`);
}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')