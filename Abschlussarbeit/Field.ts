namespace FieldSimulator {

    export class Field {
         
        // Field gets the objects and methods of the Plant- and timeBased-Classes

        plantType: Plant = new Plant0();
        waterLevel: Water = new Water();
        fertilizerLevel: Fertilizer = new Fertilizer();
        pestsLevel: Pests = new Pests(); //pestsLevel >= 4: plant dies
        growthLevel: Growth = new Growth();

        constructor() { // initial values of a field
            this.waterLevel.value = 50;
            this.fertilizerLevel.value = 50;
        }

        plant(_plantType: Plant): void {
            if (this.plantType.name == "Plant0") { //Plant0 means "empty field"
                this.reset();
                this.plantType = _plantType;
            }

        }
        
        water(): void {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200) { // growthLevel.value = 200 means "dead"
                this.waterLevel.increase();
            }
        }

        fertilize(): void {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200 && market.money > market.buyPrice[0]) {
                market.buy("fertilizer");
                this.fertilizerLevel.increase();
            }
        }

        killPests(): void {
            if (this.plantType.name != "Plant0" && this.growthLevel.value != 200 && market.money > market.buyPrice[1]) {
                market.buy("pesticede");
                this.pestsLevel.decrease();
                this.plantType.pestsProbability = 0;
            }
        }

        harvest(): void {
            if (this.growthLevel.value == 100) { // growthLevel.value == 100 means "ripe"
                market.sell(this.plantType.name);
            }
            this.reset();
        }

        reset(): void { // method to clear a field
            this.plantType = new Plant0();
            this.growthLevel.value = 0;
            this.waterLevel.value = 50;
            this.fertilizerLevel.value = 50;
            this.pestsLevel.value = 0;
        }
    }
}
