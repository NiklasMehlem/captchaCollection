/* Hier befinden sich sowohl alle funktionen die für das Interagieren mit den CAPTCHAs und der Seite benötigt werden. */

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
var selectedElements = [];

/* Schaltet das Seiten Menü an oder aus */
function toggleMenu() {
    var sideMenu = document.querySelector('#menu');
    sideMenu.classList.toggle('hidden');
}

/* Code für das auswählen der Tabs und das anzeigen ihres Inhalts */
function openTab(tabName) {
    const eventTab = document.getElementById(tabName)

    /* Entfernt den Inhalt des aktuellen Tabs */
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    /* Der vorherige Tab wird nicht mehr als ausgewählt angezeigt */
    var tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    /* Zeigt den Inhalt des gewählten Tabs */
    eventTab.style.display = "block";

    /* Der aktuelle Tab wird als ausgewählt angezeigt */
    event.currentTarget.classList.add("active");
}

/* Sorgt dafür das ein Objekt ausgewählt werden kann */
function selectCaptcha() {
    event.currentTarget.classList.toggle('selected');
    if (event.currentTarget.classList.contains('selected')) {
        selectedElements++;
    }
    else {
        selectedElements--;
    }
}

/* Zeigt beim Honeypot-CAPTCHA die versteckte Aufgabe an */
function toggleHiddenInput() {
    var sideMenu = document.querySelector('#hidden-answerInput');
    sideMenu.classList.toggle('revealed');
}

/* Zeigt ein Element um zu bestätigen, dass die richtige Eingabe getätigt wurde. */
function displayCorrectHTML() { // Code könnte vl in HTML geschrieben werden als optimierung
    const newParagraph = document.createElement('p');
    newParagraph.classList.add("captcha-correct")
    newParagraph.textContent = 'Richtig!';
    const captchaDiv = document.getElementById('captcha');
    captchaDiv.innerHTML = '';
    captchaDiv.appendChild(newParagraph);
}

/* Pop-up um zu zeigen, dass eine falsche Eingabe getätigt wurde. */
function displayFalse() {
    alert('Das war leider nicht richtig.');
}

/* funktionen die für Drag und Drop interaktionen benötigt werden */
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

/* Ermöglicht zwischen den verschiedenen Orientierungne bei der Orientierungs-Methode durchzurotieren */
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