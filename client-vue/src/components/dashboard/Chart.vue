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
    symbol: "",
    historyForSymbol: {}
  },
  components: {
    GChart
  },
  data() {
    return {
      chartOptions: {
        title: "Stock History",
        'width':800,
        'height':500,
        curveType: 'function', // none
        legend: { position: 'bottom' }
      }
    };
  },
  methods: {
    onChartReady(chart, google) {
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
      var data = google.visualization.arrayToDataTable(result);
      chart.draw(data, this.chartOptions);
    }
  }
};
</script>

<style scoped>
</style>
