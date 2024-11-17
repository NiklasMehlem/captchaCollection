const captchaHTML = [ /// img Alts richtig beschriften!
    { // captcha 0 Start Page
        name: 'Effektive CAPTCHAs für Sehbehinderte : Eine Sammlung für Entwickler',
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
        `,
        description: `
            Bei dieser Methode wird einem Nutzer oder einer Nutzerin eine Sammlung von Bildern vorgesetzt. Ziel ist es, alle Bilder 
            mit einem bestimmten Merkmal zu markieren. Alternativ gibt es auch Ansätze, bei denen ein Bild in mehrere Teile aufgeteilt 
            wird. In diesem Fall besteht die Aufgabe darin, alle Teile auszuwählen, die ein bestimmtes Merkmal teilen. Der Ansatz des 
            Bilderkennungstests ist die am weitesten verbreitete Methode mit vielen Optionen an Anbietern. Er wird von 
            <a href="https://developers.google.com/recaptcha/docs/display?hl=de" target="_blank">reCAPTCHA v2</a> verwendet, in Fällen, in denen der 
            erste Teil des CAPTCHAs nicht erfolgreich bestanden wurde. Google gibt zudem an, die Lösungen von reCAPTCHA zu nutzen, um 
            seine eigenen Dienste wie Google Maps zu verbessern oder Texte aus Büchern zu digitalisieren. 
            <a href="https://www.hcaptcha.com" target="_blank">hCaptcha</a> verwendet unter anderem Bilderkennungstests. Zusätzlich wird die Möglichkeit 
            angeboten, einen Accessibility-Cookie zu setzen, um barrierearme Versionen von hCaptcha zu erhalten oder das CAPTCHA komplett zu umgehen, je nach Implementierung. 
            Manche von <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-captcha-and-challenge.html" target="_blank">AWS WAF CAPTCHAs</a> 
            verwendeten visuellen CAPTCHAs nutzen ebenfalls die Methode des Bilderkennungstests.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von vielen Anbietern angeboten.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Manche Anbieter bieten zusätzliche Optionen in ihren Ansätzen an, 
                    um diese visuelle Methode für Personen mit Sehbehinderung lösbar zu machen oder alternativ 
                    auch zu überspringen.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ansätze, bei denen Merkmale auf Teilen eines großen Bildes erkannt 
                    werden müssen, sind nicht nutzerfreundlich. Es kann leicht dazu kommen, dass nur wenige Pixel 
                    des Merkmals sich auf einem Teil befinden, was zur Verwirrung des Nutzers oder der Nutzerin führt.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selbst zu implementieren, benötigt entsprechende Bilder und damit verbunden den notwendigen Speicherplatz.</p>
                </li>
            </ul>
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
        `,
        description: `
            Gimpy CAPTCHAs sind nach dem ersten ihrer Art benannt worden und werden auch als Text-CAPTCHAs bezeichnet. 
            Hierbei wird ein Bild mit verzerrten Zeichen angezeigt, sei dies ein Wort oder eine zufällige Abfolge von 
            Zeichen. Um das CAPTCHA zu lösen, müssen die Zeichen erkannt und korrekt angegeben werden. <a href="https://captcha.com" target="_blank">BotDetect CAPTCHA</a> 
            arbeitet ganz nach diesem Format und nutzt lediglich seine eigenen Bilder, ist aber ansonsten identisch zum ursprünglichen 
            Gimpy-Ansatz.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode kann relativ einfach selbst implementiert werden.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode ist veraltet und kann mit einer Erfolgsrate 
                        von 99,8% von Bots gelöst werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selbst zu implementieren, benötigt entsprechende Bilder und damit verbunden den notwendigen Speicherplatz.</p>
                </li>
            </ul>
        `
    },
    { // captcha 3 Gesprochene Zeichen / Wörter
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
        `,
        description: `
            Die meisten gefundenen Audio CAPTCHAs nutzen diese Methode. Hierbei spricht eine Stimme eine 
            Reihe von Zeichen oder Wörtern aus. Das Audio ist dabei mit verschiedensten Geräuschen und Effekten 
            verzerrt, um es Bots schwerer zu machen, das Gesprochene zu erkennen. Um das CAPTCHA zu lösen, muss 
            der gesprochene Text verstanden und in ein Feld eingetippt werden. Die Audio-Alternativen von 
            <a href="https://developers.google.com/recaptcha/docs/display?hl=de" target="_blank">reCAPTCHA v2</a>, 
            <a href="https://www.hcaptcha.com" target="_blank">hCaptcha</a> und <a href="https://captcha.com" target="_blank">BotDetect CAPTCHA</a> nutzen diese Methode. 
            'BotDetect CAPTCHA' hat zum Beispiel einen Lautsprecher Button, mit dem das CAPTCHA vorgelesen wird. Studien haben bereits gezeigt, dass diese Methode 
            in ihrer bisherigen Form nicht gut funktioniert. 
            So lag die Erfolgsquote von Nutzer*innen mit Sehbehinderung bei CAPTCHAs dieser Methode bei 31-48%.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von vielen Anbietern angeboten.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode lösen.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Hörbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Oft sind die Ansätze so implementiert, dass die gesprochenen Wörter 
                    auf Englisch sind, was es für nicht-englischsprachige Personen besonders schwierig macht, die Wörter zu erkennen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Meist schwer zu verstehen. Beim Ansatz der Gesprochenen Zeichen 
                        muss sich zudem die Reihenfolge gemerkt werden. So haben selbst Sehbehinderte lediglich 
                        eine Erfolgsquote von 46%.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selber zu implementieren benötigt entsprechende 
                        Audio-Dateien und damit verbunden notwendigen Speicherplatz. Mehr Speicherplatz wird 
                        benötigt, falls Audio-Dateien für mehrere Sprachen verwendet werden.</p>
                </li>
            </ul>
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
        `,
        description: `
            Ein weiterer Ansatz besteht darin, für ein Audio CAPTCHA Geräusche zu verwenden. Zum Beispiel wird 
            Vogelzwitschern abgespielt, und der Nutzer oder die Nutzerin muss nun erkennen, zu welchem Tier dieses 
            Geräusch gehört. Die Audio-Version von <a href="https://www.arkoselabs.com/arkose-matchkey/" target="_blank">Arkose Labs</a> nutzt diese Methode, indem sie Aufgaben stellt wie: 
            'Welche Option ist das Geräusch einer Katze?', und dann drei Geräusche hintereinander abspielt.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode lösen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Geräusche sind unabhängig von Sprache und können von Nutzer*innen 
                    unabhängig von ihren Sprachkenntnissen verstanden werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Leicht selbst implementierbar. Zudem gibt es im Internet Seiten, 
                    die Geräusche kostenlos und frei verfügbar anbieten. Es ist weiterhin leichter, frei 
                    verfügbare Audio-Dateien mit Geräuschen zu finden, als solche mit Sprache.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Hörbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selber zu implementieren benötigt entsprechende Audio-Dateien und damit 
                        verbunden notwendigen Speicherplatz.</p>
                </li>
            </ul>
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
        `,
        description: `
            Die Idee dieses Ansatzes besteht darin, die Bild- und Geräuscherkennungsmethode zu kombinieren. 
            Kritisiert wird im zugehörigen Paper, dass die visuellen und auditiven Ansätze von CAPTCHAs getrennt voneinander 
            entwickelt werden, wodurch eine qualitative Diskrepanz zwischen den beiden implementierten Ansätzen entsteht. 
            In diesem konkreten Ansatz werden Bilder von alltäglichen Gegenständen gezeigt, zusammen mit dem dazugehörigen 
            Geräusch. Der Nutzer oder die Nutzerin muss nun den Gegenstand wiedererkennen und die Antwort eingeben.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode lösen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Geräusche sind unabhängig von Sprache und können so von Nutzer*innen 
                    unabhängig von ihren Sprachkenntnissen verstanden werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Leicht selbst implementierbar. Zudem gibt es im Internet Seiten, 
                    die Geräusche kostenlos und frei verfügbar anbieten. Es ist weiterhin leichter, frei 
                    verfügbare Audio-Dateien mit Geräuschen zu finden als solche mit Sprache.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selber zu implementieren benötigt entsprechende 
                        Bilder und Audio-Dateien und damit verbunden notwendigen Speicherplatz.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von keinem Anbieter angeboten und muss daher selbst implementiert werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Da lediglich der Inhalt eines Bilds erkannt werden muss, ist diese Methode leichter von Bots lösbar.</p>
                </li>
            </ul>
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
        `,
        description: `
            Bei Audio-CAPTCHAs mit gesprochenen Zeichen müssen sich die Nutzer*innen sowohl die Zeichen als auch ihre Reihenfolge 
            merken. Dadurch entsteht eine hohe mentale Belastung für die Nutzer*innen, weshalb die Akronym-Methode konzipiert 
            wurde. Bei dieser Methode erhält ein Nutzer oder eine Nutzerin visuell und/oder auditiv ein 
            gängiges Sprichwort, wie zum Beispiel: 'Piece of Cake'. Die Aufgabe besteht darin, die Anfangsbuchstaben aller 
            Wörter anzugeben, um das CAPTCHA zu lösen, in diesem Fall also 'POC'. Wichtig ist hierbei, dass es sich um gängige 
            Sprichwörter handelt, sodass die Nutzer*innen sich keine zufälligen Wörter merken müssen und es nicht zur gleichen 
            mentalen Belastung wie zuvor kommt.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode lösen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Es muss sich deutlich weniger gemerkt werden im Vergleich zur gesprochenen Zeichen-/Wörter-Methode.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Leicht selbst implementierbar. Zudem gibt es im Internetseiten 
                        die Geräusche kostenlos und frei verfügbar anbieten. Es ist weiterhin leichter frei 
                        verfügbare Audio Dateien mit Geräuschen zu finden, als welche mit Sprache.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung und unzureichenden Sprachkenntnissen 
                    könnten Probleme beim Erkennen der Sprüche haben.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Der Ansatz, ihn selbst zu implementieren, erfordert entsprechende 
                    Bilder und Audiodateien sowie den dafür notwendigen Speicherplatz.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von keinem Anbieter angeboten und muss daher selbst implementiert werden.</p>
                </li>
            </ul>
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
        `,
        description: `
            Eine Methode, die sich von allen anderen unterscheidet, da sie ein zusätzliches Gerät benötigt. 
            Um die Aufgabe des CAPTCHAs zu erhalten, muss der Nutzer oder die Nutzerin einen vom CAPTCHA 
            generierten QR-Code einscannen. Um das CAPTCHA zu lösen, muss der Nutzer oder die Nutzerin den 
            erhaltenen Text auf angegebene Weise modifizieren und die Lösung auf der Webseite entsprechend 
            angeben. Da die Aufgabe des CAPTCHAs in einem QR-Code steckt, ist es 
            für Bots schwieriger, an diese heranzukommen und sie zu lösen. Auch können Personen mit 
            Sehbehinderung ihr QR-Code-Scanning-to-Speech-Programm ihrer Wahl nutzen, um möglichst einfach die 
            Aufgabe des CAPTCHAs zu erhalten.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderungen können ihr eigenes 'Scan to Speech'-Programm verwenden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Sicherheit ist sehr hoch, da die Aufgabe im QR-Code enthalten ist.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Es wird ein zusätzliches Gerät benötigt, das mit einer 'Scan to Speech'- oder ähnlichen Anwendung ausgestattet ist.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Diese Lösung ist nicht für Mobilnutzer geeignet, da ein zusätzliches 
                    Mobilgerät mit einer Anwendung wie 'Scan to Speech' oder einer ähnlichen Funktion erforderlich ist.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von keinem Anbieter angeboten und muss daher selbst implementiert werden.</p>
                </li>
            </ul>
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
        `,
        description: `
            Nicht zu verwechseln mit der Gimpy-Methode. Bei dieser Methode erhält ein Nutzer oder eine Nutzerin 
            eine Frage im Textformat, zum Beispiel: 'Wenn morgen Samstag ist, welcher Tag ist heute?'. Diese Frage 
            muss nun per Texteingabe beantwortet werden. Für Bots liegt das Problem darin, die Logik der Frage zu 
            erkennen, wodurch die Frage für Nutzer*innen leicht erkennbar bleiben kann. Durch das Textformat ist 
            es auch möglich, Hilfsmittel wie Screenreader zu verwenden, um Nutzer*innen mit Sehbehinderung beim 
            Verstehen und Lösen des CAPTCHAs zu unterstützen. <a href="https://textcaptcha.com" target="_blank">TextCaptcha</a> nutzt ausschließlich diese Methode 
            für seine CAPTCHAs.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode mithilfe eines Screenreaders oder ähnlicher Hilfsmittel lösen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode ist leicht selbst implementierbar.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Für Personen mit Dyslexie kann die Lösung der Methode schwierig sein.</p>
                </li>
            </ul>
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
        `,
        description: `
            Die Aufgabe bei dieser Methode besteht darin, eine einfache Mathematikaufgabe zu lösen. Aufgaben 
            können dabei so einfach sein wie: '9 + 11 = ?'. Auch können mathematische Aufgaben im Bildformat, 
            ähnlich wie bei der Gimpy-Methode, als Audio oder im Textformat umgesetzt werden. <a href="https://www.codegravity.com/projects/mathguard" target="_blank">MathGuard</a> 
            verwendet in seinem Ansatz das Textformat.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode mithilfe 
                    eines Screenreaders oder ähnlicher Hilfsmittel lösen, sofern sie im entsprechenden Format implementiert ist.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Einfach für die Nutzer*innen zu lösen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Kann auf verschiedene Weise implementiert werden, um den Anforderungen der Nutzer*innen gerecht zu werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode ist leicht selbst implementierbar.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Mathematikaufgaben können von Bots einfach gelöst werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Wird kaum oder nicht länger von Anbietern angeboten.</p>
                </li>
            </ul>
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
        `,
        description: `
            Der Ansatz dieses CAPTCHAs ist es, die Audio- und Mathe-Methode zu kombinieren. 
            Weder Audio- noch Mathe-CAPTCHAs sind ein neuer Ansatz. Wie im Kapitel über die konventionellen 
            CAPTCHAs bereits festgestellt, existieren heutzutage kaum CAPTCHAs, die die Mathe-Methode verwenden. 
            Die meisten gefundenen Mathe-CAPTCHAs verwenden in der Regel Textformat. Durch die Kombination 
            beider Ansätze ist es möglich, eine Audiodatei für die Nutzer*innen abzuspielen, die nicht mehr 
            verzerrt werden muss. Da der Inhalt der Audiodatei verstanden und verarbeitet werden muss, um das 
            CAPTCHA zu lösen. Zudem ist die Mathe-Aufgabe im Audioformat schwerer zu erkennen für Bots als im Textformat.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Mathe Aufgaben können von Bots einfach gelöst werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode ist sicherer als die Mathe-Methode, da Bots den Kontext zusätzlich verstehen müssen.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Aufgaben können aufgrund ihrer Länge verwirrend und schwer verständlich sein.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von keinem Anbieter angeboten und muss daher selbst implementiert werden.</p>
                </li>
            </ul>
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
        `,
        description: `
            Bei der Bongo-Methode wird einem Nutzer oder einer Nutzerin zwei Gruppen von Bildern gezeigt, 
            die sich in einem Merkmal voneinander unterscheiden. 
            Danach werden weitere Bilder angezeigt. Nun muss entschieden werden, welche der Bilder zu einer 
            bestimmten Gruppe gehören.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode ist sicherer als Bilderkennungstests, da zum 
                    Lösen der Aufgabe die Unterschiede zwischen beiden Gruppen erkannt werden müssen. 
                    Am Ende müssen zusätzlich alle Bilder mit den passenden Merkmalen ausgewählt werden.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Aufgabe für sehbehinderte Personen nicht oder nur schwer lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Je nach Aufgabe kann die Methode für Nutzer*innen schwer zu lösen sein.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selbst zu implementieren, erfordert entsprechende Bilder und somit den notwendigen Speicherplatz.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Wird nicht mehr von Anbietern angeboten.</p>
                </li>
            </ul>
        `
    },
    { // captcha Dokument
        name: 'Dokument',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Welcher der folgenden Sätze ist komisch?</p>
                <audio controls id="audioCaptchaAudio">
                    <source src="./sounds/luvvoice.com-dokument.mp3" type="audio/mp3">
                    Your browser does not support the audio element.
                </audio>
                <button class='captcha-answer-button' onclick="checkDokumentCaptcha('A')">A</button>
                <button class='captcha-answer-button' onclick="checkDokumentCaptcha('B')">B</button>
                <button class='captcha-answer-button' onclick="checkDokumentCaptcha('C')">C</button>
            </div>
        `,
        description: `
            Diese Methode wurde in zwei Ansätzen umgesetzt. Bei beiden Ansätzen werden Phrasen aus 
            Dokumenten im Internet gesammelt, um mit ihnen die Aufgaben des CAPTCHAs zu generieren. 
            Die zu lösende Aufgabe ist entweder das Erkennen eines halb computer-generierten Satzes 
            oder das Erkennen einer Gemeinsamkeit von verschiedenen Sätzen. 
            Damit Bots das Internet nicht nach Antworten durchsuchen können, werden die Sätze unbrauchbar 
            gemacht. Dies geschieht, indem die Konsonanten der Wörter mit einem Ersatzkonsonanten ersetzt 
            werden, einem Konsonanten, der anstelle des angestrebten Ziellautes genutzt wird. 
            In dem konkreten Ansatz von Yamaguchi et al. wurde die Methode mit verbaler Ausgabe 
            implementiert, um Menschen mit Sehbehinderung das Lösen ebenfalls zu ermöglichen. Ein ähnlicher 
            Ansatz ohne Ersatzkonsonanten und mit dem Erkennen von Sätzen mit auffälliger Semantik wurde auch 
            in anderen Arbeiten konzipiert, der benutzerfreundlicher sein kann.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung können diese Methode lösen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer müssen sich keine langen Zeichenfolgen merken.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen mit Sehbehinderung und nicht ausreichenden Sprachkenntnissen könnten Schwierigkeiten beim Erkennen der Sätze haben.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Für jede Sprache werden eigene Audio-Dateien benötigt.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Umsetzung des Ansatzes erfordert entsprechende Audio-Dateien und den damit verbundenen notwendigen Speicherplatz.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von keinem Anbieter angeboten und muss daher selbst implementiert werden.</p>
                </li>
            </ul>
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
        `,
        description: `
            Da die Aufgabe bei dieser Methode darin besteht, einen (bewegten) Text innerhalb eines Videos zu 
            erkennen, wurde diese Methode innerhalb dieser Arbeit nach der Gimpy-Methode benannt. Wie bei der 
            Gimpy-Methode muss der Text erkannt und eingegeben werden, um das CAPTCHA zu lösen.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Video-CAPTCHAs sind sicherer als Gimpy-CAPTCHAs, da es für Bots schwieriger ist, die Zeichen aus einem Video herauszufiltern.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne Implementierung von Ausnahmen, nicht oder nur schwer mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Lösung der CAPTCHA-Methode kann von Nutzer*innen als schwierig und stressig empfunden werden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Selbstimplementierung des Ansatzes erfordert entsprechende Videos sowie den dazu notwendigen Speicherplatz.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Wird nicht mehr von Anbietern angeboten.</p>
                </li>
            </ul>
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
        `,
        description: `
            Die Aufgabe dieser Methode besteht darin, einen Gegenstand oder einen Blickwinkel so 
            auszurichten, dass das geforderte Ergebnis erzielt wird. Die Ansätze für diese Methode 
            können sich dabei untereinander unterscheiden, aber das Grundprinzip bleibt gleich: Ein 
            Nutzer oder eine Nutzerin muss die visuellen Informationen und die Aufgabe verstehen, um 
            das CAPTCHA zu lösen. Der Ansatz von <a href="https://www.arkoselabs.com/arkose-matchkey/" target="_blank">Arkose Labs</a> zeigt zwei Bilder. Die Aufgabe 
            besteht darin, den Gegenstand im zweiten Bild so auszurichten, dass er genau wie der 
            Gegenstand aus dem ersten Bild positioniert ist.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Sicherer als Gimpy CAPTCHAs, da der Kontext der Aufgabe zusätzlich zum Inhalt des Bildes verstanden werden muss.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Wenn die Ausrichtungen der Objekte nicht klar erkennbar sind, kann es leicht zur Verwirrung der Nutzer*innen kommen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selbst zu implementieren, benötigt entsprechende Bilder und damit verbunden den notwendigen Speicherplatz.</p>
                </li>
            </ul>
        `
    },
    { // captcha - 15 - Karten
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
        `,
        description: `
            Dies ist eine von 
            <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-captcha-and-challenge.html" target="_blank">AWS WAF CAPTCHAs</a> 
            verwendete visuelle Methode. Eine Nutzerin bekommt 
            eine fiktive 3D-Stadtkarte angezeigt, auf der ein eingezeichneter Pfad dargestellt ist. An 
            einem Ende befindet sich ein Auto-Symbol, und die Aufgabe besteht darin, das andere Ende des 
            Pfades zu markieren.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Sicherer als Gimpy CAPTCHAs, da der Kontext der Aufgabe zusätzlich zum Inhalt des Bildes verstanden werden muss.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Pfade, die an Stellen nur wenige Pixel breit sind, können leicht für Verwirrung bei Nutzer*innen sorgen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Der Ansatz, ihn selbst zu implementieren, ist aufwendiger im Vergleich zu anderen Methoden.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Wird ausschließlich von AWS angeboten.</p>
                </li>
            </ul>
        `
    },
    { // captcha Puzzleteil
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
        `,
        description: `
            Bei dieser Methode wird ein Bild gezeigt, dem ein Teil fehlt. Die Aufgabe besteht darin, 
            das fehlende Teil per Drag & Drop zu ergänzen. Dabei gibt es nur ein Teil zur Auswahl. 
            Ein Bot wird bei dieser Methode über das Nutzerverhalten erkannt. Verwendet wird diese 
            Methode von <a href="https://www.capy.me/products/puzzle_captcha/" target="_blank">Capy Puzzle CAPTCHA</a>.
            <br>
            Ein Ansatz für diese Methode ist auch als 'Slider CAPTCHA' bekannt. Dieser Ansatz unterscheidet 
            sich darin, dass das Puzzleteil anstatt frei bewegbar nur über einen Slider bewegt werden kann.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Sicherer als Gimpy CAPTCHAs, da der Kontext der Aufgabe zusätzlich zum Inhalt des Bildes verstanden werden muss.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen können genervt werden, wenn sie die offene Stelle übersehen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Der Ansatz, ihn selbst zu implementieren, ist aufwendiger im Vergleich zu anderen Methoden.</p>
                </li>
            </ul>
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
                <div class="grid-item-solid grid-container-right">
                    <img
                        src="./images/orange-flowers-8087066_640.webp" alt="Blumen" ondrop="checkPaar(event)"
                        ondragover="allowDrop(event)">
                </div>
            </div>
        `,
        description: `
            Diese Methode ähnelt dem Puzzle-Teil, da auch hier Elemente per Drag & Drop bewegt werden. 
            Ein Nutzer oder eine Nutzerin hat dabei mehrere Objekte zur Auswahl und ein weiteres festes 
            Objekt. Die Aufgabe besteht darin, den passenden auswählbaren Gegenstand auf das feste Objekt 
            zu bewegen.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Sicherer als Gimpy CAPTCHAs, da der Kontext der Aufgabe zusätzlich zum Inhalt des Bildes verstanden werden muss.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selbst zu implementieren, ist einfacher im Vergleich zu anderen Methoden.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Ohne die Implementierung von Ausnahmen ist die Methode nicht oder nur schwer von Personen mit Sehbehinderung lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Den Ansatz selbst zu implementieren, benötigt entsprechende Bilder und damit verbunden den notwendigen Speicherplatz.</p>
                </li>
            </ul>
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
        `,
        description: `
            Bei dieser Methode wertet das CAPTCHA das Verhalten der Nutzer*innen aus. 
            Ein Ansatz besteht darin, das Verhalten des Nutzers oder der Nutzerin direkt auf der 
            Seite zu beobachten. Die andere Möglichkeit wäre, mit Cookies zu arbeiten und den Verlauf 
            des Nutzers oder der Nutzerin zu untersuchen. Es ist auch möglich, beide Ansätze miteinander 
            zu kombinieren, um eine bessere Genauigkeit zu erzielen. Gerade letzterer Ansatz könnte je 
            nach Implementierung nicht mit der DSGVO vereinbar sein. Auch wenn der Ansatz korrekt 
            implementiert wird, greift man weiter in die Privatsphäre seiner Nutzer*innen ein, was 
            entsprechend abgewogen werden sollte. <a href="https://developers.google.com/recaptcha/docs/display?hl=de" target="_blank">reCAPTCHA v2</a> verwendet dabei beide Ansätze. 
            Es analysiert das Nutzerverhalten auf der Seite, nutzt Cookies und überprüft den Verlauf 
            des Nutzers oder der Nutzerin. Die gesammelten Daten stammen 
            dabei von anderen Seiten, die ebenfalls Google-Dienste verwenden. Sollte weiterhin 
            unklar sein, ob der Nutzer oder die Nutzerin legitim ist, so bietet reCAPTCHA weitere CAPTCHAs zum Lösen an.
            <br>
            <a href="https://www.ccm19.de" target="_blank">CCM19</a> (Cookie Consent Manager)  ist ein Dienst, der ergänzend zu reCAPTCHA v2 
            implementiert wird. So soll der Nutzer oder die Nutzerin die Möglichkeit erhalten, dem 
            Verwenden von Cookies zuzustimmen, bevor reCAPTCHA geladen wird. Dadurch kann reCAPTCHA 
            DSGVO-konform genutzt werden. <a href="https://developers.google.com/recaptcha?hl=de" target="_blank">reCAPTCHA v3</a> funktioniert ähnlich, nur dass es für 
            den Nutzer komplett unsichtbar ist. Es wertet auf einer Skala von 0 bis 1 aus, ob der Nutzer 
            oder die Nutzerin ein Bot ist und überlässt dem Anbieter oder der Anbieterin der Webseite, 
            was er oder sie mit der Information macht.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Nutzer*innen müssen lediglich eine Checkbox anklicken, 
                    was relativ unabhängig von den Behinderungen eines Nutzers oder einer Nutzerin lösbar ist.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Der reCAPTCHA-Ansatz ist bis zu 10.000 Aufrufen pro Monat kostenlos zu implementieren.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Je nach Implementierung kann es zu einem Verstoß gegen die DSGVO kommen.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Es wird ein zusätzlicher kostenpflichtiger Dienst benötigt, um sicher DSGVO-konform zu sein.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Der Browserverlauf der Nutzer*innen wird durchleuchtet.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die selbstständige Implementierung des Ansatzes ist sehr aufwendig und schwierig.</p>
                </li>
            </ul>
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
        `,
        description: `
            Bei dieser Methode ist gemeint, dass die Maschine des Nutzers oder der Nutzerin ein 
            kryptografisches Rätsel lösen muss, um das CAPTCHA zu bewältigen. Die Aufgabe kann 
            dann bei Verdacht auf einen Bot erschwert werden. Das Konzept dieser Methode besteht 
            darin, Angriffe aufgrund der benötigten Rechenleistung so teuer zu machen, dass sie 
            sich nicht lohnen würden. <a href="https://friendlycaptcha.com/de/" target="_blank">Friendly Captcha</a> 
            und <a href="https://www.captcha.eu/de/" target="_blank">Captcha.eu</a> verwenden 
            beide diese Methode und geben an, diese DSGVO-konform umzusetzen.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Unabhängig von den Behinderungen eines Nutzers oder einer Nutzerin ist der Ansatz immer lösbar.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von mehreren Anbietern angeboten.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die meisten Ansätze sind relativ teuer.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die selbstständige Implementierung des Ansatzes ist sehr aufwendig.</p>
                </li>
            </ul>
        `
    },
    { // captcha - 20 - Honeypot
        name: 'Honeypot',
        html: `
            <div class="grid-container">
                <p id="captcha-container-header">Bitte füllen sie alle Felder aus!</p>
                <label class="inputLabel" for="input1">Vorname:</label>
                <input type="text" id="input1" class="captchaInput" name="input1">
                <label class="inputLabel" for="input2">Nachname:</label>
                <input type="text" id="input2" class="captchaInput" name="input2">
                <input type="text" id="hidden-answerInput" placeholder="7+13">
                <button id='bot-vision-button' onclick="toggleHiddenInput()">Zeig was der Bot sieht</button>
                <button id='captcha-confirm-button' onclick="checkHoneypot()">Bestätigen</button>
            </div>
        `,
        description: `
            Diese Methode wurde zwar nicht im Laufe einer Arbeit gefunden, das Konzept ist 
            aber interessant genug, dass es ebenfalls in dieser Sammlung aufgeführt wird. Bei 
            der Honeypot-Methode wird ein unsichtbares CAPTCHA auf der Seite generiert. 
            Wird nun dieses unsichtbare CAPTCHA dennoch ausgefüllt, so kann man davon ausgehen, dass es 
            sich um einen Bot auf der Seite handelt. Das unsichtbare CAPTCHA kann dabei auch zusammen mit 
            einem sichtbaren CAPTCHA implementiert werden.
        `,
        pro: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Unabhängig von den Behinderungen eines Nutzers oder einer Nutzerin ist die Lösung immer möglich.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode ist leicht selbst implementierbar.</p>
                </li>
            </ul>
        `,
        contra: `
            <ul class="tabcontent-ul">
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Bots, die das unsichtbare CAPTCHA ignorieren, werden ohne weitere CAPTCHAs nicht aufgehalten.</p>
                </li>
                <li class="tabcontent-li">
                    <p class="tabcontent-text">Die Methode wird von keinem Anbieter angeboten und muss daher selbst implementiert werden.</p>
                </li>
            </ul>
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
    const descriptionP = document.getElementById('description');
    const proDiv = document.getElementById('proTab');
    const contraDiv = document.getElementById('contraTab');
    nameDiv.textContent = captchaHTML[currentHTML].name;
    captchaDiv.innerHTML = captchaHTML[currentHTML].html;
    descriptionP.innerHTML = captchaHTML[currentHTML].description;
    proDiv.innerHTML = captchaHTML[currentHTML].pro;
    contraDiv.innerHTML = captchaHTML[currentHTML].contra;
    if (captchaHTML[currentHTML].name == 'Kryptografie') { //aktiviert Kryptographie CAPTCHA
        var progress = document.querySelector('.progressbar .progress');

        function counterInit(fValue, lValue) {
            counter_value++;

            if (counter_value >= fValue && counter_value <= lValue) {
                progress.style.width = counter_value + '%';
                setTimeout(function () { counterInit(fValue, lValue); }, 50);
            } else if (document.getElementById('captcha-name-text').textContent == 'Kryptografie') {
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