<template>
	<!-- COMPONENT:PerformanceLineChart -->
    <div class="card card-rounded">
        <div class="card-body">
            <div class="d-sm-flex justify-content-between align-items-start">
                <div>
                    <h4 class="card-title card-title-dash">
                        Daily Temperature
                    </h4>
                    <h5 class="card-subtitle card-subtitle-dash">
                        Keeping track of upcoming temperatures
                    </h5>
                </div>
                <div id="performance-line-legend"></div>
            </div>
            <div class="chartjs-wrapper mt-5">
                <canvas id="performaneLine"></canvas>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "PerformanceLineChart",
    props: [],
    data() {
        return {};
    },
    mounted () {
        this.drawChart();
    },
    methods: {
        async drawChart() {
            let data = await this.$store.getters.getWeatherData;
            let salesData = {
                labels: [],
                thisWeek: {
                    label: "Daily Highs",
                    data: []
                },
                lastWeek: {
                    label: "Daily Lows",
                    data: []
                },
            };
            let week = [];
            let thisWeekData = [];
            let lastWeekData = [];
            
            data.daily.forEach((d) =>{
            
                var date = new Date(d.dt * 1000);
                let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()]
                week.push(weekday);
                
                thisWeekData.push(d.temp.max);
                lastWeekData.push(d.temp.min);
            
            });
            salesData.labels = week;
            salesData.thisWeek.data = thisWeekData;
            salesData.lastWeek.data = lastWeekData;
            
            var graphGradient = document.getElementById("performaneLine").getContext("2d");
            var graphGradient2 = document.getElementById("performaneLine").getContext("2d");
            var saleGradientBg = graphGradient.createLinearGradient(5, 0, 5, 100);
            saleGradientBg.addColorStop(0, "rgba(26, 115, 232, 0.18)");
            saleGradientBg.addColorStop(1, "rgba(26, 115, 232, 0.02)");
            var saleGradientBg2 = graphGradient2.createLinearGradient(100, 0, 50, 150);
            saleGradientBg2.addColorStop(0, "rgba(0, 208, 255, 0.19)");
            saleGradientBg2.addColorStop(1, "rgba(0, 208, 255, 0.03)");
            var salesTopData = {
                labels: salesData.labels,
                datasets: [
                    {
                        label: salesData.thisWeek.label,
                        data: salesData.thisWeek.data,
                        backgroundColor: saleGradientBg,
                        borderColor: ["#1F3BB3"],
                        borderWidth: 1.5,
                        fill: true, // 3: no fill
                        pointBorderWidth: 1,
                        pointRadius: [4, 4, 4, 4, 4, 4, 4],
                        pointHoverRadius: [4, 4, 4, 4, 4, 4, 4],
                        pointBackgroundColor: ["#1F3BB3)", "#1F3BB3", "#1F3BB3", "#1F3BB3", "#1F3BB3)", "#1F3BB3", "#1F3BB3", "#1F3BB3", "#1F3BB3)", "#1F3BB3", "#1F3BB3", "#1F3BB3", "#1F3BB3)"],
                        pointBorderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
                    },
                    {
                        label: salesData.lastWeek.label,
                        data: salesData.lastWeek.data,
                        backgroundColor: saleGradientBg2,
                        borderColor: ["#52CDFF"],
                        borderWidth: 1.5,
                        fill: true, // 3: no fill
                        pointBorderWidth: 1,
                        pointRadius: [4, 4, 4, 4, 4, 4, 4],
                        pointHoverRadius: [4, 4, 4, 4, 4, 4, 4],
                        pointBackgroundColor: ["#52CDFF)", "#52CDFF", "#52CDFF", "#52CDFF", "#52CDFF)", "#52CDFF", "#52CDFF", "#52CDFF", "#52CDFF)", "#52CDFF", "#52CDFF", "#52CDFF", "#52CDFF)"],
                        pointBorderColor: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
                    },
                ],
            };

            var salesTopOptions = {
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
                                beginAtZero: false,
                                autoSkip: true,
                                maxTicksLimit: 4,
                                fontSize: 10,
                                color: "#6B778C",
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            ticks: {
                                beginAtZero: false,
                                autoSkip: true,
                                maxTicksLimit: 7,
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
                        text.push("<li>");
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
            var salesTop = new Chart(graphGradient, {
                type: "line",
                data: salesTopData,
                options: salesTopOptions,
            });
            document.getElementById("performance-line-legend").innerHTML = salesTop.generateLegend();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
