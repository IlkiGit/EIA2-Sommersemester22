"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Plant2 extends FieldSimulator.Plant {
        name = "Plant2";
        waterDrainage = 1;
        fertilizerDemand = 1;
        pestsProbability = 1;
        growthSpeed = 1.5;
    }
    FieldSimulator.Plant2 = Plant2;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Plant2.js.map