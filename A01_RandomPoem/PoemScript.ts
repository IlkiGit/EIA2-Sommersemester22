namespace RandomPoem 
{
    let subjects: string[] = ["Harry Potter", "Hermine Granger", "Ron Weasley", "Draco Malfoy", "Severus Snape", "Albus Dumbledore"];
    let predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objects: string[] = ["die Zaubertränke", "den Grimm", "Professor Lupin", "die Schule Hogwarts", "die Karte des Rumtreibers", "die Dementoren"];

    //console.log(subjects, predicates, objects);

    for (let index: number = subjects.length; index >= 1; index--) 
    {
        //console.log(index);

        console.log(getVerse(subjects, predicates, objects));
    }

    //Funktion erstellen

    function getVerse (_subjects: string[], _predicates: string[], _objects: string[] ): string 
    {
        // console.log("Alohomora");

        _subjects = subjects;
        _predicates = predicates;
        _objects = objects;

        let verse: string = "";

        let randomSubject: number = Math.floor(Math.random() * subjects.length);
        let randomPredicate: number = Math.floor(Math.random() * predicates.length);
        let randomObject: number = Math.floor(Math.random() * objects.length);

        verse = _subjects[randomSubject] + " " + _predicates[randomPredicate] + " " + _objects[randomObject];
        
        _subjects.splice(randomSubject, 1);
        _predicates.splice(randomPredicate, 1);
        _objects.splice(randomObject, 1);

        return verse;
    }
}