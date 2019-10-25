// Solution 1
function focus() {
    let div = document.getElementsByTagName("div")[0];
    div.addEventListener("focusin", handleFocusIn);
    div.addEventListener("focusout", handleFocusOut)

    function handleFocusIn(e) {
        let target = e.target;

        if (target.tagName === "INPUT") {
            target.parentElement.classList.add("focused");
        }
    }

    function handleFocusOut(e) {
        e.target.parentElement.classList.remove("focused");
    }
}

// Solution 2
/* function focus() {
    Array.from(document.querySelectorAll('input'))
        .forEach(e => {
            e.addEventListener('focus', (ev) => {
                ev.target.parentNode.classList.add('focused');
            });

            e.addEventListener('blur', (ev) => {
                ev.target.parentNode.classList.remove('focused');
            });
        });
} */