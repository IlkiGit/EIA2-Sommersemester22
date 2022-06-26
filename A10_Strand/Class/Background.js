var Beach;
(function (Beach) {
    class Background {
        // Konstruktor
        constructor() {
            this.drawSky(0, 0);
            this.drawWater(0, 0);
            this.drawSand(0, 0);
            this.drawSun(480, 100);
            this.drawHuman(0, 0);
        }
        //Himmel
        drawSky(_x, _y) {
            var gradient = Beach.crc2.createLinearGradient(0, 240, 0, 0);
            gradient.addColorStop(0, "#ADD8E6");
            gradient.addColorStop(1, "#0088FF");
            Beach.crc2.beginPath();
            Beach.crc2.fillStyle = gradient;
            Beach.crc2.moveTo(_x, _y);
            Beach.crc2.lineTo(_x + 1280, _y);
            Beach.crc2.lineTo(_x + 1280, _y + 240);
            Beach.crc2.lineTo(_x - 1280, _y + 240);
            Beach.crc2.closePath();
            Beach.crc2.fill();
        }
        //Wasser
        drawWater(_x, _y) {
            var gradient = Beach.crc2.createLinearGradient(0, 240, 0, 480);
            gradient.addColorStop(1, "#0000FF");
            gradient.addColorStop(0, "#000088");
            Beach.crc2.beginPath();
            Beach.crc2.fillStyle = gradient;
            Beach.crc2.moveTo(_x, _y + 240);
            Beach.crc2.lineTo(_x + 1280, _y + 240);
            Beach.crc2.lineTo(_x + 1280, _y + 480);
            Beach.crc2.lineTo(_x - 1280, _y + 480);
            Beach.crc2.closePath();
            Beach.crc2.fill();
        }
        // Strand
        drawSand(_x, _y) {
            var gradient = Beach.crc2.createLinearGradient(0, 480, 0, 720);
            gradient.addColorStop(1, "#B47D49");
            gradient.addColorStop(0, "#F2D16B");
            Beach.crc2.beginPath();
            Beach.crc2.fillStyle = gradient;
            Beach.crc2.moveTo(_x, _y + 480);
            Beach.crc2.lineTo(_x + 1280, _y + 480);
            Beach.crc2.lineTo(_x + 1280, _y + 720);
            Beach.crc2.lineTo(_x - 1280, _y + 720);
            Beach.crc2.closePath();
            Beach.crc2.fill();
        }
        // Sonne
        drawSun(_x, _y) {
            let r = 60;
            Beach.crc2.beginPath();
            Beach.crc2.arc(_x, _y, r, 0, 2 * Math.PI);
            Beach.crc2.closePath();
            Beach.crc2.fillStyle = "#FFFF00";
            Beach.crc2.fill();
        }
        drawHuman(_x, _y) {
            Beach.crc2.save();
            Beach.crc2.translate(650, 425);
            /* Kopf */
            Beach.crc2.beginPath();
            Beach.crc2.fillStyle = "#000000";
            Beach.crc2.arc(200, 65, 35, 0, Math.PI * 2, true);
            Beach.crc2.fill();
            /* Körper */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(200, 100);
            Beach.crc2.lineTo(200, 180);
            Beach.crc2.strokeStyle = "#000000";
            Beach.crc2.stroke();
            /* Arme */
            Beach.crc2.beginPath();
            Beach.crc2.strokeStyle = "#000000";
            Beach.crc2.moveTo(200, 100);
            Beach.crc2.lineTo(150, 130);
            Beach.crc2.moveTo(200, 100);
            Beach.crc2.lineTo(250, 130);
            Beach.crc2.stroke();
            /* Beine */
            Beach.crc2.beginPath();
            Beach.crc2.strokeStyle = "#000000";
            Beach.crc2.moveTo(200, 180);
            Beach.crc2.lineTo(150, 280);
            Beach.crc2.moveTo(200, 180);
            Beach.crc2.lineTo(250, 280);
            Beach.crc2.stroke();
            Beach.crc2.restore();
        }
    }
    Beach.Background = Background;
})(Beach || (Beach = {}));
//# sourceMappingURL=Background.js.map