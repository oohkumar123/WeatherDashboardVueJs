<template>
    <div class="card bg-primary card-rounded stats">
        <div class="card-body pb-0">
            <h4 class="card-title card-title-dash text-white mb-2">Location Summary</h4>
            <div class="row">
                <div class="col-sm-6 stat-numbers">
                    <p>Latitude: <span>{{ latitude }}</span></p>
                    <p>Longitude: <span>{{ longitude }}</span></p>
                </div>
                <div class="col-sm-6 stat-numbers">
                    <p>Timezone: <span>{{ timezone }}</span></p>
                    <p>Timezone Offset: <span>{{ timezone_offset }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "StatsChart",
    props: [],
    data() {
        return {
            latitude: 25,
            longitude: 25,
            timezone: 25,
            timezone_offset: 25
        };
    },
    mounted () {
        this.drawChart();
    },
    methods: {
        async drawChart () {
            let data = await this.$store.getters.getWeatherData;
            this.latitude = data.lat
            this.longitude = data.lon
            this.timezone = data.timezone
            this.timezone_offset = (data.timezone_offset / 3600) + ' hours'
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card.stats {
    display:flex;
    .card-title.card-title-dash {
        font-size: 20px;
        margin-bottom: 2px;
    }
    .stat-numbers {
        p {
            color: white;
            font-size: 14px;
            &:last-child {
                margin-bottom: 0;
            }
            span {
                display:block;
                font-weight: bold;
            }
        }
    }
}
</style>
