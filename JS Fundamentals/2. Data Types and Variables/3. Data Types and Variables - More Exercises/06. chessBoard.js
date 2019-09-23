function chessBoard(n) {
    let print = `<div class="chessboard">\n`

    for (let i = 1; i <= n; i++) {
        print += `  <div>\n`;

        for (let j = 1; j <= n; j++) {

            if (i % 2 !== 0) {
                if (j % 2 !== 0) {
                    print += `    <span class="black"></span>\n`;
                } else {
                    print += `    <span class="white"></span>\n`;
                }
            } else {
                if (j % 2 !== 0) {
                    print += `    <span class="white"></span>\n`;
                } else {
                    print += `    <span class="black"></span>\n`;
                }
            }
        }
        print += `  </div>\n`;
    }
    print += `</div>`

    console.log(print)
}

chessBoard(3)