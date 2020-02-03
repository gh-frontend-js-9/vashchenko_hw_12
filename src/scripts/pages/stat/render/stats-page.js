import {CreateElement} from "../../../func/createElement";
import {liteChart} from "../../../func/liteChart";
import {pieChart} from "../../../func/pie-chart";
import {elementToId} from "../../../func/elementToID";

let createElement = new CreateElement();

export function statsPageContent() {

  createElement.delete({id: 'content'});

  createElement.addNewElement(
    {id: 'content'},
    'div',
    {id: 'filter'},
    `<input id="filterByWeek" value="Week" type="button"/>
     <input id="filterByMonth" value="Month" type="button"/>
     `
  );

  createElement.addNewElement({id: 'content'}, 'div', {id: 'contentChart'}, '', {display: 'flex'});

  createElement.addNewElement(
    {id: 'content'},
    'div',
    {id: 'contentChart2'},
    `<div id="lineChart" style="min-height: 300px;"></div>`);

  createElement.addNewElement({id: 'contentChart'}, 'div', {id: 'viewsChartBlock1', 'class': 'chart--pie-block'});

  createElement.addNewElement({id: 'contentChart'}, 'div', {id: 'viewsChartBlock2', 'class': 'chart--pie-block'});

  createElement.addNewElement({id: 'contentChart'}, 'div', {id: 'viewsChartBlock3', 'class': 'chart--pie-block'});

  createElement.addNewElement({id: 'viewsChartBlock1'}, 'canvas', {id: 'viewsChart'});

  createElement.addNewElement({id: 'viewsChartBlock1'}, 'span', {id: 'viewsPercent', 'class': 'chart--pie-percent'});

  createElement.addNewElement({id: 'viewsChartBlock1'}, 'span', {id: 'viewsValue', 'class': 'chart--pie-value'});

  createElement.addNewElement({id: 'viewsChartBlock2'}, 'canvas', {id: 'visitorsChart',});

  createElement.addNewElement({id: 'viewsChartBlock2'}, 'span', {id: 'visitorsPercent', 'class': 'chart--pie-percent'});

  createElement.addNewElement({id: 'viewsChartBlock2'}, 'span', {id: 'visitorsValue', 'class': 'chart--pie-value'});

  createElement.addNewElement({id: 'viewsChartBlock3'}, 'canvas', {id: 'impressionsChart'});

  createElement.addNewElement({id: 'viewsChartBlock3'}, 'span', {
    id: 'impressionsPercent',
    'class': 'chart--pie-percent'
  });

  createElement.addNewElement({id: 'viewsChartBlock3'}, 'span', {id: 'impressionsValue', 'class': 'chart--pie-value'});

  createElement.addNewElement(
    {id: 'content'},
    'div',
    {'class': 'content'},
    `<h2 style="text-align: center; color: red;">Click on the table header for sorted by ...</h2>
<table class="table_sort">
    <thead id="statisticsHeaders">
        <tr>
            <th style="display: none; visibility: hidden;">Id</th>
            <th>Companies</th>
            <th>Time</th>
            <th>Views</th>
            <th>Visitors</th>
            <th>CTR</th>
            <th>CPC</th>
            <th>CPV</th>
            <th>CPM</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody id="statisticList"></tbody>
  </table>`
  );

  createElement.delete({id: 'lineChart'});
}


