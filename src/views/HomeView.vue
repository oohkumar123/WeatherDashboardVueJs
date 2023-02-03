<template>
    <div class="container-scroller">
        
		<NavBar></NavBar>

		<div class="container-fluid page-body-wrapper">
			
            <MainPanel></MainPanel>
        
		</div>
    
	</div>
</template>

<script>
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import MainPanel from "../components/MainPanel";

export default {
    name: "HomeView",
    components: {
		NavBar,
		SideBar,
		MainPanel
	},
};
</script>
<style lang="scss">
.page-body-wrapper {
    padding-top: 0;
}
</style>
