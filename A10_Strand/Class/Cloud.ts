namespace Beach 
{
    export class Cloud extends Moveable 
    {
        constructor(_position?: Vector) 
        {
            super(_position);

            if (_position)
            {
                this.position = _position;
            }
            else
            {
                this.position = new Vector(0, 0);
                this.velocity = new Vector(0, 0);
                this.velocity.random(100, 150); 
            }
        }

        // Zeichnung

        draw(): void 
        {
            crc2.beginPath();
            crc2.fillStyle = "#FFFFFF";
            crc2.arc(this.position.x + 10, this.position.y + 100, 25, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 60, this.position.y + 95, 50, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 110, this.position.y + 90, 40, 0, 2 * Math.PI);
            crc2.arc(this.position.x + 160, this.position.y + 90, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
}