var Beach;
(function (Beach) {
    class Gull extends Beach.Moveable {
        // Konstruktor
        constructor(_position) {
            super(_position);
            if (_position) {
                this.position = _position;
            }
            else {
                this.position = new Beach.Vector(200, 400);
                this.velocity = new Beach.Vector(-100, -50);
                this.velocity.random(100, 500);
            }
        }
        draw() {
            Beach.crc2.save();
            Beach.crc2.beginPath();
            Beach.crc2.bezierCurveTo(this.position.x + 0, this.position.y + 50, this.position.x + 50, this.position.y + 25, this.position.x + 75, this.position.y + 50);
            Beach.crc2.bezierCurveTo(this.position.x + 75, this.position.y + 50, this.position.x + 125, this.position.y + 25, this.position.x + 150, this.position.y + 50);
            Beach.crc2.lineWidth = 5;
            Beach.crc2.strokeStyle = "#000000";
            Beach.crc2.stroke();
            Beach.crc2.restore();
        }
    }
    Beach.Gull = Gull;
})(Beach || (Beach = {}));
//# sourceMappingURL=Gull.js.map