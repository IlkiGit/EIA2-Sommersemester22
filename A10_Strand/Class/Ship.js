var Beach;
(function (Beach) {
    class Ship extends Beach.Moveable {
        // Konstruktor
        constructor(_position) {
            super(_position);
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Beach.Vector(0, 300);
                this.velocity = new Beach.Vector(200, 0);
            }
        }
        // Zeichnung
        draw() {
            /* Rumpf */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.position.x, this.position.y);
            Beach.crc2.lineTo(this.position.x + 200, this.position.y);
            Beach.crc2.lineTo(this.position.x + 150, this.position.y + 100);
            Beach.crc2.lineTo(this.position.x + 50, this.position.y + 100);
            Beach.crc2.fillStyle = "#B47D49";
            Beach.crc2.strokeStyle = "000000";
            Beach.crc2.closePath();
            Beach.crc2.stroke();
            Beach.crc2.fill();
            /* Mast */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.position.x, this.position.y);
            Beach.crc2.fillStyle = "#000000";
            Beach.crc2.fillRect(this.position.x + 95, this.position.y, 10, -100);
            Beach.crc2.closePath();
            Beach.crc2.fill();
            /* Flagge */
            Beach.crc2.beginPath();
            Beach.crc2.moveTo(this.position.x + 100, this.position.y - 100);
            Beach.crc2.fillStyle = "#FF0000";
            Beach.crc2.lineTo(this.position.x + 100, this.position.y - 150);
            Beach.crc2.lineTo(this.position.x + 150, this.position.y - 125);
            Beach.crc2.fill();
            Beach.crc2.closePath();
        }
    }
    Beach.Ship = Ship;
})(Beach || (Beach = {}));
//# sourceMappingURL=Ship.js.map