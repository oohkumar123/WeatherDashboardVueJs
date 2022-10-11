<template>
    <div class="container-scroller">
        
		<NavBar></NavBar>

		<div class="container-fluid page-body-wrapper">
			
			<RightSideBar></RightSideBar>
            
			<SideBar></SideBar>

            <MainPanel></MainPanel>
        
		</div>
    
	</div>
</template>

<script>
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar.vue";
import RightSideBar from "../components/RightSideBar.vue";
import MainPanel from "../components/MainPanel.vue";

export default {
    name: "HomeView",
    components: {
		NavBar,
		SideBar,
		RightSideBar,
		MainPanel
	},
};
</script>
<style lang="scss">
.page-body-wrapper {
    padding-top: 0;
}
</style>
