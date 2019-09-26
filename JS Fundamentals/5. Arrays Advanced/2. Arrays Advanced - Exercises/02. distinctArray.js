function distinctArray(input) {
    let print = input.reduce((accu, curr) => {
        if (!accu.includes(curr)) {
            accu.push(curr);
        }
        return accu;
    },[])

    console.log(print.join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])