import React, { useEffect } from 'react'

import { Popultation } from "../Scripts/Population"
import { Person } from '../Scripts/Person'

const FindMax: React.FC = () => {

    const n: number = 400;
    const Pc: number = 0.8;
    const Pm: number = 0.25;
    const min: number = -4;
    const max: number = -0.01;
    const epohe: number = 1000;

    function y(x: number): number {
        return 1 / x;
    }
    const start = () => {
        var popultation: Popultation = new Popultation(Pc, Pm, n, min, max);
        for (var i = 0; i < epohe; i++) {
            console.log(`EPOCHE : ${i}`);
            popultation.selectionV3();
            // popultation.showIndividduals();
            // var NewIndividuals: Array<Person> = popultation.select();
            // console.log(`EPOCHE : ${i}`)
            // console.log(`Result : ${NewIndividuals[0].result}, Fitnes : ${NewIndividuals[0].fit}`)
            // popultation.crosover(Pc, NewIndividuals[0], NewIndividuals[1]);
            // popultation.showIndividduals();
        }
        popultation.showIndividduals();
    }
    useEffect(() => {
        start();
        // Popultation.mutation(Pm);
    }, [])


    return (
        <div>
            Start work algorithm
        </div>
    )
}

export default FindMax
