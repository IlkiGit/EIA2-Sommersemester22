var Beach;
(function (Beach) {
    // Array
    let moveables = [];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        if (!canvas) {
            return;
        }
        Beach.crc2 = canvas.getContext("2d");
        // Hintergrund
        let background = new Beach.Background;
        Beach.imageData = Beach.crc2.getImageData(0, 0, Beach.crc2.canvas.width, Beach.crc2.canvas.height);
        // Objekterschaffung
        createShip();
        createClouds();
        createGulls();
        // Animationszeit
        window.setInterval(update, 20);
    }
    // Schiff
    function createShip() {
        for (let i = 0; i < 2; i++) {
            let ship = new Beach.Ship();
            moveables.push(ship);
        }
    }
    // Wolken
    function createClouds() {
        for (let i = 0; i < 10; i++) {
            let cloud = new Beach.Cloud();
            moveables.push(cloud);
        }
    }
    // Möwe
    function createGulls() {
        for (let i = 0; i < 12; i++) {
            let gull = new Beach.Gull();
            moveables.push(gull);
        }
    }
    // Animation
    function update() {
        Beach.crc2.fillRect(0, 0, Beach.crc2.canvas.width, Beach.crc2.canvas.height);
        Beach.crc2.putImageData(Beach.imageData, 0, 0);
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
})(Beach || (Beach = {}));
//# sourceMappingURL=Main.js.map