function ganeratePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinStr = pin + '';
    if (pinStr.length === 4) {
        return pin;
    } else {
        return ganeratePin();
    }
}


function setInputValue(inputId,value) {
    const inputElement =  document.getElementById(inputId);
    if(inputId === 'ganerated-input'){
        inputElement.value =  value;
    } else if(!isNaN(value)) {
        inputElement.value += value;
    } else {
        if(value === 'C'){
            inputElement.value = ''
        }
    }
}

function getInputValue(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputElementValue = inputElement.value;
    return inputElementValue;
}


function getElementTextValue(e) {
    let elementValue = e.target.innerText;
    return elementValue;
}

function setElementTextValue(textId,value) {
    const textElement = document.getElementById(textId);
    textElement.innerText = value;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const ganeratedPin =  ganeratePin();
    setInputValue('ganerated-input',ganeratedPin);
});



document.getElementById('key-pad').addEventListener('click',function(e){
    const elementValue =  getElementTextValue(e);
    setInputValue('show-pin',elementValue);
});





document.getElementById('submit-button').addEventListener('click',function(){
    const ganeratedValue = getInputValue('ganerated-input');
    const userValue = getInputValue('show-pin');

    const errorMessage = `Pin Didn't Match, Please try again`;

    const rightMessage = ` Pin Matched... Secret door is opening for you`; 

    if (ganeratedValue === userValue) {
        setElementTextValue('match',rightMessage)
    } else {
        setElementTextValue('dont-match',errorMessage)
    }
})