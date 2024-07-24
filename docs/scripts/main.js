const orientierungPictures = [
    "./images/automobile-2823855_640.webp", // orientierung 0
    "./images/car-4716031_640.webp", // orientierung 1
    "./images/dodge-charger-1901806_640.webp", // orientierung 2
    "./images/dodge-charger-1901808_640.webp", // orientierung 3
    "./images/race-car-7663135_640.webp", // orientierung 4
    "./images/race-car-8146878_640.webp" // orientierung 5
];

var currentOrientierung = 0;
var counter_value = 0
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

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function displayPreviousOrientierung() {
    currentOrientierung--
    displayOrientierung(currentOrientierung);
}

function displayNextOrientierung() {
    currentOrientierung++
    displayOrientierung(currentOrientierung);
}

function displayOrientierung(tempCurrent) {
    currentOrientierung = tempCurrent
    if (currentOrientierung < 0) currentOrientierung = orientierungPictures.length - 1;
    else if (currentOrientierung >= orientierungPictures.length) currentOrientierung = 0;
    const imgDiv = document.getElementById('orientierungImg');
    imgDiv.src = orientierungPictures[currentOrientierung];
}