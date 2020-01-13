function mySolution() {
    function generateDiv(className) {
        const divElement = document.createElement('div');
        divElement.setAttribute('class', className);
        return divElement;
    }
 
    function changeDivClass(divElement, className) {
        divElement.setAttribute('class', className);
    }
 
    function generateImg() {
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', './user.png');
        imgElement.setAttribute('width', '32');
        imgElement.setAttribute('height', '32');
        return imgElement;
    }
 
    function generateSpan(text) {
        const span = document.createElement('span');
        span.textContent = text;
        return span;
    }
 
    function generateP(text) {
        let p = document.createElement('p');
        p.textContent = text;
        return p;
    }
 
    function generateButton(className, text) {
        const buttonElement = document.createElement('button');
        buttonElement.setAttribute('class', className);
        buttonElement.textContent = text;
        return buttonElement;
    }
 
    function generateInput(className, type, placeholder) {
        const inputElement = document.createElement('input');
        inputElement.setAttribute('class', className);
        inputElement.setAttribute('type', type);
        inputElement.setAttribute('placeholder', placeholder);
        return inputElement;
    }
 
    function generateOl(className, type) {
        const ol = document.createElement('ol');
        ol.setAttribute('class', className);
        ol.setAttribute('type', type);
        return ol;
    }
 
    function generateLi(text) {
        const liElement = document.createElement('li');
        liElement.textContent = text;
        return liElement;
    }
 
    const sendButton = () => document.getElementsByTagName("button")[0];
 
    sendButton().addEventListener('click', function () {
        const questionTextArea = document.querySelector("#inputSection > textarea");
        const nameInput = document.querySelector("#inputSection input[type=username]");
        const name = nameInput.value ? nameInput.value : 'Anonymous';
 
        const divHolder = generateDiv('pendingQuestion');
 
        const img = generateImg();
        divHolder.appendChild(img);
 
        const span = generateSpan(name);
        divHolder.appendChild(span);
        
        const p = generateP(questionTextArea.value);
        divHolder.appendChild(p);
 
        const actionsDiv = generateDiv('actions');
 
        const buttonArchive = generateButton('archive', 'Archive');
        actionsDiv.appendChild(buttonArchive);
        buttonArchive.addEventListener('click', function () {
            divHolder.remove();
        });
 
        const buttonOpen = generateButton('open', 'Open');
        actionsDiv.appendChild(buttonOpen);
        buttonOpen.addEventListener('click', function () {
 
            buttonArchive.remove();
            buttonOpen.remove();
 
            changeDivClass(divHolder, 'openQuestion');
 
            const buttonReply = generateButton('reply', 'Reply');
            actionsDiv.appendChild(buttonReply);
 
            const replySection = generateDiv('replySection');
            divHolder.appendChild(replySection);
            replySection.setAttribute('style', 'display: none;');
 
            buttonReply.addEventListener('click', function () {
                if (replySection.style.display === 'none') {
                    buttonReply.textContent = 'Back';
                    replySection.style.display = 'block';
                } else {
                    buttonReply.textContent = 'Reply';
                    replySection.style.display = 'none';
                }
            });
 
            const inputReply = generateInput('replyInput', 'text', 'Reply to this question here...');
            replySection.appendChild(inputReply);
 
            const buttonSendReply = generateButton('replyButton', 'Send');
            replySection.appendChild(buttonSendReply);
            buttonSendReply.addEventListener('click', function () {
                const inputReplyText = inputReply.value;
                const li = generateLi(inputReplyText);
                ol.appendChild(li);
                inputReply.value = '';
            });
 
            const ol = generateOl('reply', '1');
            replySection.appendChild(ol);
 
            const openQuestionsHolder = document.getElementById('openQuestions');
            openQuestionsHolder.appendChild(divHolder);
        });
 
        divHolder.appendChild(actionsDiv);
 
        const pendingQuestionsHolder = document.getElementById('pendingQuestions');
        pendingQuestionsHolder.appendChild(divHolder);
 
        questionTextArea.value = '';
        nameInput.value = '';
    });
 }