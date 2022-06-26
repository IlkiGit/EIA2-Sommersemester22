namespace Beach 
{
    export class Gull extends Moveable 
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
                this.position = new Vector(200, 400);
                this.velocity = new Vector(-100, -50); 
                this.velocity.random(100, 500); 
            }
        }

        draw(): void 
        {
            crc2.save();
            
            crc2.beginPath();
            crc2.bezierCurveTo(this.position.x + 0, this.position.y + 50, this.position.x + 50,this.position.y + 25, this.position.x + 75, this.position.y+ 50);
            crc2.bezierCurveTo(this.position.x + 75, this.position.y + 50, this.position.x + 125, this.position.y + 25, this.position.x + 150, this.position.y + 50);
            crc2.lineWidth = 5;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

            crc2.restore();
        }
    }
}