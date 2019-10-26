function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button')
    let textAreas = document.getElementsByTagName('textarea')
    let send = buttons[0]
    let sendTextArea = textAreas[0]
    let receive = buttons[1]
    let receiveTextArea = textAreas[1]
    send.addEventListener('click', sendMessage)
    receive.addEventListener('click', decodeMessage)
       
 
    function sendMessage(){
        let sentence = sendTextArea.value
        let code = sentence.split('')
        .map(x => x.charCodeAt(0) + 1)
        .map(x => String.fromCharCode(x)).join('')
        sendTextArea.value = ''
        receiveTextArea.value = code
    }
    function decodeMessage(){
        let sentence = receiveTextArea.value
        let code = sentence.split('')
        .map(x => x.charCodeAt(0) - 1)
        .map(x => String.fromCharCode(x)).join('')
        receiveTextArea.value = code
    }
 
}