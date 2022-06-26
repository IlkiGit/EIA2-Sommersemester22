var Beach;
(function (Beach) {
    class Cloud {
        // Variablendeklaration
        x;
        y;
        speed;
        // Zeichnung
        drawCloud() {
            Beach.crc2.beginPath();
            Beach.crc2.fillStyle = "#FFFFFF";
            Beach.crc2.arc(this.x + 10, this.y + 100, 25, 0, 2 * Math.PI);
            Beach.crc2.arc(this.x + 60, this.y + 95, 50, 0, 2 * Math.PI);
            Beach.crc2.arc(this.x + 110, this.y + 90, 40, 0, 2 * Math.PI);
            Beach.crc2.arc(this.x + 160, this.y + 90, 25, 0, 2 * Math.PI);
            Beach.crc2.closePath();
            Beach.crc2.fill();
        }
        // Bewegung
        moveForward() {
            this.x += this.speed * (+0.5);
        }
    }
    Beach.Cloud = Cloud;
})(Beach || (Beach = {}));
//# sourceMappingURL=Cloud.js.map