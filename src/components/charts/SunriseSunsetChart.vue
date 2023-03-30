<template>
    <div class="card card-rounded sunrisesunset">
        <div class="card-body">
            <div class="d-sm-flex justify-content-between align-items-start">
                <div>
                    <h4 class="card-title card-title-dash">{{ title }}</h4>
                    <h5 class="card-subtitle card-subtitle-dash">{{ subTitle }}</h5>
                </div>
                <div>
                    <div class="dropdown">
                        <select class="btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0 pe-1" @change="switchSelect($event)">
                            <option value="Day">Day</option>
                            <option value="Sunrise">Sunrise</option>
                            <option value="Sunset">Sunset</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="d-sm-flex align-items-center mt-1 justify-content-between">
                <div class="flex-sm-column align-items-center justify-content-between sundaily">
                    <h3>Today</h3>
                    <h4 class="me-2 fw-normal">Sunrise: <strong>{{ formattedSunrise }}</strong></h4>
                    <h4 class="me-2 fw-normal">Sunset: <strong>{{ formattedSunset }}</strong></h4>
                </div>
                <div class="me-3">
                    <div id="marketing-overview-legend"></div>
                </div>
            </div>
            <div class="chartjs-bar-wrapper mt-3">
                <canvas id="marketingOverview"></canvas>
            </div>
        </div>
    </div>

</template>

<script>
import { myMixins } from '../mixins/myMixins.js'
export default {
    mixins: [myMixins],
    data () {
        return {
            title: 'Sun Profile',
            subTitle: 'One weeks worth of sunrise and sunset data',
            weatherData: [],
            formattedSunrise: '',
            formattedSunset: ''
            
        }
    }, 
    name: 'SunriseSunsetChart',
    created () {
    },
    mounted () {
        this.drawChart();
        this.todaysSunsetSunrise();
    },
    methods: {
        switchSelect(evt) {
            this.selected = evt.target.value
            if (this.selected ==='Sunrise') {
                this.drawChart('sunrise');
            } else if (this.selected ==='Sunset') {
                this.drawChart('sunset');
            } else if (this.selected ==='Day') {
                this.drawChart('day');
            }
        },

        async drawChart(timePeriod) {
            console.info('%ctimePeriod: %o', 'color: red;font-size:12px', timePeriod);
            
            if ($("#marketingOverview").length) {
                
                let data = await this.$store.getters.getWeatherData;

                let salesData = {
                    labels: [],
                    sunrise: {
                        label: "Sunrise",
                        data: []
                    },
                    sunset: {
                        label: "Sunset",
                        data: []
                    },
                };
                
                let week = [];
                let sunriseData = [];
                let sunsetData = [];
                let UNIX_timestamp = 0;
                let gotTime = 0;
                
                data.daily.forEach((d) =>{
                    var date = new Date(d.dt * 1000);
                    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
                    week.push(weekday);
                    
                    UNIX_timestamp = new Date((d.sunrise) * 1000);
                    gotTime = this.getTimeConverter(UNIX_timestamp); // mixin
                    sunriseData.push(gotTime);
                    
                    UNIX_timestamp = new Date((d.sunset) * 1000);
                    gotTime = this.getTimeConverter(UNIX_timestamp); // mixin
                    sunsetData.push(gotTime);
                });
                
                
                salesData.labels = week;
                salesData.sunrise.data = sunriseData;
                salesData.sunset.data = sunsetData;
                
                var marketingOverviewChart = document.getElementById("marketingOverview").getContext("2d");
                var marketingOverviewData = {
                    labels: salesData.labels,
                    datasets: [],
                };
                
                const sunrise = {label: salesData.sunrise.label, data: salesData.sunrise.data, backgroundColor: "#52CDFF", borderColor: ["#52CDFF"], borderWidth: 0, fill: true }
                const sunset = {label: salesData.sunset.label, data: salesData.sunset.data, backgroundColor: "#1F3BB3", borderColor: ["#1F3BB3"], borderWidth: 0, fill: true}
                
                if (timePeriod==='sunrise') {
                    marketingOverviewData.datasets.push(sunrise)
                } else if (timePeriod==='sunset') {
                    marketingOverviewData.datasets.push(sunset)
                } else {
                    marketingOverviewData.datasets.push(sunrise)
                    marketingOverviewData.datasets.push(sunset)
                }
                
                console.info('%cmarketingOverviewData: %o', 'color: red;font-size:12px', marketingOverviewData);

                var marketingOverviewOptions = {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                gridLines: {
                                    display: true,
                                    drawBorder: false,
                                    color: "#F0F0F0",
                                    zeroLineColor: "#F0F0F0",
                                },
                                ticks: {
                                    beginAtZero: true,
                                    autoSkip: true,
                                    maxTicksLimit: 5,
                                    fontSize: 10,
                                    color: "#6B778C",
                                },
                            },
                        ],
                        xAxes: [
                            {
                                stacked: true,
                                barPercentage: 0.35,
                                gridLines: {
                                    display: false,
                                    drawBorder: false,
                                },
                                ticks: {
                                    beginAtZero: false,
                                    autoSkip: true,
                                    maxTicksLimit: 12,
                                    fontSize: 10,
                                    color: "#6B778C",
                                },
                            },
                        ],
                    },
                    legend: false,
                    legendCallback: function (chart) {
                        var text = [];
                        text.push('<div class="chartjs-legend"><ul>');
                        for (var i = 0; i < chart.data.datasets.length; i++) {
                            text.push('<li class="text-muted text-small">');
                            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + "</span>");
                            text.push(chart.data.datasets[i].label);
                            text.push("</li>");
                        }
                        text.push("</ul></div>");
                        return text.join("");
                    },

                    elements: {
                        line: {
                            tension: 0.4,
                        },
                    },
                    tooltips: {
                        backgroundColor: "rgba(31, 59, 179, 1)",
                    },
                };
                var marketingOverview = new Chart(marketingOverviewChart, {
                    type: "bar",
                    data: marketingOverviewData,
                    options: marketingOverviewOptions,
                });
                document.getElementById("marketing-overview-legend").innerHTML = marketingOverview.generateLegend();
            }
        },
        async todaysSunsetSunrise() {
            let data = await this.$store.getters.getWeatherData;
            this.weatherData = data['current'];
            
            this.formattedSunrise = this.formatTime(this.weatherData.sunrise)
            this.formattedSunset = this.formatTime(this.weatherData.sunset)
            
        },

    }
}
</script>
<style lang="scss">
.sunrisesunset {
    .sundaily {
        background-color: #DDF4FE;
        padding:10px;
        border-radius: 6px;
        h3 {
            font-size:13px;
            font-weight: bold;
        }
        h4 {
            font-size:12px;
            margin-right: 0 !important;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}

</style>