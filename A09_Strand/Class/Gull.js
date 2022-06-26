var Beach;
(function (Beach) {
    class Gull {
        // Variablendeklaration
        x;
        y;
        speed;
        // Konstruktor
        constructor() {
            this.drawGull();
        }
        // Animation
        update() {
            this.drawGull();
            this.fly();
        }
        // Zeichnung
        drawGull() {
            Beach.crc2.save();
            Beach.crc2.beginPath();
            Beach.crc2.bezierCurveTo(this.x + 0, this.y + 50, this.x + 50, this.y + 25, this.x + 75, this.y + 50);
            Beach.crc2.bezierCurveTo(this.x + 75, this.y + 50, this.x + 125, this.y + 25, this.x + 150, this.y + 50);
            Beach.crc2.lineWidth = 5;
            Beach.crc2.strokeStyle = "#000000";
            Beach.crc2.stroke();
            Beach.crc2.restore();
        }
        // Bewegung
        fly() {
            this.x += Math.random() * 1 + 2;
            this.y += Math.random() * 1 + 2;
            // Positons-Bedingungen
            for (let i = 0; i < Beach.z; i++) {
                if (this.x < 0) {
                    this.x += Beach.crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y += Beach.crc2.canvas.height;
                }
                if (this.x >= Beach.crc2.canvas.width) {
                    this.x -= Beach.crc2.canvas.width;
                }
                if (this.y > Beach.crc2.canvas.height) {
                    this.y -= Beach.crc2.canvas.height;
                }
            }
        }
    }
    Beach.Gull = Gull;
})(Beach || (Beach = {}));
//# sourceMappingURL=Gull.js.map