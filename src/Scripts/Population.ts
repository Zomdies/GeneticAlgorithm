
import { runInThisContext } from 'vm';
import { Person } from './Person'

export class Popultation {
    private individuals: Array<Person> = [];
    private Pm: number = 0;
    private Pc: number = 0;
    private n: number = 0;
    private min: number = 0;
    private max: number = 0;



    constructor(Pc: number, Pm: number, n: number, min: number, max: number) {
        this.Pc = Pc;
        this.Pm = Pm;
        this.n = n;
        this.min = min;
        this.max = max;
        for (var i = 0; i < n; i++) {
            this.individuals[i] = new Person(Pm, min, max);
        }
    }
    private showMessage = (message: any) => {
        console.log(message);
    }
    private newGeneration = (individual: Array<number>): void => {
        this.showMessage("NEW Generation")
        var individuals: Array<Person> = [];
        for (var i = 0; i < this.individuals.length; i++) {
            individuals[i] = new Person(this.Pm, this.min, this.max, individual);
        }
        this.individuals = [...individuals];
    }
    public crosover = (Pc: number, individual1: Person, individual2: Person): Array<number> => {
        const numberG = Math.ceil(individual1.getLenghtGenome() * Pc);
        // let individual1: Person = this.individuals[i];
        // let individual2: Person = this.individuals[i + 1];
        let newIndividual: Array<number> = [];
        for (var j = 0; j < individual1.getLenghtGenome(); j++) {
            if (individual1.y(individual1.getGenome(j)) > individual2.y(individual2.getGenome(j))) {
                newIndividual[j] = individual1.getGenome(j);
            } else {
                newIndividual[j] = individual2.getGenome(j);
            }
        }
        return newIndividual;
        // this.newGeneration(newIndividual);
    }
    public selection = () => {
        this.select();
        console.log(this.individuals[0]);
        var Newindividuals: Array<Person> = [];
        for (var i = 0; i < this.individuals.length / 2; i++) {
            let newInd: Person = new Person(this.Pm, this.min, this.max, this.crosover(this.Pc, this.individuals[i], this.individuals[i + 1]));
            Newindividuals.push(newInd);
            Newindividuals.push(this.individuals[i]);
        }
        this.individuals = [...Newindividuals];
        // console.log(`Result : ${Newindividuals[0].result}, Fitnes : ${Newindividuals[0].fit}`)
    }

    public selectionV2 = () => {
        this.select();
        console.log(this.individuals[0]);
        var Newindividuals: Array<Person> = [];
        for (var i = 0; i < this.individuals.length - 1; i++) {
            let newInd: Person = new Person(this.Pm, this.min, this.max, this.crosover(this.Pc, this.individuals[0], this.individuals[i + 1]));
            Newindividuals.push(newInd);
            // Newindividuals.push(this.individuals[i]);
        }
        let newInd: Person = new Person(this.Pm, this.min, this.max, this.crosover(this.Pc, this.individuals[1], this.individuals[2]));
        Newindividuals.push(newInd);
        this.individuals = [...Newindividuals];
        // console.log(`Result : ${Newindividuals[0].result}, Fitnes : ${Newindividuals[0].fit}`)
    }
    public selectionV3 = () => {
        this.select();
        console.log(this.individuals[0]);
        let percent: Array<Person> = [];
        let Newindividuals : Array<Person> = [];
        for (var i = 0; i < this.individuals.length; i++) {
            let a: number = Math.ceil(this.individuals[i].fit/this.individuals[0].fit);
            for (var j = 0; j < a; j++){
                percent.push(this.individuals[i]);
            }
        }
        for (var i = 0; i < this.individuals.length; i++) {
            let newInd: Person = new Person(this.Pm, this.min, this.max, this.crosover(this.Pc, percent[Math.round(Math.random() * (percent.length-1))], percent[Math.round(Math.random() * (percent.length-1))]));
            newInd.mutation(this.Pm);
            Newindividuals.push(newInd);
        }
        this.individuals = [...Newindividuals];
    }

    public select = () => {
        for (var i of this.individuals) {
            i.fitnes();
        }
        this.individuals.sort((a: Person, b: Person) => {
            if (a.fit < b.fit)
                return 1;
            if (a.fit > b.fit)
                return -1;
            return 0
        })
        // return [this.individuals[0], this.individuals[1]];
    }

    public showIndividduals = (): void => {
        for (var i of this.individuals) {
            i.fitnes();
        }
        this.showMessage(this.individuals);
    }
}