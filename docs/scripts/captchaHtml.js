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
        `,
        description: `
            Bei dieser Methode bekommt ein*e Nutzer*in eine
            Sammlung von Bildern vorgesetzt. Ziel ist es nun alle Bilder mit einem bestimmten Merkmal zu
            markieren. Alternativ gibt es auch Ansätze bei denen ein Bild in mehrere Teile aufgeteilt
            wird. In dem Fall besteht die Aufgabe darin, alle Teile die ein bestimmtes Merkmal teilen
            auszuwählen. Der Ansatz des Bilderkennungstests ist die am weitesten verbreitete Methode mit
            vielen Optionen an Anbietern. hCaptcha bietet bei seiner Version die Möglichkeit einen
            Accessibility-Cookie zu setzen, um Barrierearme Versionen von Bilderkennungstests zu
            erhalten oder das CAPTCHA komplett zu umgehen, je nach Implementierung. Google gibt zudem an, die
            Lösungen von reCAPTCHAs Bilderkennungstests zu nutzen um seine eigenen Dienste wie Google
            Maps zu verbessern oder Texte aus Büchern zu digitalisieren.
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
            Gimpy CAPTCHAs sind nach dem ersten ihrer Art
            benannt worden und werden auch als Text-CAPTCHAs bezeichnet. Hierbei wird ein Bild mit
            verzehrten Zeichen angezeigt, sei dies ein Wort oder eine zufällige Abfolge von Zeichen. Um
            das CAPTCHA zu lösen müssen die Zeichen erkannt und korrekt angegeben werden. Solve Media
            verwendet zudem einen leicht anderen Ansatz. Anstelle von
            verzehrten Zeichen, wird Werbung angezeigt, dessen Aussage man eintippen muss. Solve Media
            ist ein Online-Marketing Unternehmen, aber hat den Anreiz seine
            CAPTCHAs/Type-INs sicher gegen Bots zu entwickeln, so dass Werbende nur für Engagement von
            echten Nutzer*innen zahlen.
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
            Die meisten gefundenen Audio CAPTCHAs nutzen diese
            Methode. Hierbei spricht eine Stimme eine Reihe von Zeichen oder Wörtern aus. Das Audio ist
            dabei mit verschiedensten Geräuschen und Effekten verzehrt um es Bots schwerer zu machen das
            Gesprochene zu erkennen. Um das CAPTCHA zu lösen muss der gesprochene Text verstanden und in
            ein Feld eingetippt werden. Studien haben bereits gezeigt, dass diese Methode nicht gut in
            seiner bisherigen Form funktioniert. So lag die Erfolgsquote von Nutzer*innen mit
            Sehbehinderung bei reCAPTCHAs Audio Methode bei 46%.
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
            Ein weiterer Ansatz ist es für ein Audio CAPTCHA
            Geräusche zu verwenden. Zum Beispiel wird Vogelzwitschern abgespielt und der Nutzer oder die
            Nutzerin muss nun erkennen, zu welchem Tier dieses Geräusch gehört. Die Audio Version von
            Arkose Labs nutzt diese Methode in dem sie Aufgaben stellen wie: 'Welche Option ist das
            Geräusch einer Katze?' und dann drei Geräusche hintereinander abspielt.
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
            Die Idee dieses Ansatzes ist es die Bild- und
            Geräuscherkennungs Methode zu kombinieren. In diesem konkreten Ansatz werden Bilder von
            alltäglichen Gegenständen gezeigt, zusammen mit einem dazu gehörigen Geräusch. Der Nutzer
            oder die Nutzerin muss nun den Gegenstand wiedererkennen und die Antwort eingeben.
            Kritisiert wird im zugehörigen Paper, dass die visuellen und auditiven Ansätze von CAPTCHAs
            getrennt von einander entwickelt werden. Wodurch eine qualitative Diskrepanz zwischen den
            beiden implementierten Ansätzen entsteht.
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
            Bei Audio CAPTCHAs mit gesprochenen Zeichen müssen
            sich Nutzer*innen sowohl Zeichen als auch ihre Reihenfolge merken. Dadurch entsteht eine
            hohe mentale Belastung für Nutzer*innen, weshalb die Akronym Methode konzipiert wurde. Bei
            dieser Methode bekommt ein*e Nutzer*in visuell und oder auditiv ein gängiges Sprichwort wie
            zum Beispiel: 'Piece of Cake' gezeigt. Die Aufgabe ist es nun die Anfangsbuchstaben aller
            Wörter anzugeben um das CAPTCHA zu lösen, in diesem Fall also 'POC'. Wichtig ist hierbei,
            dass es sich um gängige Sprichwörter handelt, sodass Nutzer*innen sich keine Zufälligen
            Wörter merken müssen und es zur gleichen Mentalen Belastung wie zuvor kommt.
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
            Eine Methode die sich von allen anderen
            unterscheidet, da sie ein zusätzliches Gerät benötigt. Um die Aufgabe des CAPTCHAs zu
            erhalten muss der Nutzer oder die Nutzerin einen vom CAPTCHA generierten QR-Code einscannen.
            Um das CAPTCHA zu lösen muss der Nutzer oder die Nutzerin den erhaltenen Text auf angegebene
            Weise modifizieren und die Lösung auf der Webseite entsprechend angeben. Da die Aufgabe des
            CAPTCHAs in einem QR-Code steckt, ist es für Bots schwerer an diese heranzukommen und zu
            lösen. Auch können Personen mit Sehbehinderungen ihr QR Code Scanning-to-Speech Programm
            ihrer Wahl nutzen um möglichst einfach die Aufgabe des CAPTCHAs zu erhalten.
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
            Nicht zu verwechseln mit der Gimpy Methode. Bei
            dieser Methode bekommt ein*e Nutzer*in einen Frage im Text Format gestellt, zum Beispiel
            'Wenn Morgen Samstag ist, welcher Tag ist heute?'. Diese Frage muss nun per Text Eingabe
            beantwortet werden. Für Bots liegt das Problem darin die Logik der Frage zu erkennen,
            wodurch die Frage für Nutzer*innen leicht erkennbar bleiben kann. Durch das Text Format ist
            es auch möglich Hilfsmittel wie Screenreader zu verwenden um Nutzer*innen mit Sehbehinderung
            beim Verstehen und Lösen des CAPTCHAs zu unterstützen.
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
            Die Aufgabe bei dieser Methode, ist es, eine
            einfache Mathe Aufgabe zu lösen. Aufgaben können dabei so Simple sein wie '9 + 11 = ?'.
            Auch können Mathe Methoden im Bild Format ähnlich wie bei der Gimpy Methode, als Audio oder
            im Text Format umgesetzt werden.
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
            Ansatz dieses CAPTCHAs ist es die Audio und Mathe
            Methode zu kombinieren. Weder Audio noch Mathe CAPTCHAs sind ein neuer Ansatz. Heutzutage
            existieren kaum noch CAPTCHAs die die Mathe Methode und von denen die es noch gibt verwenden
            die meisten das Textformat. Durch die Kombination beider Ansätze ist es möglich eine Audio
            Datei für die Nutzer*innen abzuspielen, welche nicht mehr verzehrt werden muss. Da der
            Inhalt der Audio Datei verstanden und verarbeitet werden muss, um das CAPTCHA zu lösen. Zu
            dem ist die Mathe Aufgabe im Audio Format schwerer zu erkennen, für Bots, als im Text
            Format.
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
            Bei der Bongo Methode bekommt ein*e Nutzer*in zwei
            Bilder Gruppen gezeigt, die sich in einem Merkmal voneinander unterscheiden. Danach werden
            weitere Bilder angezeigt. Nun muss entschieden werden, welche der Bilder zu einer bestimmten
            Gruppe gehören. Leider konnten kein aktuelles CAPTCHA gefunden werden, welches diese Methode
            noch nutzt. So berichten lediglich noch Archiv Einträge von der Existenz von Bongo CAPTCHAs.
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
            Diese Methode wurde in zwei Ansätzen umgesetzt. Bei
            beiden Ansätzen werden Phrasen aus Dokumenten aus dem Internet gesammelt um mit ihnen die
            Aufgaben des CAPTCHAs zu generieren. Die zu lösende Aufgabe ist entweder das Erkennen eines
            halb Computer generierten Satzes oder das Erkennen einer Gemeinsamkeit von Verschiedenen
            Sätzen. Damit Bots das Internet nicht nach Antworten durchsuchen können, werden die Sätze
            unbrauchbar gemacht. Dies geschieht in dem die Konsonanten der Wörter mit einem
            Ersatzkonsonanten ersetzt werden, einem Konsonanten der anstelle des angestrebten Ziellautes
            genutzt wird. In dem konkreten Ansatz von Yamaguchi et al., wurde die Methode mit verbaler
            Ausgabe implementiert um Menschen mit Sehbehinderung das lösen ebenfalls zu ermöglichen. Ein
            ähnlicher Ansatz ohne Ersatzkonsonanten und dem erkennen von Sätzen mit auffälliger Semantik
            wurde auch in anderen Papern konzipiert, welcher Benutzerfreundlicher sein kann.
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
            Da die Aufgabe bei dieser Methode darin besteht,
            einen (bewegten) Text innerhalb eines Videos zu erkennen wurde diese Methode innerhalb
            dieser Arbeit nach der Gimpy Methode benannt. Wie bei der Gimpy Methode muss der Text
            erkannt und eingegeben werden um das CAPTCHA zu lösen.
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
            Aufgabe dieser Methode ist, das Ausrichten von einem
            Gegenstand oder eines Blickwinkels um das geforderte Ergebnis zu erzielen. Die Ansätze für
            diese Methode können sich dabei untereinander unterscheiden, aber das Grundprinzip bleibt
            gleich: Ein*e Nutzer*in muss die Visuellen Informationen und die Aufgabe verstehen um das
            CAPTCHA zu lösen.
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
            Ein*e Nutzer*in bekommt eine fiktive 3-D Stadtkarte
            angezeigt mit einem eingezeichneten Pfad. An einem Ende befindet sich ein Auto-Symbol und
            Aufgabe ist es nun das andere Ende des Pfades zu Markieren.
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
            Bei dieser Methode wird ein Bild gezeigt dem ein
            Teil fehlt. Aufgabe ist es das fehlende Teil per Drag & Drop zu ergänzen. Dabei gibt es nur
            ein Teil zur Auswahl. Ein Bot wird bei dieser Methode über das Nutzerverhalten erkannt. Ein
            Ansatz für diese Methode ist auch als anstatt frei bewegbar nur über einen Slider bewegt
            werden kann.
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
            Diese Methode ähnelt dem Puzzle-Teil, da auch hier
            Elemente per Drag & Drop bewegt werden. Ein*e Nutzer*in hat dabei mehrere Objekte zur
            Auswahl und einen weiteren Festen. Die Aufgabe ist es, den passenden auswählbaren Gegenstand
            auf den festen zu bewegen.
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
            Bei dieser Methode wertet das CAPTCHA das verhalten
            der Nutzer*innen aus. Ein Ansatz ist es das Verhalten des Nutzers oder der Nutzerin direkt
            auf der Seite zu beobachten. Die andere Möglichkeit wäre mit Cookies zu arbeiten und den
            Verlauf des Nutzers oder der Nutzerin zu untersuchen. Es ist auch Möglich beide Ansätze
            miteinander zu kombinieren für eine bessere Genauigkeit. Gerade letzterer Ansatz könnte je
            nach Implementation nicht mit der DSGVO vereinbar sein. Auch wenn der Ansatz korrekt
            implementiert wird, durchsucht man weiter die Privatsphäre seiner Nutzer*innen und sollte
            entsprechend abgewogen werden. reCAPTCHA v2 verwendet dabei beide Ansätze. Es analysiert das
            Nutzerverhalten auf der Seite, Cookies und überprüft den Verlauf des Nutzers oder der
            Nutzerin. Die gesammelten Daten kommen dabei von anderen Seiten, die ebenfalls Google
            Dienste verwenden. Sollte weiterhin nicht sicher sein, ob der Nutzer oder die Nutzerin
            legitim ist, so gibt reCAPTCHA weitere CAPTCHAs zum lösen. CCM19 (Cookie Consent Manager)
            ist ein Dienst, welcher ergänzend zu reCAPTCHA v2 implementiert wird. So soll der Nutzer
            oder die Nutzerin die Möglichkeit bekommen dem verwenden von Cookies zuzustimmen bevor
            reCAPTCHA geladen wird. So kann reCAPTCHA DSGVO konform genutzt werden. reCAPTCHA v3
            funktioniert ähnlich, nur das es für den Nutzer komplett unsichtbar ist. Es wertet auf einer
            Skala von 0 bis 1 aus ob der Nutzer oder die Nutzerin ein Bot ist, und überlässt dem
            Anbieter oder der Anbieterin der Webseite was er oder sie mit der Information macht.
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
            Gemeint ist bei dieser Methode, dass die Maschine
            des Nutzers oder der Nutzerin ein kryptografisches Rätsel lösen muss um das CAPTCHA zu
            lösen. Die Aufgabe kann dann bei Verdacht auf einen Bot erschwert werden. Das Konzept dieser
            Methode ist es Angriffe aufgrund der benötigten Rechenleistung zu teuer zu machen, als dass
            sie sich lohnen würden.
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
            Diese Methode wurde zwar nicht im laufe einer Arbeit
            gefunden, das Konzept ist aber interessant genug, dass es ebenfalls in dieser Sammlung
            aufgeführt wird. Bei der Honeypot Methode wird ein unsichtbares CAPTCHA auf der Seite
            generiert. Wird nun dieses Unsichtbare CAPTCHA dennoch ausgefüllt, so kann man davon
            ausgehen, dass es sich um einen Bot auf der Seite handelt. Das Unsichtbare CAPTCHA kann
            dabei auch zusammen mit einem sichtbaren CAPTCHA implementiert werden.
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
    nameDiv.textContent = captchaHTML[currentHTML].name;
    captchaDiv.innerHTML = captchaHTML[currentHTML].html;
    descriptionP.textContent = captchaHTML[currentHTML].description;
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