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

function toggleMenu() {
    var sideMenu = document.querySelector('#menu');
    sideMenu.classList.toggle('hidden');
}

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
}

function toggleHiddenInput() {
    var sideMenu = document.querySelector('#hidden-answerInput');
    sideMenu.classList.toggle('revealed');
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