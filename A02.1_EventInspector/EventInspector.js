var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        /* Event für die Mausbewegung */
        document.addEventListener("mousemove", setInfoBox);
        /* "querySelector"-Methode: Rückgabe des ersten Elements im Dokument, welches dem spezifischen Selektor entspricht */
        let div0 = document.querySelector(".div0");
        let div1 = document.querySelector(".div1");
        /* click- und keyup-Listeners für document, body und alle divs  */
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        div0.addEventListener("click", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        div1.addEventListener("click", logInfo);
    }
    /* Funktion für die Info-Box beim Maus-Event */
    function setInfoBox(_event) {
        let position = document.querySelector(".mousebox");
        /* "innerHTML"-Eigenschaft: Abruf bzw. Festlegung des im Elemtn enthaltene HTML */
        /* MouseEvent-clientX und -clientY: Ausgabe der x- und y-Koordinaten des Mauszeigers */
        position.innerHTML = "x-Coordinate: " + _event.clientX + "px" + " ,y-Coordinate: " + _event.clientY + "px" + " & target: " + _event.target;
        position.style.left = _event.clientX + "px";
        position.style.top = _event.clientY + "px";
    }
    /* Funktion für die Event-Ausgaben an die Konsole */
    function logInfo(_event) {
        console.log(_event.type);
        console.log(_event.target);
        console.log(_event.currentTarget);
        console.log(_event.eventPhase);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Eventinspector.js.map