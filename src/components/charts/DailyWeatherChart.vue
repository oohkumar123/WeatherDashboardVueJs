<template>
    <div class="statistics-details d-flex align-items-center justify-content-between">
        <div>
            <p class="statistics-title">Clouds</p>
            <h3 class="rate-percentage">{{ this.weatherData.clouds }}%</h3>
            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>-0.5%</span></p>
        </div>
        <div>
            <p class="statistics-title">Dew Point</p>
            <h3 class="rate-percentage">{{ this.weatherData.dew_point }}c</h3>
            <p class="text-success d-flex"><i class="mdi mdi-menu-up"></i><span>+0.1%</span></p>
        </div>
        <div>
            <p class="statistics-title">Humidity</p>
            <h3 class="rate-percentage">{{ this.weatherData.humidity }}</h3>
            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>68.8</span></p>
        </div>
        <div class="d-none d-md-block">
            <p class="statistics-title">Sunrise</p>
            <h3 class="rate-percentage">{{ this.weatherData.formattedSunrise }}</h3>
            <p class="text-success d-flex"><i class="mdi mdi-menu-down"></i><span>+0.8%</span></p>
        </div>
        <div class="d-none d-md-block">
            <p class="statistics-title">Sunset</p>
            <h3 class="rate-percentage">{{ this.weatherData.formattedSunset }}</h3>
            <p class="text-danger d-flex"><i class="mdi mdi-menu-down"></i><span>68.8</span></p>
        </div>
        <div class="d-none d-md-block">
            <p class="statistics-title">Temperature</p>
            <h3 class="rate-percentage">{{ this.weatherData.temp }}</h3>
            <p class="text-success d-flex"><i class="mdi mdi-menu-down"></i><span>+0.8%</span></p>
        </div>
    </div>
</template>

<script>

export default {
    name: "PerformanceLineChart",
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
            let timezone_offset = data['timezone_offset'];
            
            let UNIX_timestamp = new Date((this.weatherData.sunrise - timezone_offset) * 1000);
            this.weatherData.formattedSunrise = this.timeConverter(UNIX_timestamp)
            
            UNIX_timestamp = new Date((this.weatherData.sunset - timezone_offset) * 1000);
            this.weatherData.formattedSunset = this.timeConverter(UNIX_timestamp)
       },
       timeConverter(UNIX_timestamp){
            let a = new Date(UNIX_timestamp);
            let hour = a.getHours();
            let min = a.getMinutes();
            let time = hour + ':' + min;
            return time;
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

