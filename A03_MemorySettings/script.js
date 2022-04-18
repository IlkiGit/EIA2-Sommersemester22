var MemorySettings;
(function (MemorySettings) {
    /* Variablendeklaration */
    /* type: Date zur Zeiterfassung */
    let startTime;
    /* chosen: boolean = true, zwei Katen sind ausgewählt */
    let chosen = false;
    /* Referenz zur ersten gedrehten Karte */
    let firstCard;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }
    /* Spiel wird erstellt*/
    function createGame() {
        /* Spielfeld wird geleert */
        let playGround = document.querySelector("#playGround");
        playGround.innerHTML = "";
        /* Formularauswertung */
        let formData = new FormData(document.forms[0]);
        /* parseInt-Methode: string zu number */
        /* toString-Methode: type wird als String erfasst */
        let pairQuantity = parseInt(formData.get("pairQuantity").toString());
        let cardSize = formData.get("cardSize") + "px";
        let backgroundColor = formData.get("backgroundColor").toString();
        let cardBackColor = formData.get("cardBackColor").toString();
        let fontColor = formData.get("fontColor").toString();
        let fontFamily = formData.get("fontFamily").toString();
        /* Spielfeldfarbe wird erstellt */
        playGround.style.backgroundColor = backgroundColor;
        /* Kartenpaarwerte werden erstellt*/
        let values = [];
        for (let i = 1; i < pairQuantity + 1; i++) {
            values.push(i);
            values.push(i);
        }
        /* Karten werden gemischt */
        values = shuffle(values);
        /* Karte als Objekt wird erstellt*/
        for (let i = 0; i < values.length; i++) {
            createCard(values[i], cardSize, cardBackColor, fontColor, fontFamily);
        }
        /* Zeitmessung wird gestartet */
        startTime = new Date();
        /* Formular verschwindet und das Spielfeld wird generiert */
        let settings = document.querySelector("#settings");
        settings.classList.add("hidden");
        playGround.classList.remove("hidden");
    }
    /* Karten werden gemischt */
    function shuffle(x) {
        for (let i = x.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [x[i], x[j]] = [x[j], x[i]];
        }
        return x;
    }
    /* Karten werden generiert */
    function createCard(_value, _cardSize, _cardBackColor, _fontColor, _fontFamily) {
        let card = document.createElement("div");
        let playGround = document.querySelector("#playGround");
        /* appendChild-Methode: Kindknoten hinzufügen */
        playGround.appendChild(card);
        card.classList.add("card");
        card.style.height = _cardSize;
        card.style.width = _cardSize;
        card.style.backgroundColor = _cardBackColor;
        card.addEventListener("click", turnCard);
        /* Kartenwert für die Karte */
        let cardValue = document.createElement("span");
        card.appendChild(cardValue);
        cardValue.innerHTML = _value.toString();
        cardValue.classList.add("hidden");
        cardValue.style.color = _fontColor;
        cardValue.style.fontFamily = _fontFamily;
    }
    function turnCard(_event) {
        /* mehr als zwei Karten sollen nicht gewählt werden können */
        if (chosen == true) {
            /* return-Methode: Funktion wird beendet */
            return;
        }
        else {
            /* target: Objekt mit dem Event */
            let cardChoose = _event.target;
            /* erste Karte wird gewählt */
            if (cardChoose == firstCard) {
                return;
            }
            /* zwei Karten werden ausgewählt */
            else {
                /* erste Karte wird ausgewählt */
                let cardClicked = cardChoose.querySelector("span");
                cardClicked.classList.remove("hidden");
                if (firstCard == undefined) {
                    firstCard = cardChoose;
                }
                /* zweite Karte wird ausgewählt */
                else {
                    let firstCardValue = cardClicked.innerHTML;
                    let secondCardClicked = firstCard.querySelector("span");
                    let secondCardValue = secondCardClicked.innerHTML;
                    chosen = true;
                    /* setTimeout-Methode: Aufruf einer Zeitfunktion */
                    setTimeout(function () {
                        /* entgegenwirken für chosen == true */
                        chosen = false;
                        /* dieselben Kartwerte */
                        if (firstCardValue == secondCardValue) {
                            /* Karten verschwinden */
                            cardChoose.classList.add("invisible");
                            firstCard.classList.add("invisible");
                            /* suche alle Elemente der Klasse "card", die die Klasse "invisible" nicht hat */
                            let extantCard = document.querySelector(".card:not(.invisible)");
                            /* Gewinnbedingung */
                            if (extantCard == null) {
                                let endTimeStamp = new Date();
                                let durationInMs = endTimeStamp.getTime() - startTime.getTime();
                                let minutes = Math.floor(durationInMs / 60000);
                                let seconds = Math.floor((durationInMs % 60000) / 1000);
                                alert("Gratulation! Dauer: " + minutes + "min und " + seconds + "s");
                            }
                        }
                        /* unterschiedliche Werte: Karten werden wieder verdeckt */
                        else {
                            cardClicked.classList.add("hidden");
                            secondCardClicked.classList.add("hidden");
                        }
                        /* die Funktion wird dadurch "refresht" */
                        firstCard = undefined;
                    }, 2000);
                }
            }
        }
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=script.js.map