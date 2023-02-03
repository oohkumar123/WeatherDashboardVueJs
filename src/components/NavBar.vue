<template>
    <!-- COMPONENT:navbar -->
    <nav class="weather-navbar d-flex align-items-top content-wrapper justify-content-between border-bottom border-top border-4">
        <div>
            <h1 class="p-0">Weather Information Daily</h1>
        </div>
        <div>
            <ul class="navbar-nav">
                <li class="nav-item align-items-start d-flex vstack">
                    <h4 class="welcome-text pb-2">Good Morning, <span class="text-black fw-bold">{{ getName () }}</span></h4>
                    <h4 class="welcome-sub-text">Your performance summary this week</h4>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    props: {},
    methods: {
        getName () {
            return this.$store.getters.myName;
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
