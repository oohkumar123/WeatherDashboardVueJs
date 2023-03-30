<template>
    <!-- COMPONENT:MainPanel -->
    <div class="main-panel">
        <div class="content-wrapper">
            <div class="row">
                <div class="col-sm-12">
                    <div class="home-tab">
                        <div class="tab-content tab-content-basic">
                            <div class="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview">
                                <div class="row current-weather">
                                    <div class="col-sm-12">
                                        <DailyWeatherChart></DailyWeatherChart>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 d-flex flex-column">
                                        <div class="row flex-grow">
                                            <div class="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
                                                <PerformanceLineChart></PerformanceLineChart>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 d-flex flex-column">
                                        <div class="row flex-grow">
                                            <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                                                <StatsChart></StatsChart>
                                            </div>
                                            <div class="col-md-6 col-lg-12 grid-margin stretch-card">
                                                <div class="card card-rounded">
                                                    <div class="card-body">
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <div class="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                                                                    <div class="circle-progress-width">
                                                                        <div id="totalVisitors" class="progressbar-js-circle pr-2"></div>
                                                                    </div>
                                                                    <div>
                                                                        <p class="text-small mb-2">Total Visitors</p>
                                                                        <h4 class="mb-0 fw-bold">26.80%</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <div class="d-flex justify-content-between align-items-center">
                                                                    <div class="circle-progress-width">
                                                                        <div id="visitperday" class="progressbar-js-circle pr-2"></div>
                                                                    </div>
                                                                    <div>
                                                                        <p class="text-small mb-2">Visits per day</p>
                                                                        <h4 class="mb-0 fw-bold">9065</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 d-flex flex-row grid-margin">
                                        <div class="row flex-grow">
                                            <SunriseSunsetChart></SunriseSunsetChart>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 d-flex flex-row">
                                        <div class="row flex-grow">
                                            <ToDoList></ToDoList>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
                <span class="text-muted text-center text-sm-left d-block d-sm-inline-block"
                    >Premium
                    <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap admin template</a>
                    from BootstrapDash.</span
                >
                <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved.</span>
            </div>
        </footer>
        <!-- partial -->
    </div>
</template>

<script>
import PerformanceLineChart from "./charts/PerformanceLineChart";
import DailyWeatherChart from "./charts/DailyWeatherChart";
import StatsChart from "./charts/StatsChart";
import ToDoList from "./todo_components/ToDoList";
import SunriseSunsetChart from './charts/SunriseSunsetChart';

export default {
    name: "MainPanel",
    data() {
        return {};
    },
    props: {},
    components: {
        PerformanceLineChart,
        ToDoList,
        DailyWeatherChart,
        StatsChart,
        SunriseSunsetChart
    },
    mounted() {},
    methods: {}
};
</script>

<style scoped lang="scss">
.main-panel {
    width: 100%;
    min-height: calc(100vh - 97px);
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
}

</style>
