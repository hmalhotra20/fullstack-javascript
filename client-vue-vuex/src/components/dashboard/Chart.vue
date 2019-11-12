<template>
  <div class="w3-container">
    <div v-if="historyForSymbol">
      <GChart type="LineChart" @ready="onChartReady" />
    </div>
  </div>
</template>

<script>
import { GChart, google } from "vue-google-charts";
var _ = require("lodash");

export default {
  name: "chart",
  props: {
    historyForSymbol : null
  },
  components: {
    GChart
  },
  data() {
    return {
      chartOptions: {
        title: "Stock History",
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        'width':800,
        'height':500,
        curveType: 'function', // none
        legend: { position: 'bottom' }
      }
    };
  },
  methods: {
    onChartReady(chart, google) {
      if(this.historyForSymbol)  {
        var result = _.map(this.historyForSymbol, function(obj, key) {
          return [
            key,
            Number(obj.open),
            Number(obj.close),
            Number(obj.low),
            Number(obj.high)
          ];
        });
        result.splice(0, 0, ["Day", "Open", "Close", "Low", "High"]);

        /*
        google.charts.load('current', {packages: ['corechart', 'line']});
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Day');
        data.addColumn('number', 'Open');
        data.addColumn('number', 'Close');
        data.addColumn('number', 'Low');
        data.addColumn('number', 'High');
        data.addRows(result);
        */

        var data = google.visualization.arrayToDataTable(result);
        if(data)
          chart.draw(data, this.chartOptions);
      }
    }
  }
};
</script>

<style scoped>
</style>
