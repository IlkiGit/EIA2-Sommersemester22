namespace Beach 
{
    export class Ship 
    {
        // Variablendeklaration

        x: number;
        y: number;
        speed: number;

        // Zeichnung

        drawShip(): void 
        {
            /* Rumpf */

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 200, this.y);
            crc2.lineTo(this.x + 150, this.y + 100);
            crc2.lineTo(this.x + 50, this.y + 100);
            crc2.fillStyle = "#B47D49";
            crc2.strokeStyle = "000000";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            /* Mast */ 
        
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.fillStyle = "#000000"
            crc2.fillRect(this.x + 95, this.y, 10, -100);
            crc2.closePath();
            crc2.fill();

            /* Flagge */
        
            crc2.beginPath();
            crc2.moveTo(this.x + 100, this.y - 100);
            crc2.fillStyle = "#FF0000";
            crc2.lineTo(this.x + 100, this.y -  150);
            crc2.lineTo(this.x + 150, this.y -125);
            crc2.fill();
            crc2.closePath();
        }

        // Bewegung

        move(): void 
        {
            this.x += this.speed * 2 ;       
        }
    }}