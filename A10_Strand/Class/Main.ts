namespace Beach 
{
    interface Vector 
    {
        x: number;
        y: number;
    }

    // Array

    let moveables: Moveable[] = [];

    export let imageData: ImageData;
    export let crc2: CanvasRenderingContext2D;

    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void 
    {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        
        if (!canvas)
        {
            return;
        }
        
        crc2 = canvas.getContext("2d")!;

        // Hintergrund

        let background: Background = new Background;
        
        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        // Objekterschaffung

        createShip();
        createClouds();
        createGulls();

        // Animationszeit

        window.setInterval(update, 20);
    }

    // Schiff

    function createShip(): void 
    {
        for (let i: number = 0; i < 2; i++) 
        {
            let ship: Ship = new Ship();
            moveables.push(ship);
        }
    }

    // Wolken

    function createClouds(): void 
    {
        for (let i: number = 0; i < 10; i++)
        {
            let cloud: Cloud = new Cloud();
            moveables.push(cloud);
        }
    }

    // Möwe
    
    function createGulls(): void 
    {
        for (let i: number = 0; i < 12; i++) 
        {
            let gull: Gull = new Gull();
            moveables.push(gull);
        }
    }

    // Animation

    function update(): void 
    {
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let moveable of moveables) 
        {
            moveable.move(1/50);
            moveable.draw();
        }
    }
}