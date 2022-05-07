namespace GenerativeArt {

    window.addEventListener("load", hndLoad);

    /* Variablendeklaration */

    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;
    let values: number[] = new Array();


    function hndLoad(): void 
    {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        art();
    }
    
    /* Mehrere Dreieckszeichnungen */

    function art(): void 
    {
        for (let i: number = 1; i <= 20; i++) 
        {
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

            crc2.strokeStyle = "rgb("+ randomColor() + ", " + randomColor()*0 + ", " + randomColor() +")";
        }
    }

    /* Funktion des Zufallsgenerators */

    function randomNumber(): number 
    {
        return (Math.floor(Math.random() * 800));
    }

    /* Funktion der Zufallslinienstärke */

    function randomStroke(): number 
    {
        return (Math.floor(Math.random() * 20));
    }

    /* Funktion der Zufallsfarben */

    function randomColor(): number 
    {
        return (Math.floor(Math.random() * 255));
    }
}