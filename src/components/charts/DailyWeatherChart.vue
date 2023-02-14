<template>
    <div class="statistics-details d-flex align-items-center justify-content-between" style="padding:20px;border-radius: 20px; background-color: white;">
        <div>
            <p class="statistics-title">Clouds</p>
            <h3 class="rate-percentage">{{ this.weatherData.clouds }}%</h3>
        </div>
        <div>
            <p class="statistics-title">Dew Point</p>
            <h3 class="rate-percentage">{{ this.weatherData.dew_point }}c</h3>
        </div>
        <div>
            <p class="statistics-title">Humidity</p>
            <h3 class="rate-percentage">{{ this.weatherData.humidity }}</h3>
        </div>
        <div class="d-none d-md-block">
            <p class="statistics-title">Sunrise</p>
            <h3 class="rate-percentage">{{ this.weatherData.formattedSunrise }}</h3>
        </div>
        <div class="d-none d-md-block">
            <p class="statistics-title">Sunset</p>
            <h3 class="rate-percentage">{{ this.weatherData.formattedSunset }}</h3>
        </div>
        <div class="d-none d-md-block">
            <p class="statistics-title">Temperature</p>
            <h3 class="rate-percentage">{{ this.weatherData.temp }}</h3>
        </div>
    </div>
</template>

<script>
import { myMixins } from '../mixins/myMixins.js'

export default {
    name: "PerformanceLineChart",
    mixins: [myMixins],
    props: [],
    data() {
        return {
            weatherData: []
        };
    },
    mounted () {
        this.drawChart();
    },
    methods: {
        async drawChart() {
            let data = await this.$store.getters.getWeatherData;
            this.weatherData = data['current'];
            this.weatherData.formattedSunrise = this.formatTime(this.weatherData.sunrise) // mixin
            this.weatherData.formattedSunset = this.formatTime(this.weatherData.sunset)// mixin
       }
    }
};
</script>

<style lang="scss">
.home-tab .statistics-details .statistics-title {
    // font-style: normal;
    // font-weight: 500;
    font-size: 22px;
    // line-height: 18px;
    // color: #8D8D8D;
    // margin-bottom: 4px;
}
</style>

