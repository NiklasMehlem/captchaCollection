const captchaHTML = [ /// img Alts richtig beschriften!
    { // captcha 0 Start Page
        name: 'Hier könnte ihr CAPTCHA STEHEN',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Hier könnte ihr CAPTCHA STEHEN</p>
            </div>
        `
    },
    { // captcha 1 Bilderkennungstests
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
    { // captcha 2 Gimpy
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
    { // captcha 3 Gesprochene Zeichen/ Wörter
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
    { // captcha 4 Geräuscherkennung
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
    { // captcha - 5 - Pix-Audio
        name: 'Pix-Audio',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben sie unten ein, um welches Tier es sich hier handelt!</p>
                <div class="grid-item-solid"><img src="./images/birds-6525352_640.webp" alt="refrenceImg">
                </div>
                <audio controls id="pixAudioCaptchaAudio">
                    <source src="./sounds/bird-voices-7716.mp3" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkSound()">Bestätigen</button>
            </div>
        `
    },
    { // captcha 6 Akronym
        name: 'Akronym',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben sie die Anfangsbuchstaben aller Wörter des Spruches unten ein!</p>
                <img id="textCaptchaImg" src="./images/acronymCaptchaImg.webp" alt="TextCAPTCHAImage">
                <audio controls id="audioCaptchaAudio">
                    <source src="./sounds/merry-christmas-38071.mp3" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkAkronym()">Bestätigen</button>
            </div>
        `
    },
    { // captcha QR-Code
        name: 'QR-Code',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte scannen sie den QR-Code, um ihre Aufgabe zu erfahren!
                </p>
                <img id="qrCaptchaImg" src="./images/qrCode.svg" alt="QR Code">
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkQr()">Bestätigen</button>
            </div>
        `
    },
    { // captcha Text
        name: 'Text',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Wenn Morgen Samstag ist, welcher Tag ist heute?<br>Bitte geben sie die Antwort unten ein!</p>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkText()">Bestätigen</button>
            </div>
        `
    },
    { // captcha Mathe
        name: 'Mathe',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Was ist neun + 11?<br>Bitte geben sie die Antwort unten ein!</p>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkMathe()">Bestätigen</button>
            </div>
        `
    },
    { // captcha - 10 - Audio-Mathe
        name: 'Audio-Mathe',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben sie die Antwort unten ein!</p>
                <audio controls id="audioCaptchaAudio" autoplay>
                    <source src="./sounds/luvvoice.com-audioMathe.mp3" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkAudioMathe()">Bestätigen</button>
            </div>
        `
    },
    { // captcha Bongo
        name: 'Bongo',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Wählen Sie unten alle Bilder aus, die zur rechten Gruppe
                    gehören!
                </p>
                <div class="inner-grid-container">
                    <div class="inner-grid-item"><img src="./images/cat-1455468_640.webp" alt="Image 4">
                    </div>
                    <div class="inner-grid-item"><img src="./images/cat-1647775_640.webp" alt="Image 5">
                    </div>
                    <div class="inner-grid-item"><img src="./images/animal-3669244_640.webp" alt="Image 1">
                    </div>
                </div>
                <div class="inner-grid-container grid-container-right">
                    <div class="inner-grid-item"><img src="./images/animals-2178758_640.webp" alt="Image 2">
                    </div>
                    <div class="inner-grid-item"><img src="./images/dogs-7956516_640.webp" alt="Image 8">
                    </div>
                    <div class="inner-grid-item"><img src="./images/dogs-8613175_640.webp" alt="Image 9">
                    </div>
                </div>
                <div class="inner-2-collum-grid-container">
                    <div class="grid-item grid-container-end" onclick="selectCaptcha()"><img
                            src="./images/raccoons-8282171_640.webp" alt="Image 3"></div>
                    <div class="grid-item grid-container-start" onclick="selectCaptcha()" id="imgTR"><img
                            src="./images/dog-5357794_640.webp" alt="Image 3"></div>
                    <div class="grid-item grid-container-end" onclick="selectCaptcha()" id="imgBL"><img
                            src="./images/dogs-2936442_640.webp" alt="Image 3"></div>
                    <div class="grid-item grid-container-start" onclick="selectCaptcha()"><img
                            src="./images/cat-5940147_640.webp" alt="Image 3"></div>
                </div>
                <button id='captcha-confirm-button' onclick="checkBongo()">Bestätigen</button>
            </div>
        `
    },
    { // captcha Video Gimpy
        name: 'Video Gimpy',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte geben Sie den ROTEN Text aus dem Video unten ein!<br>
                    (Das Video kann einen Moment zum Laden benötigen.)</p>
                <video autoplay muted loop id="videoCaptchaVideo">
                    <source src="./videos/FullVideoCaptchaLight.webm" type="video/webm">
                    Your browser does not support the audio element.
                </video>
                <input type="text" id="answerInput" placeholder="Bitte schreiben sie hier ihre Antwort">
                <button id='captcha-confirm-button' onclick="checkVideoGimpy()">Bestätigen</button>
            </div>
        `
    },
    { // captcha Orientierung
        name: 'Orientierung',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Wählen Sie das Bild auf der rechten Seite aus, dessen
                    Objekt die gleiche Orientierung wie das Objekt im linken Bild hat!
                </p>
                <div class="grid-item-solid"><img src="./images/dog-5357794_640.webp" alt="refrenceImg">
                </div>
                <div class="grid-container grid-container-right">
                    <svg class="inner-grid-button grid-container-center"
                        onclick="displayPreviousOrientierung()" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 64">
                        <polyline points="24,8 0,32 24,56" />
                    </svg>
                    <div class="grid-item-solid"><img id="orientierungImg"
                            src="./images/automobile-2823855_640.webp" alt="orientierungImg">
                    </div>
                    <svg class="inner-grid-button grid-container-center"
                        onclick="displayNextOrientierung()" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 64">
                        <polyline points="0,8 24,32 0,56" />
                    </svg>
                </div>
                <button id='captcha-confirm-button' onclick="checkOrientierung()">Bestätigen</button>
            </div>
        `
    },
    { // captcha Karten
        name: 'Karten',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Klicken Sie auf das Ende des Pfades!</p>
                <img id="kartenCaptchaImg" src="./images/kartenCaptchaImg.webp" alt="Karten Captcha Bild"
                    usemap="#image-map">
                <map name="image-map">
                    <area shape="circle" coords="225,255,16" onclick="checkKarte()">
                </map>
            </div>
        `
    },
    { // captcha - 15 - Puzzleteil
        name: 'Puzzleteil',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Ziehen Sie, das Puzzleteil an die richtige Stelle!</p>
                <div draggable="true" ondragstart="dragStart(event)"
                    class="grid-container-center grid-container-middle"><img src="./images/puzzlePiece.webp"
                        alt="Puzzle Piece" id="puzzle-piece">
                </div>
                <img id="kartenCaptchaImg" src="./images/puzzleImg.webp" alt="Karten Captcha Bild"
                    usemap="#image-map">
                <map name="image-map">
                    <area shape="circle" coords="47,232,24" ondrop="checkPuzzle(event)"
                        ondragover="allowDrop(event)">
                </map>
            </div>
        `
    },
    { // captcha Paar
        name: 'Paar',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Ziehen Sie das linke Bild, das zum rechten Bild passt, auf das
                    rechte Bild!</p>
                <div class="inner-grid-container">
                    <div draggable="true" ondragstart="dragStart(event)" class="inner-grid-item"><img
                            src="./images/cat-5940147_640.webp" alt="Katze" id="cat-option">
                    </div>
                    <div draggable="true" ondragstart="dragStart(event)" class="inner-grid-item"><img
                            src="./images/dodge-charger-1901806_640.webp" alt="Auto" id="car-option">
                    </div>
                    <div draggable="true" ondragstart="dragStart(event)" class="inner-grid-item"><img
                            src="./images/bee-1276148_640.webp" alt="Biene" id="bee-option">
                    </div>
                </div>
                <img class="grid-item-solid grid-container-right"
                    src="./images/orange-flowers-8087066_640.webp" alt="Blumen" ondrop="checkPaar(event)"
                    ondragover="allowDrop(event)">
            </div>
        `
    },
    { // captcha Nutzerverhalten
        name: 'Nutzerverhalten',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header"> <input id='nutzerverhaltenCheckbox'
                    class="grid-container-center grid-container-middle" type='checkbox'
                    onclick="displayCorrectHTML()" /> <label for="nutzerverhaltenCheckbox"> Bestätigen
                    sie, dass sie kein Bot sind!</label>
                </p>
            </div>
        `
    },
    { // captcha Kryptografie
        name: 'Kryptografie',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Es wird überprüft ob sie ein Bot sind...</p>
                <div class="progressbar">
                    <span class="progress"></span>
                </div>
            </div>
        `
    }
];

var currentHTML = 0;

function displayHTML(tempCurrent) {
    if (tempCurrent != null) {
        var currentName = tempCurrent;
        for (currentHTML = 1; currentHTML < captchaHTML.length; currentHTML++) {
            if (currentName === captchaHTML[currentHTML].name) break;
        }
    }

    if (currentHTML < 1) currentHTML = captchaHTML.length - 1;
    else if (currentHTML >= captchaHTML.length) currentHTML = 1;
    selectedElements = 0;
    currentOrientierung = 0;
    counter_value = 0;
    const nameDiv = document.getElementById('captcha-name-text');
    const captchaDiv = document.getElementById('captcha');
    nameDiv.textContent = captchaHTML[currentHTML].name;
    captchaDiv.innerHTML = captchaHTML[currentHTML].html;
    if (captchaHTML[currentHTML].name == 'Kryptografie') {
        var progress = document.querySelector('.progressbar .progress');

        function counterInit(fValue, lValue) {
            counter_value++;

            if (counter_value >= fValue && counter_value <= lValue) {
                progress.style.width = counter_value + '%';
                setTimeout(function () { counterInit(fValue, lValue); }, 50);
            } else {
                displayCorrectHTML();
            }
        }
        counterInit(0, 100);
    }
}

function displayPreviousHTML() {
    currentHTML--
    displayHTML();
}

function displayNextHTML() {
    currentHTML++
    displayHTML();
}