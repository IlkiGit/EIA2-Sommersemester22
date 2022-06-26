namespace Beach 
{
    window.addEventListener("load", handleLoad);
    
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    // Arrays
    
    let movingClouds: Cloud[] = [];
    let movingShips: Ship[] = [];
    let flyingGulls: Gull[] = [];
    
    export let z: number = 10;
    
    function handleLoad(_event: Event): void 
    {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d")!;

        // Hintergrund
        
        let background: Background = new Background;

        // Wolke: Anzahl und Position

        for (let i: number = 0; i < 5; i++) 
        {
            let clouds: Cloud = new Cloud();
            clouds.x = Math.random() * crc2.canvas.width;
            clouds.y = (Math.random() * 25) + 25;
            clouds.speed = Math.random() + 0.5;
            movingClouds.push(clouds); 
        }
        
        // Schiff: Anzahl und Position
        
        for (let i: number = 0; i < 2; i++) 
        {
            let ship: Ship = new Ship();
            ship.x = Math.random() * crc2.canvas.width;
            ship.y = (Math.random() * 175) + 175; 
            ship.speed = Math.random() + 1;
            movingShips.push(ship); 
        }

        // Möwe: Anzahl und Position
        
        for (let i: number = 0; i < 4; i++)
        {
            let gulls: Gull = new Gull();
            gulls.x = Math.random() * crc2.canvas.width;
            gulls.y = 0;
            gulls.speed = Math.random() + 1;
            flyingGulls.push(gulls);
        }
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
            
        window.setTimeout(animate, 20);
    }

    // Animation
    
    function animate(): void 
    {
        crc2.putImageData(imgData, 0, 0); 
        
        for (let i: number = 0; i < movingClouds.length; i++)
        {
            movingClouds[i].moveForward();
    
            if (movingClouds[i].x > + 1300)
            {
                movingClouds[i].x = canvas.width - 1500;
            }
        }
        drawCloud();
    
        // Schiff-Positionsbedingungen

        for (let i: number = 0; i < movingShips.length; i++) 
        {
            movingShips[i].move();
    
            if (movingShips[i].x > 1300) 
            {
                movingShips[i].x = canvas.width - 1500;
            }
        }
        drawShip();
    
        for (let i: number = 0; i < flyingGulls.length; i++) 
        {
            flyingGulls[i].fly();
            
            if (flyingGulls[i].x > 1300 || flyingGulls[i].y > 800)
            {
                flyingGulls[i].x = canvas.width - 1300;
                flyingGulls[i].y = canvas.height - 800;
            }
        }
        drawGull();

        // 
            
        window.setTimeout(animate, 10);
    }

    // Wolken-Zeichnung
    
    function drawCloud(): void 
    {
        for (let i: number = 0; i < movingClouds.length; i++)
        movingClouds[i].drawCloud();
    }
    
    // Schiff-Zeichnung
    
    function drawShip(): void 
    {
        for (let i: number = 0; i < movingShips.length; i++)
        movingShips[i].drawShip();
    }

    // Möwen-Zeichnung
    
    function drawGull(): void 
    {
        for (let i: number = 0; i < flyingGulls.length; i++)
        flyingGulls[i].drawGull();
    }
}