
export class Person {

    public id : number = 0;
    public result : number = 0;
    private genom: Array<number> = new Array(400);
    private min: number = 0;
    private max: number = 0;
    public fit: number = 0;
    

    constructor(Pm: number, min: number, max: number, genom?: Array<number>) {
        this.id = Math.ceil(Math.random()*1000);
        if (min >= max) throw new Error("min >= max");
        this.max = max;
        this.min = min;
        if (genom !== undefined) {
            this.genom = genom;
            this.mutation(Pm);
        }
        else{
            this.generateGenome();
        }  
    }
    public getGenomeAll = (): Array<number> => {
        return this.genom;
    }
    public getGenome = (j: number): number => {
        return this.genom[j];
    }
    public getLenghtGenome = (): number => {
        return this.genom.length;
    }
    private showMessage = (message: any) => {
        console.log(message);
    }
    private generateGenome = () => {
        let acum: number = 0;
        let genom: Array<number> = new Array(400);
        for (var i = 0; i < this.genom.length; i++) {
            genom[i] = (Math.random() * (this.max - this.min)) + this.min;
        }
        this.genom = [...genom];
        // for (var i = 0; i < this.genom.length; i++) {
        //     this.genom[i] = acum + this.min;
        //     acum += 0.01;
        // }
        // this.showMessage(this.genom);
    }
    private mutation = (Pm: number) => {
        const digit: number = Math.random();
        if (digit <= Pm) {
            let genom: Array<number> = new Array(400);
            for (var i = 0; i < this.genom.length; i++) {
                genom[i] = (Math.random() * (this.max - this.min)) + this.min;
            }
            this.genom = [...genom];
        }

        // this.showMessage(this.genom);
    }
    private y = (x: number): number => {
        return 1 / x;
    }
    public fitnes = () => {
        var fit: number = 0;
        var fit2: number = 0;

        for (var i of this.genom) {
            fit += Math.abs(this.y(i));
            fit2 += this.y(i);
        }
        this.fit = fit;
        this.result = fit2/400;
    }
}

