import _ from 'lodash';
import rwc from 'random-weighted-choice';

export function randomTile () {
    const type = [
        {weight: 5, id: "r"},
        {weight: 10, id: "s"},
        {weight: 5, id: "mt"},
        {weight: 4, id: "mi"},
        {weight: 3, id: "mc"},
        {weight: 2, id: "ms"},
        {weight: 1, id: "mg"}
    ];
    return {
        conc : (Math.random() / (3/Math.random())),
        type : rwc(type,0)
    }
}

export function generateTiles() {
    const array = [];
    for (let z = 0; z < 22; z++) { 
        for (let y = 0; y < 40; y++) {
            array[z] = array[z] || [];
            array[z].push(randomTile());
        }
    }
    return array;
}