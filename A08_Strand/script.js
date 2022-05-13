var beach;
(function (beach) {
    window.addEventListener("load", hndLoad);
    /* Variablendeklaration */
    let canvas;
    let crc2;
    function hndLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        drawSky(0, 0);
        drawWater(0, 0);
        drawSand(0, 0);
        drawSun(150, 150);
        drawCloud(300, 200);
        drawGull(100, 325);
        drawGull(500, 300);
        drawShip(300, 500);
        drawShip(100, 400);
        drawBall(100, 1000);
        drawBall(400, 900);
    }
    /* Himmel */
    function drawSky(_x, _y) {
        let gradient = crc2.createLinearGradient(0, 427, 0, 0);
        gradient.addColorStop(0, "#ADD8E6");
        gradient.addColorStop(1, "#0088FF");
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 720, _y);
        crc2.lineTo(_x + 720, _y + 427);
        crc2.lineTo(_x - 720, _y + 427);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    /* Wasser */
    function drawWater(_x, _y) {
        let gradient = crc2.createLinearGradient(0, 427, 0, 854);
        gradient.addColorStop(1, "#0000FF");
        gradient.addColorStop(0, "#000088");
        crc2.beginPath();
        crc2.moveTo(_x, _y + 427);
        crc2.lineTo(_x + 720, _y + 427);
        crc2.lineTo(_x + 720, _y + 854);
        crc2.lineTo(_x - 720, _y + 854);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    /* Strand */
    function drawSand(_x, _y) {
        let gradient = crc2.createLinearGradient(0, 854, 0, 1280);
        gradient.addColorStop(1, "#B47D49");
        gradient.addColorStop(0, "#F2D16B");
        crc2.beginPath();
        crc2.moveTo(_x, _y + 854);
        crc2.lineTo(_x + 720, _y + 854);
        crc2.lineTo(_x + 720, _y + 1280);
        crc2.lineTo(_x - 720, _y + 1280);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    /* Sonne */
    function drawSun(_x, _y) {
        let r = 60;
        crc2.beginPath();
        crc2.arc(_x, _y, r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#FFFF00";
        crc2.fill();
    }
    /* Wolken */
    function drawCloud(_x, _y) {
        let nParticle = 40;
        let rParticle = 70;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, rParticle);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        particle.arc(0, 0, rParticle, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.save();
        crc2.translate(_x, _y);
        for (let position = 0; position < nParticle; position++) {
            crc2.save();
            let x = (Math.random() * (_x + 100));
            let y = -((Math.random() - 0.5) * _y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    /* Möwe */
    function drawGull(_x, _y) {
        let x = Math.floor(Math.random() * 50) + _x;
        let y = Math.floor(Math.random() * 50) + _y;
        crc2.beginPath();
        crc2.bezierCurveTo(x, y - 50, x + 40, -0.05 * (y - 5000), x + 80, y - 50);
        crc2.moveTo(x + 80, y - 50);
        crc2.bezierCurveTo(x + 80, y - 50, x + 120, -0.05 * (y - 5000), x + 160, y - 50);
        crc2.lineWidth = 5;
        crc2.strokeStyle = "#000000";
        crc2.stroke();
    }
    /* Schiff */
    function drawShip(_x, _y) {
        let x = Math.floor(Math.random() * 100) + _x;
        let y = Math.floor(Math.random() * 250) + _y;
        /* Rumpf */
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 200, y);
        crc2.lineTo(x + 150, y + 100);
        crc2.lineTo(x + 50, y + 100);
        crc2.fillStyle = "#B47D49";
        crc2.strokeStyle = "000000";
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        /* Mast */
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.fillStyle = "#000000";
        crc2.fillRect(x + 95, y, 10, -100);
        crc2.closePath();
        crc2.fill();
        /* Flagge */
        crc2.beginPath();
        crc2.moveTo(x + 100, y - 100);
        crc2.fillStyle = "#FFFFFF";
        crc2.lineTo(x + 100, y - 150);
        crc2.lineTo(x + 150, y - 125);
        crc2.fill();
        crc2.closePath();
    }
    function drawBall(_x, _y) {
        let x = Math.floor(Math.random() * 100) + _x;
        let y = Math.floor(Math.random() * 250) + _y;
        let r = 50;
        let gradient = crc2.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(1, "#FF0000");
        gradient.addColorStop(0, "#FF00FF");
        crc2.beginPath();
        crc2.fillStyle = gradient;
        crc2.arc(x, y, r, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
})(beach || (beach = {}));
//# sourceMappingURL=script.js.map