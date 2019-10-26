function lockedProfile() {
    const btns = Array.from(document.getElementsByTagName('button'))
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(e) {
        const button = e.target;
        const profile = button.parentElement;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}