import {elementToId} from "./elementToID";

export function pieChart(chartOut, percentOut, valueOut, paramName, valuePercent, value, renderSpeed, size, colorBackground, colorChart) {
  if (!size) {
    size = 50;
  }

  if (!colorBackground) {
    colorBackground = '#9ca1b2';
  }

  if (!colorChart) {
    colorChart = '#2196f3';
  }

  let pieCharts = elementToId(chartOut),
    elemPercent = elementToId(percentOut),
    elemValue = elementToId(valueOut);
  let c = pieCharts.getContext('2d');
  c.lineCap = 'round';

  let posX = pieCharts.width / 2,
    posY = pieCharts.height / 2,
    percent = 0,
    onePercent = 360 / 100,
    result = onePercent * valuePercent,
    degrees = 0
  ;

  arcMove(size, renderSpeed, value, paramName, colorBackground, colorChart);

  function arcMove(size, renderSpeed, value, paramName, colorBackground, colorChart){
    let acrInterval = setInterval (function() {
      degrees += 2;
      c.clearRect( 0, 0, pieCharts.width, pieCharts.height );
      percent = degrees / onePercent;

      elemPercent.innerHTML = `${percent.toFixed()}%`;
      elemValue.innerHTML = `${value} <span>${paramName}</span>`;

      c.beginPath();
      c.arc( posX, posY, size, (Math.PI/360), (Math.PI*2));
      c.strokeStyle = colorBackground;
      c.lineWidth = '5';
      c.stroke();

      c.beginPath();
      c.strokeStyle = colorChart;
      c.lineWidth = '5';
      c.arc( posX, posY, size, (Math.PI/180) * 270, (Math.PI/180) * (270 + degrees) );
      c.stroke();
      if( degrees >= result ) clearInterval(acrInterval);
    }, renderSpeed);
  }
}
