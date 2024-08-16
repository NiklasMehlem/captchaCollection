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

function checkAkronym() {
    const correctAnswer = "mc";
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkQr() {
    const correctAnswer = "q4C4F4";
    const userAnswer = document.getElementById("answerInput").value

    if (userAnswer === correctAnswer) {
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

function checkAudioMathe() {
    const correctAnswer = "15";
    const correctAnswer2 = "fünfzehn";
    const userAnswer = document.getElementById("answerInput").value.trim().toLowerCase();
    if (userAnswer === correctAnswer || userAnswer === correctAnswer2) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkBongo() {
    const imgTR = document.getElementById('imgTR');
    const imgBL = document.getElementById('imgBL');

    if (imgTR.classList.contains('selected') &&
        imgBL.classList.contains('selected') &&
        selectedElements == 2) {
        displayCorrectHTML();
    } else {
        displayFalse()
    }
}

function checkDokumentCaptcha(answer) {
    const correctAnswer = "A";
    const userAnswer = answer;

    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkVideoGimpy() {
    const correctAnswer = "bVC-9";
    const userAnswer = document.getElementById("answerInput").value

    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkOrientierung() {
    if (currentOrientierung == 5) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}

function checkKarte() {
    displayCorrectHTML();
}

function checkPuzzle(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    if (draggedElement.id === "puzzle-piece") displayCorrectHTML();
}

function checkPaar(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    if (draggedElement.id === "bee-option") displayCorrectHTML();
    else displayFalse();
}

function checkHoneypot() {
    const correctAnswer = ""
    const userAnswer = document.getElementById("hidden-answerInput").value
    if (userAnswer === correctAnswer) {
        displayCorrectHTML();
    } else {
        displayFalse();
    }
}