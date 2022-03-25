var RandomPoem;
(function (RandomPoem) {
    let subjects = ["Harry Potter", "Hermine Granger", "Ron Weasley", "Draco Malfoy", "Severus Snape", "Albus Dumbledore"];
    let predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjects, predicates, objects);
    for (let index = subjects.length; index >= 1; index--) {
        //console.log(index);
        console.log(getVerse(subjects, predicates, objects));
    }
    //Funktion erstellen
    function getVerse(_subjects, _predicates, _objects) {
        // console.log("Alohomora");
        _subjects = subjects;
        _predicates = predicates;
        _objects = objects;
        let verse = "";
        let randomSubject = Math.floor(Math.random() * subjects.length);
        let randomPredicate = Math.floor(Math.random() * predicates.length);
        let randomObject = Math.floor(Math.random() * objects.length);
        verse = _subjects[randomSubject] + " " + _predicates[randomPredicate] + " " + _objects[randomObject];
        _subjects.splice(randomSubject, 1);
        _predicates.splice(randomPredicate, 1);
        _objects.splice(randomObject, 1);
        return verse;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=PoemScript.js.map