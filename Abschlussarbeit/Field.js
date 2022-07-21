"use strict";
var FieldSimulator;
(function (FieldSimulator) {
    class Field {
        // Field gets the objects and methods of the Plant- and timeBased-Classes
        plantType = new FieldSimulator.Plant0();
        waterLevel = new FieldSimulator.Water();
        fertilizerLevel = new FieldSimulator.Fertilizer();
        pestsLevel = new FieldSimulator.Pests(); //pestsLevel >= 4: plant dies
        growthLevel = new FieldSimulator.Growth();
        constructor() {
            this.waterLevel.value = 50;
            this.fertilizerLevel.value = 50;
        }
        plant(_plantType) {
            if (this.plantType.name == "Plant0") { //Plant0 means "empty field"
                this.reset();
                this.plantType = _plantType;
            }
        }
        water() {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200) { // growthLevel.value = 200 means "dead"
                this.waterLevel.increase();
            }
        }
        fertilize() {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200 && FieldSimulator.market.money > FieldSimulator.market.buyPrice[0]) {
                FieldSimulator.market.buy("fertilizer");
                this.fertilizerLevel.increase();
            }
        }
        killPests() {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200 && FieldSimulator.market.money > FieldSimulator.market.buyPrice[1]) {
                FieldSimulator.market.buy("pesticede");
                this.pestsLevel.decrease();
                this.plantType.pestsProbability = 0;
            }
        }
        harvest() {
            if (this.growthLevel.value == 100) { // growthLevel.value == 100 means "ripe"
                FieldSimulator.market.sell(this.plantType.name);
            }
            this.reset();
        }
        reset() {
            this.plantType = new FieldSimulator.Plant0();
            this.growthLevel.value = 0;
            this.waterLevel.value = 50;
            this.fertilizerLevel.value = 50;
            this.pestsLevel.value = 0;
        }
    }
    FieldSimulator.Field = Field;
})(FieldSimulator || (FieldSimulator = {}));
//# sourceMappingURL=Field.js.map