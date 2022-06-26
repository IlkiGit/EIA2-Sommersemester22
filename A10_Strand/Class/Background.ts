namespace Beach 
{
    export class Background 
    {
        // Konstruktor

        constructor()
        {
            this.drawSky(0, 0);
            this.drawWater(0, 0);
            this.drawSand(0, 0);
            this.drawSun(480, 100);
            this.drawHuman(0, 0);
        }

        //Himmel
        
        drawSky(_x: number, _y: number): void 
        {
            var gradient: CanvasGradient = crc2.createLinearGradient(0, 240, 0, 0);
            gradient.addColorStop(0, "#ADD8E6");
            gradient.addColorStop(1, "#0088FF");

            crc2.beginPath();
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 1280, _y);
            crc2.lineTo(_x + 1280, _y + 240);
            crc2.lineTo(_x - 1280, _y + 240);
            crc2.closePath();
            crc2.fill();
        }
        
        //Wasser
        
        drawWater(_x: number, _y: number): void 
        {
            var gradient: CanvasGradient = crc2.createLinearGradient(0, 240, 0, 480);
            gradient.addColorStop(1, "#0000FF");
            gradient.addColorStop(0, "#000088");
            
            crc2.beginPath();
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 240);
            crc2.lineTo(_x + 1280, _y + 240);
            crc2.lineTo(_x + 1280, _y + 480);
            crc2.lineTo(_x - 1280, _y + 480);
            crc2.closePath();
            crc2.fill();
        }
        
        // Strand
        
        drawSand(_x: number, _y: number): void 
        {
            var gradient: CanvasGradient = crc2.createLinearGradient(0, 480, 0, 720);
            gradient.addColorStop(1, "#B47D49");
            gradient.addColorStop(0, "#F2D16B");

            crc2.beginPath();
            crc2.fillStyle = gradient;
            crc2.moveTo(_x, _y + 480);
            crc2.lineTo(_x + 1280, _y + 480);
            crc2.lineTo(_x + 1280, _y + 720);
            crc2.lineTo(_x - 1280, _y + 720);
            crc2.closePath();
            crc2.fill();
        }
        
        // Sonne
        
        drawSun(_x: number, _y: number): void 
        {
            let r: number = 60;

            crc2.beginPath();
            crc2.arc(_x, _y, r, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#FFFF00";
            crc2.fill();
        }

        drawHuman(_x: number, _y: number): void
        {
            crc2.save();

            crc2.translate(650, 425);

            /* Kopf */
        
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(200, 65, 35, 0, Math.PI * 2, true); 
            crc2.fill();

            /* Körper */

            crc2.beginPath();
            crc2.moveTo(200, 100);
            crc2.lineTo(200, 180);
            crc2.strokeStyle = "#000000";
            crc2.stroke();

            /* Arme */

            crc2.beginPath();
            crc2.strokeStyle = "#000000"; 
            crc2.moveTo(200, 100);
            crc2.lineTo(150, 130);
            crc2.moveTo(200, 100);
            crc2.lineTo(250, 130);
            crc2.stroke();

            /* Beine */

            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.moveTo(200, 180);
            crc2.lineTo(150, 280);
            crc2.moveTo(200, 180);
            crc2.lineTo(250, 280);
            crc2.stroke();

            crc2.restore();
        }
    }
}