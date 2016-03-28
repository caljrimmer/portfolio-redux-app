import d3 from 'd3'
import topojson from 'topojson';
import { spaceData, spaceProjection } from './hex-data';
import backgrounds from './hex-backgrounds';
import assets from './hex-assets';

var border;
var space;
var isBuilder;
var data;
var path;
var projection;

function tileSelect (d) {
    d.fill = true;
    if (!d.tile) {
        d.tile = backgrounds[0];
    }
    if (d.tile.index === backgrounds.length) {
        d.tile = null;
        d.fill = false;
    } else {
        d.tile = backgrounds[d.tile.index];
    }
    return d;
}

function assetSelect (d) {
    return d;
}

function createAssets (target) {
    const mappedAssets = data.objects.hexagons.geometries.filter((item) => {
        return _.has(item,'asset');
    });

    d3.select(target)
        .append("div")
        .attr("class","assets")
        .selectAll("div")
        .data(mappedAssets)
        .enter().append("div")
        .attr("class",function (d) {
            return d.asset.id;
        })
        .attr("data-offset",function(d) {
            return d.offset;
        })
        .attr("style",function(d) {
            var dx = 22 * 2 * Math.sin(Math.PI / 3) * (d.offset[0] - 1),
                dy = 22 * 1.5 * (d.offset[1] - 2);
            if(d.offset[1] % 2 !== 0){
                dx = dx - (22 * Math.sin(Math.PI / 3));
            }
            return "top:" + dy + "px;left:" + dx + "px; transform : rotate(" + d.asset.rotate + "deg)";
        });
}

function createBackground () {
    space.append("g")
        .attr("class", "hexagon")
        .selectAll("path")
        .data(data.objects.hexagons.geometries)
        .enter().append("path")
        .attr("d", function(d) { 
            return path(topojson.feature(data, d));
        })
        .attr("class", function(d) {
            if (d.offset[1] < 2 || d.offset[0] === 0 || d.offset[1] === 24 || d.offset[0] >= 26) {
                return 'out-of-bounds';
            } else{
                return d.tile ? d.tile.id : null;
            }
        })
        .attr("data-id", function(d) {
            return d.id;
        })
        .attr("data-offset", function(d) {
            return d.offset;
        })
        .on("mousedown", mousedown)
}

function createMesh () {
    space.append("path")
        .datum(topojson.mesh(data, data.objects.hexagons))
        .attr("class", "mesh")
        .attr("d", path);
}

function createBorder () {
    border = space.append("path")
        .attr("class", "border")
        .call(redraw);
}

function redraw(border) {
    border.attr("d", path(
        topojson.mesh(
            data,
            data.objects.hexagons,
            function(a, b) {
                return a.fill ^ b.fill;
            }
        )
    ));
}

function mousedown(d) {
    if (isBuilder) {
        d = tileSelect(d);
        d3.select(this).attr("class", function(d) {
            return d.tile ? d.tile.id : null;
        });
        border.call(redraw);
    } else{
        d = assetSelect(d);
        console.log(d);
    }
}

function zoomed() {
    space.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

function createZoomRect (width, height, zoom) {

    var zoom = d3.behavior.zoom()
        .translate([0, 0])
        .scale(1)
        .scaleExtent([1, 8])
        .on("zoom", zoomed);

    space.append("rect")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .call(zoom);
}

export function createGrid (opts) {

    const width = opts.width,
        height = opts.height,
        radius = opts.radius,
        target = opts.target;

    isBuilder = opts.isBuilder;
    data = spaceData(radius, width, height);
    projection = spaceProjection(radius);
    path = d3.geo.path().projection(projection);

    var svg = d3.select(target).append("svg")
        .attr("width", width)
        .attr("height", height);

    space = svg.append("g")
        .attr("class","space")
        .attr("width", width)
        .attr("height", height);

    //Backgrounds of space
    createBackground();

        //Assets of space
    createAssets(target);

    //Mesh of space
    createMesh();

    //Border around tiles of space
    createBorder();

    //Zoom Area
    //createZoomRect(width, height);

}