export function createCompanyList (data) {

  createElement.delete({id: 'statisticList'});

  let adsData;
  let dailyStatus;

  let viewsArr = [];
  let visitorsArr = [];
  let impressionArr = [];
  let viewsMaxValue = 0;
  let visitorsMaxValue = 0;
  let impressionMaxValue = 0;

  let aggregationLineChartData;
  let aggregData = [];
  let daysLineChartData = [];


  for (let i = 0; data.length > i; i++) {
    aggregationLineChartData = [];
    adsData = data[i];

    dailyStatus = adsData['daily_stats'];
    for (let j = 0; dailyStatus.length > j; j++) {
      if (dailyStatus[j]['views'] > viewsMaxValue) {
        viewsMaxValue = dailyStatus[j]['views'];
      }
      if (dailyStatus[j]['visitors'] > visitorsMaxValue) {
        visitorsMaxValue = dailyStatus[j]['visitors'];
      }
      if (dailyStatus[j]['impressions'] > impressionMaxValue) {
        impressionMaxValue = dailyStatus[j]['impressions'];
      }

      switch(dailyStatus[j]['weekday']) {
       case 1:
         daysLineChartData[j] = 'MON';
         break;
       case 2:
         daysLineChartData[j] = 'TUE';
         break;
       case 3:
         daysLineChartData[j] = 'WED';
         break;
       case 4:
         daysLineChartData[j] = 'THU';
         break;
       case 5:
         daysLineChartData[j] = 'FRI';
         break;
       case 6:
         daysLineChartData[j] = 'SAT';
         break;
       case 7:
         daysLineChartData[j] = 'SUN';
         break;
        default:
          daysLineChartData[j] = dailyStatus[j]['weekday'];
      }

      aggregationLineChartData.push(Math.round((dailyStatus[j]['views'] + dailyStatus[j]['visitors'] + dailyStatus[j]['impressions']) / 3));
      viewsArr.push(dailyStatus[j]['views']);
      visitorsArr.push(dailyStatus[j]['visitors']);
      impressionArr.push(dailyStatus[j]['impressions']);
      aggregData[i] = aggregationLineChartData;
    }

    createElement.addNewElement(
    {id:'statisticList'},
    'tr',
      {'data-item': i, 'class': 'ads'},
    `<td style="display: none; visibility: hidden;">${adsData['_id']}</td>
      <td>${adsData['name']}</td>
      <td>${adsData['time']}</td>
      <td>${adsData['views']}</td>
      <td>${adsData['visitors']}</td>
      <td>${adsData['ctr']}</td>
      <td>$${adsData['cpc'].toFixed(2)}</td>
      <td>$${adsData['cpv'].toFixed(2)}</td>
      <td>$${adsData['cpm'].toFixed(2)}</td>
      <td>${adsData['status']}</td>`
    )
  }

  console.log(aggregData);

  // Temporary display data first day
  pieChart('viewsChart', 'viewsPercent', 'viewsValue', 'Views', ( viewsArr[0] / viewsMaxValue) * 100, viewsArr[0], 10, 30);
  pieChart('visitorsChart', 'visitorsPercent', 'visitorsValue', 'Visitors', ( visitorsArr[0] / visitorsMaxValue) * 100, visitorsArr[0], 10, 30);
  pieChart('impressionsChart', 'impressionsPercent', 'impressionsValue', 'Impressions', ( impressionArr[0] / impressionMaxValue) * 100, impressionArr[0], 10, 30);

  lineChart(daysLineChartData, aggregData[0]);
}


// Sorted data in the table
document.addEventListener('click', () => {
  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(['en'], { numeric: true });
    const comparator = (index, order) => (a, b) => order * collator.compare(
      a.children[index].innerHTML,
      b.children[index].innerHTML
    );
    for(const tBody of target.closest('table').tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));
    for(const cell of target.parentNode.cells)
      cell.classList.toggle('sorted', cell === target);
  };

  document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', () => getSort(event)));
});

// Line chart Params
let paramLineChart =new liteChart("chart", {
  animate: {
    show: true,
    duration: 1,
  },
  legends: {
    table: {
      show: false
    }
  },
  line: {
    width: 3,
    style: "curve",
    shadow: true,
    dasharray: null,
  },
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  gridX: {
    show: false,
    label: {
      show: true
    },
  },
});

// Line chart Data
function lineChart (label, aggregationData) {
  createElement.delete({id: 'lineChart'});

  paramLineChart.setLabels(label);
  paramLineChart.addLegend({"name": "Day", "stroke": "#2196f3", "values": aggregationData});

  let out = elementToId("lineChart");
  paramLineChart.inject(out);

  paramLineChart.draw();
}
