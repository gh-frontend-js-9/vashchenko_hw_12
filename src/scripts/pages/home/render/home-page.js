import {CreateElement} from "../../../func/createElement";
import {GoogleCharts} from 'google-charts';
import $ from 'jQuery';

// DATA TEBLE
// d3 FOR lINE CHART

let createElement = new CreateElement();

export function homePageContent () {
  createElement.delete({id: 'content'});
  createElement.addNewElement({id: 'content'},'div',{'class': 'content-menu d-flex flex-column col-md-12 p-0'},
    `<div class="d-flex flex-row justify-content-center align-items-center align-content-center pt-3">
      <div id="chart_wrapper" style="width: 70%; height: 400px">
        <div id="chart_div" style="overflow-x: scroll"></div>
      <div id="chart_div3"></div>
      </div>
      </div>
    </div>
      <div class="d-flex flex-row justify-content-around align-items-center">
        <div style="width: 100%; height: 400px">
          <div id="chart_div2" style="overflow: auto"></div>
        </div>
      </div>
    </div>`
  );
}

// This is a temporary solution set data in Google Charts!
//
// GoogleCharts.load(drawChart);
//
// let rowsData = [
//   ['Mon', 100],
//   ['Tue', 80],
//   ['Wed', 45],
//   ['Thu', 83],
//   ['Fri', 70],
//   ['Sat', 90],
//   ['Sun', 76],
//   ['Mon', 100],
//   ['Tue', 70],
//   ['Wed', 75],
//   ['Thu', 83],
//   ['Fri', 70],
//   ['Sat', 90],
//   ['Sun', 76],
//   ['Mon', 100],
//   ['Tue', 70],
//   ['Wed', 75],
//   ['Thu', 83],
//   ['Fri', 70],
//   ['Sat', 90],
//   ['Sun', 76]
// ];
//
// let rowsData2 = [
//   [0,  25],
//   [1,  90],
//   [2,  55],
//   [3,  20],
//   [4,  84],
//   [5,  72],
//   [6,  62],
//   [7,  40],
//   [8,  62],
//   [9,  40]
// ];
//
//
// function drawChart() {
//   let container = document.getElementById('chart_div');
//   let container2 = document.getElementById('chart_div2');
//   let container3 = document.getElementById('chart_div3');
//
//   let chart = new google.visualization.AreaChart(container);
//   let chart2 = new google.visualization.LineChart(container2);
//   let chart3 = new google.visualization.PieChart(container3);
//
//   let dataTable = new google.visualization.DataTable();
//   let dataTable2 = new google.visualization.DataTable();
//   let dataTable3 = new google.visualization.DataTable();
//
//   let options = {
//     width: 4000,
//     height: 350,
//     backgroundColor: 'transparent',
//     curveType: 'function',
//     legend: 'none',
//     chartArea: {
//       height: '100%',
//       width: '100%',
//       top: 36,
//       left: 0,
//       right: 0,
//       bottom: 36
//     },
//     hAxis: {
//       baseline: 'number',
//       baselineColor: {
//         color: '#fff'
//       },
//       gridlines: {
//         color: 'transparent',
//         minSpacing: 20
//       }
//     },
//     vAxis: {
//       gridlines: {
//         color: 'transparent'
//       },
//       textPosition: 'none',
//       baselineColor: {
//         color: '#333'
//       },
//       maxValue: 100
//     }
//   };
//
//   let options2 = {
//     pieHole: 0.8,
//     backgroundColor: 'transparent',
//     width: '100%',
//     height: '100%',
//     legend: 'none',
//     slices: {
//       0: { color: '#2e45c2' },
//       1: { color: '#666' }
//     }
//   };
//
//
//
//   dataTable.addColumn({ type: 'string', id: 'day' });
//   dataTable.addColumn({ type: 'number', id: 'activity' });
//   dataTable.addRows(rowsData);
//
//   dataTable2.addColumn('number','percent');
//   dataTable2.addColumn('number','value');
//   dataTable2.addRows(rowsData2);
//
//   dataTable3.addColumn({type: 'string', id: 'Label'});
//   dataTable3.addColumn({type: 'number', id: 'Value'});
//   dataTable3.addRows([
//     ['Progress', 80],
//     ['Other', 20]
//   ]);
//
//   chart.draw(dataTable, options);
//   chart2.draw(dataTable2, options);
//   chart3.draw(dataTable3, options2);
// }
//
