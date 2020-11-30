const textInput = document.querySelector('#text-area-input');
const textOutput = document.querySelector('#text-area-output');
const btnTranslate = document.querySelector('#btn-translate');

let url = 'https://api.funtranslations.com/translate/shakespeare.json';

const getUrl = text => { return url + '?text=' + text; };

const showError = error => {
    alert('Uh Oh! Some error occured\n\n' + error + '\n\nPlease try after sometime.');
    console.log({error});
};

const translate = () => {
    const text = textInput.value;
    
    fetch(getUrl(text))
        .then(response => response.json())
        .then(json => showOutput(json))
        .catch(showError)
};

const showOutput = (text) => {
    console.log(text)
    textOutput.innerHTML = text.contents.translated;
};

btnTranslate.addEventListener('click', translate);