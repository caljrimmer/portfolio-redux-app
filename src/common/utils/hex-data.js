import topojson from 'topojson';
import _ from 'lodash';
const angles = [30,90,150,210,270,330];

import assets from './hex-assets';

function randomAssets () {
    if(Math.random() > 0.2) return false;
    const ship = _.sample(assets);
    return {
        id: ship.id,
        rotate: _.sample(angles)
    };
}


export function spaceData(radius, width, height) {

    const dx = radius * 2 * Math.sin(Math.PI / 3),
        dy = radius * 1.5,
        m = Math.ceil((height + radius) / dy) + 1,
        n = Math.ceil(width / dx) + 1,
        geometries = [],
        arcs = [];

    var index = 0;

    for (var j=-1; j<= m; ++j) {
        for (var i=-1; i<=n; ++i) {
            var y = j * 2, x = (i + (j & 1) / 2) * 2;
            arcs.push([[x, y - 1], [1, 1]], [[x + 1, y], [0, 1]], [[x + 1, y + 1], [-1, 1]]);
        }
    }

    for (var j=0, q=3; j< m; ++j, q+=6) {
        for (var i=0; i<n; ++i, q+=3) {
            var obj = {
                type: 'Polygon',
                arcs: [[q, q + 1, q + 2, ~(q + (n + 2 - (j & 1)) * 3), ~(q - 2), ~(q - (n + 2 + (j & 1)) * 3 + 2)]],
                id: index,
                offset: [i,j]
            };

            const random = randomAssets();

            /*
            if (j === 2 && i === 2) {
                random.id = "ship_gun";
                obj.asset = random;
            }

            if (j === 3 && i === 3) {
                random.id = "ship_scout";
                obj.asset = random;
            }

            if (j === 4 && i === 4) {
                random.id = "ship_war";
                obj.asset = random;
            }*/

            if(random) {
                obj.asset = random;
            }


            geometries.push(obj);
            index++;
        }
    }

    return {
        transform: {
            translate: [0,0],
            scale: [1, 1]
        },
        objects: {
            hexagons: {
                type: 'GeometryCollection',
                geometries: geometries
            }
        },
        arcs: arcs
    };

}

export function spaceProjection(radius) {
    const dx = radius * 2 * Math.sin(Math.PI / 3),
        dy = radius * 1.5;
    return {
        stream: function(stream) {
            return {
                point: function(x, y) { stream.point(x * dx / 2, (y - (2 - (y & 1)) / 3) * dy / 2); },
                lineStart: function() { stream.lineStart(); },
                lineEnd: function() { stream.lineEnd(); },
                polygonStart: function() { stream.polygonStart(); },
                polygonEnd: function() { stream.polygonEnd(); }
            };
        }
    };
}