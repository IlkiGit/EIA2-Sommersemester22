var Beach;
(function (Beach) {
    class Cloud extends Beach.Moveable {
        constructor(_position) {
            super(_position);
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Beach.Vector(0, 0);
                this.velocity = new Beach.Vector(0, 0);
                this.velocity.random(100, 150);
            }
        }
        // Zeichnung
        draw() {
            Beach.crc2.beginPath();
            Beach.crc2.fillStyle = "#FFFFFF";
            Beach.crc2.arc(this.position.x + 10, this.position.y + 100, 25, 0, 2 * Math.PI);
            Beach.crc2.arc(this.position.x + 60, this.position.y + 95, 50, 0, 2 * Math.PI);
            Beach.crc2.arc(this.position.x + 110, this.position.y + 90, 40, 0, 2 * Math.PI);
            Beach.crc2.arc(this.position.x + 160, this.position.y + 90, 25, 0, 2 * Math.PI);
            Beach.crc2.closePath();
            Beach.crc2.fill();
        }
    }
    Beach.Cloud = Cloud;
})(Beach || (Beach = {}));
//# sourceMappingURL=Cloud.js.map