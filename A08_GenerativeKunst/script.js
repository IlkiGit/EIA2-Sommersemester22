var GenerativeArt;
(function (GenerativeArt) {
    window.addEventListener("load", hndLoad);
    /* Variablendeklaration */
    let canvas;
    let crc2;
    let values = new Array();
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        art();
    }
    /* Mehrere Dreieckszeichnungen */
    function art() {
        for (let i = 1; i <= 20; i++) {
            /* "Zufallsgenerator" */
            values.push(randomNumber());
            /* Beginn der Zeichnung */
            crc2.beginPath();
            /* Positionsveränderung */
            crc2.moveTo(randomNumber(), randomNumber());
            /* Linienzeichnung */
            crc2.lineTo(randomNumber(), randomNumber());
            crc2.lineTo(randomNumber(), randomNumber());
            /* Schließen der Zeichnung (Dreiecks) */
            crc2.closePath();
            /* Konturen */
            crc2.stroke();
            crc2.lineWidth = randomStroke();
            /* https://developer.mozilla.org/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors */
            crc2.strokeStyle = "rgb(" + randomColor() + ", " + randomColor() * 0 + ", " + randomColor() + ")";
        }
    }
    /* Funktion des Zufallsgenerators */
    function randomNumber() {
        return (Math.floor(Math.random() * 800));
    }
    /* Funktion der Zufallslinienstärke */
    function randomStroke() {
        return (Math.floor(Math.random() * 20));
    }
    /* Funktion der Zufallsfarben */
    function randomColor() {
        return (Math.floor(Math.random() * 255));
    }
})(GenerativeArt || (GenerativeArt = {}));
//# sourceMappingURL=script.js.map