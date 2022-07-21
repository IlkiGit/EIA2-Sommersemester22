namespace FieldSimulator {

    export class Growth extends TimeBased  {

        decrease(): void {
            this.value = 0; }

        increase(_plantType: Plant): void {
            this.value = this.value + _plantType.growthSpeed; }
    }
}