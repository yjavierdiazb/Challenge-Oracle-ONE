const btnEncrypt = document.querySelector(".btn-encrypt");
const btnDecrypt = document.querySelector(".btn-decrypt");
const personContainer = document.querySelector(".person-container");
const paragraphContainer = document.querySelector(".paragraph-container");
const resultText = document.querySelector(".result-text");

btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);

function encrypt() {
    hideElements();
    const textBox = retrieveText();
    resultText.textContent = encryptText(textBox);
}

function decrypt() {
    hideElements();
    const textBox = retrieveText();
    resultText.textContent = decryptText(textBox);
}

function retrieveText() {
    const textBox = document.querySelector(".text-box");
    return textBox.value;
}

function hideElements() {
    personContainer.classList.add("hide");
    paragraphContainer.classList.add("hide");
}

function encryptText(message) {
    let encryptedText = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let encryptedChar = encryptChar(char);
        encryptedText += encryptedChar;
    }

    return encryptedText;
}

function encryptChar(char) {
    const replacementMap = {
        'a': '1aSD',
        'b': '2ab',
        'c': '3uj',
        'd': '5UqK',
        'e': 'lLlo',
        'f': 'ffAAff',
        'g': '7bC',
        'h': 'PQk',
        'i': 'PAPA',
        'j': 'VEN',
        'k': 'YEF',
        'l': 'ER',
        'm': 'SON',
        'n': 'DI',
        'o': 'AZ',
        'p': 'AL',
        'q': 'UR',
        'r': 'A',
        's': 'OracleOne',
        't': 'SK',
        'u': 'JDK',
        'v': 'Javascript',
        'w': 'Java',
        'x': 'Bart',
        'y': 'Enigma',
        'z': 'Batman'
    };

    if (isLowerCaseLetter(char)) {
        if (replacementMap.hasOwnProperty(char)) {
            return replacementMap[char];
        }
    }

    return char;
}

function isLowerCaseLetter(char) {
    return /^[a-z]+$/.test(char);
}

function decryptText(message) {
    let decryptedText = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let decryptedChar = decryptChar(char);
        decryptedText += decryptedChar;
    }

    return decryptedText;
}

function decryptChar(char) {
    const replacementMap = {
        '1aSD': 'a',
        '2ab': 'b',
        '3uj': 'c',
        '5UqK': 'd',
        'lLlo': 'e',
        'ffAAff': 'f',
        '7bC': 'g',
        'PQk': 'h',
        'PAPA': 'i',
        'VEN': 'j',
        'YEF': 'k',
        'ER': 'l',
        'SON': 'm',
        'DI': 'n',
        'AZ': 'o',
        'AL': 'p',
        'UR': 'q',
        'A': 'r',
        'OracleOne': 's',
        'SK': 't',
        'JDK': 'u',
        'Javascript': 'v',
        'Java': 'w',
        'Bart': 'x',
        'Enigma': 'y',
        'Batman': 'z'
    };

    if (isLowerCaseLetter(char)) {
        if (replacementMap.hasOwnProperty(char)) {
            return replacementMap[char];
        }
    }

    return char;
}

const btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    const content = resultText.textContent;

    if (content.trim() === '') {
        showNotification('Error: Nada para copiar');
        return;
    }

    navigator.clipboard.writeText(content).then(function() {
        showNotification('¡Copiado correctamente!');
    }, function() {
        showNotification('¡Oops, algo salió mal!');
    });
}

function showNotification(message) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(message);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(function(permission) {
            if (permission === 'granted') {
                new Notification(message);
            }
        });
    }
}
