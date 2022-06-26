namespace Beach 
{
    export class Gull
    {
        // Variablendeklaration

        x: number;
        y: number;
        speed: number;

        // Konstruktor
        
        constructor()
        {
            this.drawGull();
        }

        // Animation

        update(): void 
        {
            this.drawGull();
            this.fly();
        }

        // Zeichnung
        
        drawGull(): void 
        {
            crc2.save();
            
            crc2.beginPath();
            crc2.bezierCurveTo(this.x + 0, this.y + 50, this.x + 50, this.y + 25, this.x + 75, this.y + 50);
            crc2.bezierCurveTo(this.x + 75, this.y + 50, this.x + 125, this.y + 25, this.x + 150, this.y + 50);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

            crc2.restore();
        }

        // Bewegung

        fly(): void 
        {
            this.x += Math.random() * 1 + 2;
            this.y += Math.random() * 1 + 2;

            // Positons-Bedingungen
    
            for (let i: number = 0; i < z; i++) 
            {
                if (this.x < 0) 
                {
                    this.x += crc2.canvas.width;
                }

                if (this.y < 0) 
                {
                    this.y += crc2.canvas.height;
                } 

                if (this.x >= crc2.canvas.width) 
                {
                    this.x -= crc2.canvas.width;
                }
                
                if (this.y > crc2.canvas.height) 
                {
                    this.y -= crc2.canvas.height;
                } 
            }
        }
    }
}