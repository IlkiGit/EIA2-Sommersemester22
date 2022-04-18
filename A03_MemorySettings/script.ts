namespace MemorySettings
{
    /* Variablendeklaration */

    /* type: Date zur Zeiterfassung */

    let startTime: Date;

    /* chosen: boolean = true, zwei Katen sind ausgewählt */

    let chosen: boolean = false;

    /* Referenz zur ersten gedrehten Karte */

    let firstCard: HTMLDivElement;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void 
    {
        document.querySelector("#startButton").addEventListener("click", createGame);
    }

    /* Spiel wird erstellt*/

    function createGame(): void 
    {
        /* Spielfeld wird geleert */

        let playGround: HTMLDivElement = document.querySelector("#playGround");
        playGround.innerHTML = "";

        /* Formularauswertung */

        let formData: FormData = new FormData(document.forms[0]);

        /* parseInt-Methode: string zu number */
        /* toString-Methode: type wird als String erfasst */

        let pairQuantity: number = parseInt(formData.get("pairQuantity").toString());
        let cardSize: string = formData.get("cardSize") + "px";
        let backgroundColor: string = formData.get("backgroundColor").toString();
        let cardBackColor: string = formData.get("cardBackColor").toString();
        let fontColor: string = formData.get("fontColor").toString();
        let fontFamily: string = formData.get("fontFamily").toString();

        /* Spielfeldfarbe wird erstellt */

        playGround.style.backgroundColor = backgroundColor;

        /* Kartenpaarwerte werden erstellt*/

        let values: number[] = [];
        for (let i: number = 1; i < pairQuantity +1; i++) 
        {
            values.push(i);
            values.push(i);
        }

        /* Karten werden gemischt */

        values = shuffle(values);

        /* Karte als Objekt wird erstellt*/

        for (let i: number = 0; i < values.length; i++) 
        {
            createCard(values[i], cardSize, cardBackColor, fontColor, fontFamily);
        }

        /* Zeitmessung wird gestartet */

        startTime = new Date();

        /* Formular verschwindet und das Spielfeld wird generiert */

        let settings: HTMLDivElement = document.querySelector("#settings");
        settings.classList.add("hidden");
        playGround.classList.remove("hidden");
    }

    /* Karten werden gemischt */

    function shuffle(x: number[]): number[] 
    {
        for (let i: number = x.length - 1; i > 0; i--) 
        {
            const j: number = Math.floor(Math.random() * (i + 1));
            [x[i], x[j]] = [x[j], x[i]];
        }
        return x;
    }

    /* Karten werden generiert */

    function createCard(_value: number, _cardSize: string, _cardBackColor: string, _fontColor: string, _fontFamily: string): void 
    {
        let card: HTMLDivElement = document.createElement("div");
        let playGround: HTMLDivElement = document.querySelector("#playGround");

        /* appendChild-Methode: Kindknoten hinzufügen */

        playGround.appendChild(card);
        card.classList.add("card");
        card.style.height = _cardSize;
        card.style.width = _cardSize;
        card.style.backgroundColor = _cardBackColor;
        card.addEventListener("click", turnCard);

        /* Kartenwert für die Karte */

        let cardValue: HTMLSpanElement = document.createElement("span");
        card.appendChild(cardValue);
        cardValue.innerHTML = _value.toString();
        cardValue.classList.add("hidden");
        cardValue.style.color = _fontColor;
        cardValue.style.fontFamily = _fontFamily;
    }

    function turnCard(_event: Event): void 
    {
        /* mehr als zwei Karten sollen nicht gewählt werden können */

        if (chosen == true) 
        {
            /* return-Methode: Funktion wird beendet */

            return;
        }
        else 
        {
            /* target: Objekt mit dem Event */

            let cardChoose: HTMLDivElement = <HTMLDivElement>_event.target;

            /* erste Karte wird gewählt */

            if (cardChoose == firstCard) 
            {
                return;
            } 

            /* zwei Karten werden ausgewählt */

            else 
            {
                /* erste Karte wird ausgewählt */

                let cardClicked: HTMLSpanElement = cardChoose.querySelector("span");
                cardClicked.classList.remove("hidden");
                if (firstCard == undefined) 
                {
                    firstCard = cardChoose;
                } 

                /* zweite Karte wird ausgewählt */

                else 
                {
                    let firstCardValue: string = cardClicked.innerHTML;
                    let secondCardClicked: HTMLSpanElement = firstCard.querySelector("span");
                    let secondCardValue: string = secondCardClicked.innerHTML;
                    chosen = true;

                    /* setTimeout-Methode: Aufruf einer Zeitfunktion */

                    setTimeout(function (): void 
                    {
                        /* entgegenwirken für chosen == true */

                        chosen = false;

                        /* dieselben Kartwerte */

                        if (firstCardValue == secondCardValue) 
                        {
                            /* Karten verschwinden */

                            cardChoose.classList.add("invisible");
                            firstCard.classList.add("invisible");

                            /* suche alle Elemente der Klasse "card", die die Klasse "invisible" nicht hat */
                       
                            let extantCard: HTMLDivElement = document.querySelector(".card:not(.invisible)");

                            /* Gewinnbedingung */

                            if (extantCard == null) 
                            {
                                let endTimeStamp: Date = new Date();
                                let durationInMs: number = endTimeStamp.getTime() - startTime.getTime();
                                let minutes: number = Math.floor(durationInMs / 60000);
                                let seconds: number = Math.floor((durationInMs % 60000) / 1000);
                                alert("Gratulation! Dauer: " + minutes + "min und " + seconds + "s");
                            }
                        }

                        /* unterschiedliche Werte: Karten werden wieder verdeckt */

                        else 
                        {
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
}