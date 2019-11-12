<template>
  <div class="w3-panel w3-round">
    <header class="w3-container w3-black">
      <h4>
        Stocks with Prices for
        <span class="w3-text-deep-orange">[{{ registeredSymbols.toString() }}]</span>
      </h4>
    </header>
    <div class="w3-container">
      <div class="w3-row w3-padding-32" v-for="data in realtimeDataForSymbols"
          v-bind:key="data.symbol">
        <div class="w3-third w3-small w3-border w3-padding" style>
          <div
            class="w3-button w3-black"
            style="margin-left: 100px;font-weight: bold;"
          >{{ data.name }}</div>
          <br />
          <br />
          <div class="w3-container w3-row"
            style="padding-right: 40px;"
            v-for="(value, key)  in data" v-bind:key="key">
            <div class="w3-text-blue w3-half" style="text-align: right;">{{ key }} :</div>
            <div class="w3-text-green w3-half">: {{ data[key] }}</div>
          </div>
        </div>
        <div class="w3-half w3-small w3-center">
          <chart :symbol="data.symbol" v-bind:historyForSymbol="historicalData[data.symbol]"></chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { GChart } from "vue-google-charts";
import chart from "./Chart.vue";

export default {
  name: "Dashboard",
  props: {},
  components: {
    chart
  },
  created() {

  },
  data() {
    return {
      registeredSymbols: [],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      }
    };
  },
  asyncComputed: {
    realtimeDataForSymbols : async function(state)  {
      var result = await axios.post("http://localhost:3000/api/stocks/price", { symbols: this.registeredSymbols });
      return result.data;
    },
    historicalData: async function(state)  {
      var historyObj = {};
      for (let symbol of this.registeredSymbols) {
        var response = await axios.get("http://localhost:3000/api/stocks?symbol=" + symbol);
        historyObj[response.data.name] = response.data.history;
      }
      //console.log('historicalData: ', historyObj);
      return historyObj;
    }
  },
  mounted() {
    this.loadSymbols();
  },
  watch: {
    registeredSymbols: function(oldVal, newVal)  {
        //console.log("Value changed to : ", newVal);
    }

  },
  methods: {
    loadSymbols: function() {
      var result = axios.get("http://localhost:3000/api/stocks/selected")
      .then(res=>{
        this.registeredSymbols = res.data;
        return res.data;
      });

    }
  }

}
</script>

<style scoped>
</style>
