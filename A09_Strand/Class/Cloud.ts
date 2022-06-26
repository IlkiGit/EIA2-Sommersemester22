namespace Beach 
{
    export class Cloud 
    {
        // Variablendeklaration
        
        x: number;
        y: number;
        speed: number;

        // Zeichnung
        
        drawCloud(): void 
        {
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.arc(this.x + 10, this.y + 100, 25, 0, 2 * Math.PI);
            crc2.arc(this.x + 60, this.y + 95, 50, 0, 2 * Math.PI);
            crc2.arc(this.x + 110, this.y + 90, 40, 0, 2 * Math.PI);
            crc2.arc(this.x + 160, this.y + 90, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }

        // Bewegung
        
        moveForward(): void 
        {
            this.x += this.speed * (+0.5) ;          
        }
    }
}