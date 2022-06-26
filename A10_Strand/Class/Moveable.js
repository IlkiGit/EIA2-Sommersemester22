var Beach;
(function (Beach) {
    class Moveable {
        position;
        velocity;
        // Konstruktor
        constructor(_position) {
            if (_position) {
                this.position = _position.copy();
            }
            else {
                this.position = new Beach.Vector(0, 0);
            }
            this.velocity = new Beach.Vector(0, 0);
        }
        // Bewegung
        move(_timeslice) {
            let offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            // Positionsbedingungen
            if (this.position.x < 0) {
                this.position.x += Beach.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += Beach.crc2.canvas.height;
            }
            if (this.position.x > Beach.crc2.canvas.width) {
                this.position.x -= Beach.crc2.canvas.width;
            }
            if (this.position.y > Beach.crc2.canvas.height) {
                this.position.y -= Beach.crc2.canvas.height;
            }
        }
        // Zeichnen
        draw() { }
    }
    Beach.Moveable = Moveable;
})(Beach || (Beach = {}));
//# sourceMappingURL=Moveable.js.map