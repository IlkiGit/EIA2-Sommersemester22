namespace Beach 
{
    export class Ship extends Moveable 
    {
        // Konstruktor

        constructor(_position?: Vector) 
        {
            super(_position);

            if (_position)
            {
                this.position = _position;
            }
            else
            {
                this.position = new Vector(0, 300);
                this.velocity = new Vector(200, 0);
            } 
        }

        // Zeichnung

        draw(): void 
        {
            /* Rumpf */

            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x + 200, this.position.y);
            crc2.lineTo(this.position.x + 150, this.position.y + 100);
            crc2.lineTo(this.position.x + 50, this.position.y + 100);
            crc2.fillStyle = "#B47D49";
            crc2.strokeStyle = "000000";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            /* Mast */ 
        
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y);
            crc2.fillStyle = "#000000"
            crc2.fillRect(this.position.x + 95, this.position.y, 10, -100);
            crc2.closePath();
            crc2.fill();

            /* Flagge */
        
            crc2.beginPath();
            crc2.moveTo(this.position.x + 100, this.position.y - 100);
            crc2.fillStyle = "#FF0000";
            crc2.lineTo(this.position.x + 100, this.position.y -  150);
            crc2.lineTo(this.position.x + 150, this.position.y -125);
            crc2.fill();
            crc2.closePath();
        }
    }
}