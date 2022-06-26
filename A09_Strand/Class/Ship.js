var Beach;
(function (Beach) {
    class Ship {
        // Variablendeklaration
        x;
        y;
        speed;
        // Zeichnung
        drawShip() {
            /* Rumpf */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.x, this.y);
            Beach.crc2.lineTo(this.x + 200, this.y);
            Beach.crc2.lineTo(this.x + 150, this.y + 100);
            Beach.crc2.lineTo(this.x + 50, this.y + 100);
            Beach.crc2.fillStyle = "#B47D49";
            Beach.crc2.strokeStyle = "000000";
            Beach.crc2.closePath();
            Beach.crc2.stroke();
            Beach.crc2.fill();
            /* Mast */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.x, this.y);
            Beach.crc2.fillStyle = "#000000";
            Beach.crc2.fillRect(this.x + 95, this.y, 10, -100);
            Beach.crc2.closePath();
            Beach.crc2.fill();
            /* Flagge */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.x + 100, this.y - 100);
            Beach.crc2.fillStyle = "#FF0000";
            Beach.crc2.lineTo(this.x + 100, this.y - 150);
            Beach.crc2.lineTo(this.x + 150, this.y - 125);
            Beach.crc2.fill();
            Beach.crc2.closePath();
        }
        // Bewegung
        move() {
            this.x += this.speed * 2;
        }
    }
    Beach.Ship = Ship;
})(Beach || (Beach = {}));
//# sourceMappingURL=Ship.js.map