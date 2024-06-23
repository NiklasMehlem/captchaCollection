const captchaHTML = [
    { // captcha 0
        name: 'Hier könnte ihr CAPTCHA STEHEN',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Hier könnte ihr CAPTCHA STEHEN</p>
            </div>
        `
    },
    { // captcha 1
        name: 'Bilderkennungstests',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Wählen Sie alle Bilder mit Blumen aus!</p>
                <div class="grid-item" onclick="selectCaptcha()"><img src="./images/animal-3669244_640.webp" alt="Image 1"></div>
                <div class="grid-item" onclick="selectCaptcha()"><img src="./images/animals-2178758_640.webp" alt="Image 2"></div>
                <div class="grid-item" onclick="selectCaptcha()" id="imgTR"><img src="./images/bouquet-142876_640.webp" alt="Image 3"></div>
                <div class="grid-item" onclick="selectCaptcha()"><img src="./images/cat-1455468_640.webp" alt="Image 4"></div>
                <div class="grid-item" onclick="selectCaptcha()"><img src="./images/cat-1647775_640.webp" alt="Image 5"></div>
                <div class="grid-item" onclick="selectCaptcha()" id="imgMR"><img src="./images/orange-flowers-8087066_640.webp" alt="Image 6"></div>
                <div class="grid-item" onclick="selectCaptcha()" id="imgBL"><img src="./images/flowers-5820050_640.webp" alt="Image 7"></div>
                <div class="grid-item" onclick="selectCaptcha()"><img src="./images/dogs-7956516_640.webp" alt="Image 8"></div>
                <div class="grid-item" onclick="selectCaptcha()"><img src="./images/dogs-8613175_640.webp" alt="Image 9"></div>
                <button id="captcha-confirm-button"onclick="checkBilderkennungstests()">Bestätigen</button>
            </div>
        `
    },
    { // captcha 2
        name: 'Gimpy',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben sie den Text aus dem Bild unten ein!</p>
                <img id="textCaptchaImg" src="./images/gimpyCaptchaImg.webp" alt="TextCAPTCHAImage">
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkGimpy()">Bestätigen</button>
            </div>
        `
    },
    { // captcha 3
        name: 'Gesprochene Zeichen / Wörter',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben sie das gesprochene Wort unten ein!</p>
                <audio controls id="audioCaptchaAudio">
                    <source src="./sounds/AudioCaptchaWord.webm" type="audio/webm">
                    Your browser does not support the audio element.
                </audio>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkAudioWord()">Bestätigen</button>
            </div>
        `
    },
    { // captcha 4
        name: 'Geräuscherkennung',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben sie unten ein, welches Tier sie hören!</p>
                <audio controls id="audioCaptchaAudio">
                    <source src="./sounds/bird-voices-7716.mp3" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkSound()">Bestätigen</button>
            </div>
        `
    },
    { // captcha 5
        name: 'Text',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Wenn Morgen Samstag ist, welcher Tag ist heute? Bitte geben sie die Antwort unten ein!</p>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkText()">Bestätigen</button>
            </div>
        `
    },
    { // captcha 6
        name: 'Mathe',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Was ist neun + 11? Bitte geben sie die Antwort unten ein!</p>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkMathe()">Bestätigen</button>
            </div>
        `
    }
];

var currentHTML = 0;
let selectedElements = [];

function openTab(tabName) {
    const eventTab = document.getElementById(tabName)

    // Hide all tab content
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove 'active' class from all tab links
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content
    eventTab.style.display = "block";

    // Add 'active' class to the clicked tab link
    event.currentTarget.classList.add("active");
}

function selectCaptcha() {
    event.currentTarget.classList.toggle('selected');
    if (event.currentTarget.classList.contains('selected')) {
        selectedElements++;
    }
    else {
        selectedElements--;
    }
    console.log(selectedElements)
}

function displayCorrectHTML() { //// Code in Html machen?
    const newParagraph = document.createElement('p');
    newParagraph.classList.add("captcha-correct")
    newParagraph.textContent = 'Richtig!';
    const captchaDiv = document.getElementById('captcha');  // Replace the content of the div with the new paragraph
    captchaDiv.innerHTML = '';
    captchaDiv.appendChild(newParagraph);
}

function displayFalse() {
    alert('Das war leider nicht richtig.');
}

function checkBilderkennungstests() {
    const imgTR = document.getElementById('imgTR');
    const imgMR = document.getElementById('imgMR');
    const imgBL = document.getElementById('imgBL');

    if (imgTR.classList.contains('selected') &&
        imgMR.classList.contains('selected') &&
        imgBL.classList.contains('selected') &&
        selectedElements == 3) {
        displayCorrectHTML();
    } else {
        displayFalse()
    }
}

function checkGimpy() {
    const correctAnswer = "BtC-4";
    const userAnswer = document.getElementById("answerInput").value

    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkAudioWord() {
    const correctAnswer = "language";
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkSound() {
    const correctAnswer = "vogel";
    const correctAnswer2 = "vögel";
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userAnswer === correctAnswer || userAnswer === correctAnswer2) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkText() {
    const correctAnswer = "freitag";
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkMathe() {
    const correctAnswer = "20";
    const correctAnswer2 = "zwanzig";
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    if (userAnswer === correctAnswer || userAnswer === correctAnswer2) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function displayPreviousHTML() {
    currentHTML--
    displayHTML(currentHTML);
}

function displayNextHTML() {
    currentHTML++
    displayHTML(currentHTML);
}

function displayHTML(tempCurrent) {
    currentHTML = tempCurrent
    console.log("currentHTML: " + currentHTML)
    if (currentHTML < 1) currentHTML = captchaHTML.length - 1;
    else if (currentHTML >= captchaHTML.length) currentHTML = 1;
    selectedElements = 0;
    const nameDiv = document.getElementById('captcha-name-text');
    const captchaDiv = document.getElementById('captcha');
    nameDiv.textContent = captchaHTML[currentHTML].name;
    captchaDiv.innerHTML = captchaHTML[currentHTML].html;
}