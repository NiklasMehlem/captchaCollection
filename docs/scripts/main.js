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

let selectedElements = [];

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

function checkSelection() {
    const imgTR = document.getElementById('imgTR');
    const imgMR = document.getElementById('imgMR');
    const imgBL = document.getElementById('imgBL');

    if (imgTR.classList.contains('selected') &&
        imgMR.classList.contains('selected') &&
        imgBL.classList.contains('selected') &&
        selectedElements == 3) {
            const captchaDiv = document.getElementById('captcha');
            const newParagraph = document.createElement('p');
            newParagraph.classList.add("captcha-correct")
            newParagraph.textContent = 'Richtig!';
            
            // Replace the content of the div with the new paragraph
            captchaDiv.innerHTML = '';
            captchaDiv.appendChild(newParagraph);
    } else {
        alert('Das war leider nicht richtig.');
    }
}