//renders the diagonal hexagons on the screen
import React, { useEffect, useRef } from 'react';
import './style.css';
import * as d3 from 'd3';

const numHexagons = 68; //about 66 visible hexagons in this row
const hexagonSize = 12;
const hexagonSpacing = 10;
const svgWidth = window.innerWidth;
const svgHeight = window.innerHeight;
const colors = [
        '#ff3333',
        '#ff1500',
        '#ff2b00',
        '#ff4000',
        '#ff5500',
        '#ff6a00',
        '#ff8000',
        '#ff9500',
        '#ffaa00',
        '#ffbf00',
        '#ffd500',
        '#ffea00',
        '#ffff00',
        '#eaff00',
        '#d4ff00',
        '#bfff00',
        '#aaff00',
        '#95ff00',
        '#80ff00',
        '#55ff00',
        '#40ff00',
        '#2bff00',
        '#15ff00',
        '#00ff00',
        '#00ff15',
        '#00ff2b',
        '#00ff40',
        '#00ff55',
        '#00ff6a',
        '#00ff80',
        '#00ff95',
        '#00ffaa',
        '#00ffbf',
        '#00ffd5',
        '#00ffea',
        '#00ffff',
        '#00eaff',
        '#00d4ff',
        '#00bfff',
        '#00aaff',
        '#0095ff',
        '#007fff',
        '#006aff',
        '#0055ff',
        '#0040ff',
        '#002bff',
        '#0015ff',
        '#0000ff',
        '#1500ff',
        '#2a00ff',
        '#4000ff',
        '#5500ff',
        '#6a00ff',
        '#7f00ff',
        '#9500ff',
        '#aa00ff',
        '#bf00ff',
        '#d400ff',
        '#ea00ff',
        '#ff00ff',
        '#ff00ea',
        '#ff00d4',
        '#ff00bf',
        '#ff00aa',
        '#ff0095',
        '#ff0080',
        '#ff006a',
        '#ff0055',
        '#ff0040',
        '#ff002b',
        '#ff0015',
'#ff0000']// color options
const lightColors = [
'#ff8080',
'#ff8a80',
'#ff9580',
'#ff9f80',
'#ffaa80',
'#ffb580',
'#ffbf80',
'#ffca80',
'#ffd480',
'#ffdf80',
'#ffea80',
'#fff480',
'#ffff80',
'#f4ff80',
'#eaff80',
'#dfff80',
'#dfff80',
'#caff80',
'#b4ff80',
'#b5ff80',
'#aaff80',
'#9fff80',
'#95ff80',
'#8aff80',
'#80ff80',
'#80ff8a',
'#80ff95',
'#80ff9f',
'#80ffaa',
'#80ffb5',
'#80ffbf',
'#80ffca',
'#80ffdf',
'#80ffea',
'#80fff4',
'#80ffff',
'#80f4ff',
'#80eaff',
'#80dfff',
'#80d4ff',
'#80caff',
'#80bfff',
'#80b5ff',
'#80aaff',
'#809fff',
'#8095ff',
'#808aff',
'#8080ff',
'#8a80ff',
'#9580ff',
'#9f80ff',
'#aa80ff',
'#b580ff',
'#bf80ff',
'#ca80ff',
'#d580ff',
'#df80ff',
'#ea80ff',
'#f480ff',
'#ff80ff',
'#ff80f4',
'#ff80ea',
'#ff80df',
'#ff80d4',
'#ff80ca',
'#ff80bf',
'#ff80b5',
'#ff80aa',
'#ff809f',
'#ff8095',
'#ff808a',
'#ff8080'];
const darkColors = [ 
'#b30000',
'#b30f00',
'#b31e00',
'#b32d00',
'#b33b00',
'#b34a00',
'#b35900',
'#b36800',
'#b37700',
'#b38600',
'#b39500',
'#b3a400',
'#b2b300',
'#a4b300',
'#95b300',
'#86b300',
'#77b300',
'#68b300',
'#59b300',
'#4ab300',
'#3bb300',
'#2db300',
'#1eb300',
'#0fb300',
'#00b300',
'#00b30f',
'#00b31e',
'#00b32d',
'#00b33c',
'#00b34a',
'#00b359',
'#00b368',
'#00b377',
'#00b386',
'#00b395',
'#00b3a4',
'#00b2b3',
'#00a4b3',
'#0095b3',
'#0086b3',
'#0077b3',
'#0068b3',
'#0059b3',
'#004ab3',
'#003bb3',
'#002db3',
'#001eb3',
'#000fb3',
'#0000b3',
'#0f00b3',
'#1e00b3',
'#2d00b3',
'#3c00b3',
'#4a00b3',
'#5900b3',
'#6800b3',
'#7700b3',
'#8600b3',
'#9500b3',
'#a400b3',
'#b300b2',
'#b300a4',
'#b30095',
'#b30086',
'#b30077',
'#b30068',
'#b30059',
'#b3004a',
'#b3003b',
'#b3002d',
'#b3001e',
'#b3000f',
'#b30000'];

const svg = d3.select("#hexagon-container")
            .append("svg")
            .attr("width", svgWidth)
            .attr("height", svgHeight);




function HexagonComponent() {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        function renderDiagonalLine(xPlacement, colorArr, delayPresent) {
            for (let i = 0; i < numHexagons; i++) {


                const xPosition = i * (hexagonSize + hexagonSpacing) + xPlacement;
                const yPosition = i * (hexagonSize * Math.sqrt(0.01) + hexagonSpacing);

                const hexagon = svg.append("polygon")
                                .attr("class", "hexagon-button")
                                .attr("points", getHexagonPoints(xPosition, yPosition, hexagonSize))
                                .style("fill", colorArr[i])
                                .style("opacity", 0)
                                .on("click", function() {
                                    window.location.href = links[i%links.length];
                                });

                hexagon.transition() //add the flicker affect after all is rendered
                        .duration(1000)
                        .delay(i * delayPresent)
                        .style("opacity", 1);
            }
        }

        function getHexagonPoints(x, y, size) {
            const angles = d3.range(0, 2 * Math.PI, Math.PI / 3);
            const points = angles.map(angle => [x + size * Math.cos(angle), y + size * Math.sin(angle)]);
            return points.join(" ");
        }

        //can make subsequent lines with unneeeded buttons to be black, and can make a contional to where if black... its not an active button
        renderDiagonalLine(hexagonSize*3.5, lightColors, 12);
        renderDiagonalLine(0, colors, 15);
        renderDiagonalLine(hexagonSize*-3.5, darkColors, 20);
    }, []);


    return (
        <div id="hexagon-container" className="hexagon-container">
            <svg ref={svgRef} width={svgWidth} height={svgHeight}></svg>
        </div>

    )
}

export default HexagonComponent;