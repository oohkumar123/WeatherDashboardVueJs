(function(){"use strict";var t={8271:function(t,e,a){var s=a(9242),i=a(3396);const r=(0,i.Uk)("Home"),n=(0,i.Uk)(" | "),o=(0,i.Uk)("About");function l(t,e){const a=(0,i.up)("router-link"),s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",null,[(0,i.Wm)(a,{to:"/"},{default:(0,i.w5)((()=>[r])),_:1}),n,(0,i.Wm)(a,{to:"/about"},{default:(0,i.w5)((()=>[o])),_:1})]),(0,i.Wm)(s)],64)}var d=a(89);const c={},u=(0,d.Z)(c,[["render",l]]);var m=u,h=a(2483);const f={class:"container-scroller"},p={class:"container-fluid page-body-wrapper"};function v(t,e,a,s,r,n){const o=(0,i.up)("NavBar"),l=(0,i.up)("MainPanel");return(0,i.wg)(),(0,i.iD)("div",f,[(0,i.Wm)(o),(0,i._)("div",p,[(0,i.Wm)(l)])])}var g=a(7139);const b={class:"weather-navbar d-flex align-items-top content-wrapper justify-content-between border-bottom border-top border-4"},w=(0,i._)("div",null,[(0,i._)("h1",{class:"p-0"},"Weather Information Daily")],-1),y={class:"navbar-nav"},_={class:"nav-item align-items-start d-flex vstack"},D={class:"welcome-text pb-2"},k=(0,i.Uk)("Good Morning, "),C={class:"text-black fw-bold"},x=(0,i._)("h4",{class:"welcome-sub-text"},"Your performance summary this week",-1);function F(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("nav",b,[w,(0,i._)("div",null,[(0,i._)("ul",y,[(0,i._)("li",_,[(0,i._)("h4",D,[k,(0,i._)("span",C,(0,g.zw)(n.getName()),1)]),x])])])])}var S={name:"NavBar",props:{},methods:{getName(){return this.$store.getters.myName}}};const T=(0,d.Z)(S,[["render",F]]);var B=T;const L={class:"sidebar sidebar-offcanvas",id:"sidebar"},z=(0,i.uE)('<ul class="nav"><li class="nav-item"><a class="nav-link" href="index.html"><i class="mdi mdi-grid-large menu-icon"></i><span class="menu-title">Dashboard</span></a></li><li class="nav-item nav-category">UI Elements</li><li class="nav-item"><a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic"><i class="menu-icon mdi mdi-floor-plan"></i><span class="menu-title">UI Elements</span><i class="menu-arrow"></i></a><div class="collapse" id="ui-basic"><ul class="nav flex-column sub-menu"><li class="nav-item"><a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li><li class="nav-item"><a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li><li class="nav-item"><a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li></ul></div></li><li class="nav-item nav-category">Forms and Datas</li><li class="nav-item"><a class="nav-link" data-bs-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements"><i class="menu-icon mdi mdi-card-text-outline"></i><span class="menu-title">Form elements</span><i class="menu-arrow"></i></a><div class="collapse" id="form-elements"><ul class="nav flex-column sub-menu"><li class="nav-item"><a class="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li></ul></div></li><li class="nav-item"><a class="nav-link" data-bs-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts"><i class="menu-icon mdi mdi-chart-line"></i><span class="menu-title">Charts</span><i class="menu-arrow"></i></a><div class="collapse" id="charts"><ul class="nav flex-column sub-menu"><li class="nav-item"><a class="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li></ul></div></li><li class="nav-item"><a class="nav-link" data-bs-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables"><i class="menu-icon mdi mdi-table"></i><span class="menu-title">Tables</span><i class="menu-arrow"></i></a><div class="collapse" id="tables"><ul class="nav flex-column sub-menu"><li class="nav-item"><a class="nav-link" href="pages/tables/basic-table.html">Basic table</a></li></ul></div></li><li class="nav-item"><a class="nav-link" data-bs-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons"><i class="menu-icon mdi mdi-layers-outline"></i><span class="menu-title">Icons</span><i class="menu-arrow"></i></a><div class="collapse" id="icons"><ul class="nav flex-column sub-menu"><li class="nav-item"><a class="nav-link" href="pages/icons/mdi.html">Mdi icons</a></li></ul></div></li><li class="nav-item nav-category">pages</li><li class="nav-item"><a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth"><i class="menu-icon mdi mdi-account-circle-outline"></i><span class="menu-title">User Pages</span><i class="menu-arrow"></i></a><div class="collapse" id="auth"><ul class="nav flex-column sub-menu"><li class="nav-item"><a class="nav-link" href="pages/samples/login.html"> Login </a></li></ul></div></li><li class="nav-item nav-category">help</li><li class="nav-item"><a class="nav-link" href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html"><i class="menu-icon mdi mdi-file-document"></i><span class="menu-title">Documentation</span></a></li></ul>',1),W=[z];function j(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("nav",L,W)}var A={name:"SideBar",props:{}};const I=(0,d.Z)(A,[["render",j]]);var M=I;const O={class:"main-panel"},P={class:"content-wrapper"},E={class:"row"},U={class:"col-sm-12"},H={class:"home-tab"},Z={class:"tab-content tab-content-basic"},V={class:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"overview"},R={class:"row current-weather"},N={class:"col-sm-12"},J={class:"row"},K={class:"col-lg-8 d-flex flex-column"},X={class:"row flex-grow"},Y={class:"col-12 col-lg-4 col-lg-12 grid-margin stretch-card"},G={class:"col-lg-4 d-flex flex-column"},q={class:"row flex-grow"},Q={class:"col-md-6 col-lg-12 grid-margin stretch-card"},tt=(0,i.uE)('<div class="col-md-6 col-lg-12 grid-margin stretch-card" data-v-41f15da2><div class="card card-rounded" data-v-41f15da2><div class="card-body" data-v-41f15da2><div class="row" data-v-41f15da2><div class="col-sm-6" data-v-41f15da2><div class="d-flex justify-content-between align-items-center mb-2 mb-sm-0" data-v-41f15da2><div class="circle-progress-width" data-v-41f15da2><div id="totalVisitors" class="progressbar-js-circle pr-2" data-v-41f15da2></div></div><div data-v-41f15da2><p class="text-small mb-2" data-v-41f15da2>Total Visitors</p><h4 class="mb-0 fw-bold" data-v-41f15da2>26.80%</h4></div></div></div><div class="col-sm-6" data-v-41f15da2><div class="d-flex justify-content-between align-items-center" data-v-41f15da2><div class="circle-progress-width" data-v-41f15da2><div id="visitperday" class="progressbar-js-circle pr-2" data-v-41f15da2></div></div><div data-v-41f15da2><p class="text-small mb-2" data-v-41f15da2>Visits per day</p><h4 class="mb-0 fw-bold" data-v-41f15da2>9065</h4></div></div></div></div></div></div></div>',1),et={class:"row"},at={class:"col-lg-12 d-flex flex-row grid-margin"},st={class:"row flex-grow"},it={class:"col-lg-12 d-flex flex-row"},rt={class:"row flex-grow"},nt=(0,i.uE)('<footer class="footer" data-v-41f15da2><div class="d-sm-flex justify-content-center justify-content-sm-between" data-v-41f15da2><span class="text-muted text-center text-sm-left d-block d-sm-inline-block" data-v-41f15da2>Premium <a href="https://www.bootstrapdash.com/" target="_blank" data-v-41f15da2>Bootstrap admin template</a> from BootstrapDash.</span><span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center" data-v-41f15da2>Copyright © 2021. All rights reserved.</span></div></footer>',1);function ot(t,e,a,s,r,n){const o=(0,i.up)("DailyWeatherChart"),l=(0,i.up)("PerformanceLineChart"),d=(0,i.up)("StatsChart"),c=(0,i.up)("SunriseSunsetChart"),u=(0,i.up)("ToDoList");return(0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("div",P,[(0,i._)("div",E,[(0,i._)("div",U,[(0,i._)("div",H,[(0,i._)("div",Z,[(0,i._)("div",V,[(0,i._)("div",R,[(0,i._)("div",N,[(0,i.Wm)(o)])]),(0,i._)("div",J,[(0,i._)("div",K,[(0,i._)("div",X,[(0,i._)("div",Y,[(0,i.Wm)(l)])])]),(0,i._)("div",G,[(0,i._)("div",q,[(0,i._)("div",Q,[(0,i.Wm)(d)]),tt])])]),(0,i._)("div",et,[(0,i._)("div",at,[(0,i._)("div",st,[(0,i.Wm)(c)])]),(0,i._)("div",it,[(0,i._)("div",rt,[(0,i.Wm)(u)])])])])])])])])]),nt])}const lt={class:"card card-rounded"},dt=(0,i.uE)('<div class="card-body"><div class="d-sm-flex justify-content-between align-items-start"><div><h4 class="card-title card-title-dash"> Daily Temperatures </h4><h5 class="card-subtitle card-subtitle-dash"> Keeping track of upcoming temperatures </h5></div><div id="performance-line-legend"></div></div><div class="chartjs-wrapper mt-5"><canvas id="performaneLine"></canvas></div></div>',1),ct=[dt];function ut(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",lt,ct)}a(7658);var mt={name:"PerformanceLineChart",props:[],data(){return{}},mounted(){this.drawChart()},methods:{async drawChart(){let t=await this.$store.getters.getWeatherData,e={labels:[],thisWeek:{label:"Daily Highs",data:[]},lastWeek:{label:"Daily Lows",data:[]}},a=[],s=[],i=[];t.daily.forEach((t=>{var e=new Date(1e3*t.dt);let r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];a.push(r),s.push(t.temp.max),i.push(t.temp.min)})),e.labels=a,e.thisWeek.data=s,e.lastWeek.data=i;var r=document.getElementById("performaneLine").getContext("2d"),n=document.getElementById("performaneLine").getContext("2d"),o=r.createLinearGradient(5,0,5,100);o.addColorStop(0,"rgba(26, 115, 232, 0.18)"),o.addColorStop(1,"rgba(26, 115, 232, 0.02)");var l=n.createLinearGradient(100,0,50,150);l.addColorStop(0,"rgba(0, 208, 255, 0.19)"),l.addColorStop(1,"rgba(0, 208, 255, 0.03)");var d={labels:e.labels,datasets:[{label:e.thisWeek.label,data:e.thisWeek.data,backgroundColor:o,borderColor:["#1F3BB3"],borderWidth:1.5,fill:!0,pointBorderWidth:1,pointRadius:[4,4,4,4,4,4,4],pointHoverRadius:[4,4,4,4,4,4,4],pointBackgroundColor:["#1F3BB3)","#1F3BB3","#1F3BB3","#1F3BB3","#1F3BB3)","#1F3BB3","#1F3BB3","#1F3BB3","#1F3BB3)","#1F3BB3","#1F3BB3","#1F3BB3","#1F3BB3)"],pointBorderColor:["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"]},{label:e.lastWeek.label,data:e.lastWeek.data,backgroundColor:l,borderColor:["#52CDFF"],borderWidth:1.5,fill:!0,pointBorderWidth:1,pointRadius:[4,4,4,4,4,4,4],pointHoverRadius:[4,4,4,4,4,4,4],pointBackgroundColor:["#52CDFF)","#52CDFF","#52CDFF","#52CDFF","#52CDFF)","#52CDFF","#52CDFF","#52CDFF","#52CDFF)","#52CDFF","#52CDFF","#52CDFF","#52CDFF)"],pointBorderColor:["#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff","#fff"]}]},c={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{display:!0,drawBorder:!1,color:"#F0F0F0",zeroLineColor:"#F0F0F0"},ticks:{beginAtZero:!1,autoSkip:!0,maxTicksLimit:4,fontSize:10,color:"#6B778C"}}],xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{beginAtZero:!1,autoSkip:!0,maxTicksLimit:7,fontSize:10,color:"#6B778C"}}]},legend:!1,legendCallback:function(t){var e=[];e.push('<div class="chartjs-legend"><ul>');for(var a=0;a<t.data.datasets.length;a++)e.push("<li>"),e.push('<span style="background-color:'+t.data.datasets[a].borderColor+'"></span>'),e.push(t.data.datasets[a].label),e.push("</li>");return e.push("</ul></div>"),e.join("")},elements:{line:{tension:.4}},tooltips:{backgroundColor:"rgba(31, 59, 179, 1)"}},u=new Chart(r,{type:"line",data:d,options:c});document.getElementById("performance-line-legend").innerHTML=u.generateLegend()}}};const ht=(0,d.Z)(mt,[["render",ut]]);var ft=ht;const pt={class:"statistics-details d-flex align-items-center justify-content-between",style:{padding:"20px","border-radius":"20px","background-color":"white"}},vt=(0,i._)("p",{class:"statistics-title"},"Clouds",-1),gt={class:"rate-percentage"},bt=(0,i._)("p",{class:"statistics-title"},"Dew Point",-1),wt={class:"rate-percentage"},yt=(0,i._)("p",{class:"statistics-title"},"Humidity",-1),_t={class:"rate-percentage"},Dt={class:"d-none d-md-block"},kt=(0,i._)("p",{class:"statistics-title"},"Sunrise",-1),Ct={class:"rate-percentage"},xt={class:"d-none d-md-block"},Ft=(0,i._)("p",{class:"statistics-title"},"Sunset",-1),St={class:"rate-percentage"},Tt={class:"d-none d-md-block"},Bt=(0,i._)("p",{class:"statistics-title"},"Temperature",-1),Lt={class:"rate-percentage"};function zt(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",pt,[(0,i._)("div",null,[vt,(0,i._)("h3",gt,(0,g.zw)(this.weatherData.clouds)+"%",1)]),(0,i._)("div",null,[bt,(0,i._)("h3",wt,(0,g.zw)(this.weatherData.dew_point)+"c",1)]),(0,i._)("div",null,[yt,(0,i._)("h3",_t,(0,g.zw)(this.weatherData.humidity),1)]),(0,i._)("div",Dt,[kt,(0,i._)("h3",Ct,(0,g.zw)(this.weatherData.formattedSunrise),1)]),(0,i._)("div",xt,[Ft,(0,i._)("h3",St,(0,g.zw)(this.weatherData.formattedSunset),1)]),(0,i._)("div",Tt,[Bt,(0,i._)("h3",Lt,(0,g.zw)(this.weatherData.temp),1)])])}const Wt={data(){return{test:"kumar"}},methods:{logMessage(){console.log("hello")},getTimeConverter(t){let e=new Date(t),a=e.getHours(),s=e.getMinutes(),i=a+"."+s;return i},formatTime(t){var e=new Date(1e3*t),a={hour:"numeric",minute:"numeric",hour12:!0};return e.toLocaleString("en-US",a)}}};var jt={name:"PerformanceLineChart",mixins:[Wt],props:[],data(){return{weatherData:[]}},mounted(){this.drawChart()},methods:{async drawChart(){let t=await this.$store.getters.getWeatherData;this.weatherData=t["current"],this.weatherData.formattedSunrise=this.formatTime(this.weatherData.sunrise),this.weatherData.formattedSunset=this.formatTime(this.weatherData.sunset)}}};const At=(0,d.Z)(jt,[["render",zt]]);var It=At;const Mt=t=>((0,i.dD)("data-v-210087ac"),t=t(),(0,i.Cn)(),t),Ot={class:"card bg-primary card-rounded stats"},Pt={class:"card-body pb-0"},Et=Mt((()=>(0,i._)("h4",{class:"card-title card-title-dash text-white mb-2"},"Location Summary",-1))),Ut={class:"row"},$t={class:"col-sm-6 stat-numbers"},Ht=(0,i.Uk)("Latitude: "),Zt=(0,i.Uk)("Longitude: "),Vt={class:"col-sm-6 stat-numbers"},Rt=(0,i.Uk)("Timezone: "),Nt=(0,i.Uk)("Timezone Offset: ");function Jt(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",Ot,[(0,i._)("div",Pt,[Et,(0,i._)("div",Ut,[(0,i._)("div",$t,[(0,i._)("p",null,[Ht,(0,i._)("span",null,(0,g.zw)(r.latitude),1)]),(0,i._)("p",null,[Zt,(0,i._)("span",null,(0,g.zw)(r.longitude),1)])]),(0,i._)("div",Vt,[(0,i._)("p",null,[Rt,(0,i._)("span",null,(0,g.zw)(r.timezone),1)]),(0,i._)("p",null,[Nt,(0,i._)("span",null,(0,g.zw)(r.timezone_offset),1)])])])])])}var Kt={name:"StatsChart",props:[],data(){return{latitude:25,longitude:25,timezone:25,timezone_offset:25}},mounted(){this.drawChart()},methods:{async drawChart(){let t=await this.$store.getters.getWeatherData;this.latitude=t.lat,this.longitude=t.lon,this.timezone=t.timezone,this.timezone_offset=t.timezone_offset/3600+" hours"}}};const Xt=(0,d.Z)(Kt,[["render",Jt],["__scopeId","data-v-210087ac"]]);var Yt=Xt;const Gt={class:"card card-rounded"},qt={class:"card-body"},Qt={class:"row"},te={class:"col-lg-12"};function ee(t,e,a,r,n,o){const l=(0,i.up)("todoHeader"),d=(0,i.up)("todoAddForm"),c=(0,i.up)("todoListItems");return(0,i.wg)(),(0,i.iD)("div",Gt,[(0,i._)("div",qt,[(0,i._)("div",Qt,[(0,i._)("div",te,[(0,i.Wm)(l,{onShowAddForm:o.showAddForm,onDisplayValue:o.displayValue,onSortToggle:o.sortToggle},null,8,["onShowAddForm","onDisplayValue","onSortToggle"]),(0,i.wy)((0,i.Wm)(d,{onAddTodoDb:o.addToDos},null,8,["onAddTodoDb"]),[[s.F8,!n.showForm]]),(0,i.wy)((0,i.Wm)(c,{list:n.list,onDeleteTodoDb:o.deleteToDos},null,8,["list","onDeleteTodoDb"]),[[s.F8,n.showForm]])])])])])}var ae=a(4275),se=a(6035);(0,ae.ZF)({apiKey:"AIzaSyCmteIa-2CXXG-fqEeLxppDCH9J5Lv5rnA",authDomain:"vue-fs-prod-7641b.firebaseapp.com",projectId:"vue-fs-prod-7641b"});const ie=(0,se.ad)();var re=a(65),ne=(0,re.MT)({state:{direction:"asc",name:"Kumar D",time:"9.50"},getters:{myName:t=>t.name,getSortDirection:t=>t.direction,getWeatherData:async()=>fetch("https://api.openweathermap.org/data/3.0/onecall?lat=37.9060&lon=-122.5450&units=imperial&exclude=minutely&appid=8362d7576fff036a08554d81480c7689").then((t=>t.json())),getTimeConverter:t=>t.time},mutations:{changeSortDirectionMut:t=>{t.direction="desc"===t.direction?"asc":"desc"},timeConverterMut:(t,e)=>{let a=new Date(e),s=a.getHours(),i=a.getMinutes(),r=s+"."+i;t.time=r}},actions:{changeSortDirection:t=>{t.commit("changeSortDirectionMut")},timeConverter:(t,e)=>{t.commit("timeConverterMut",e)}},modules:{}});class oe{constructor(){this.taskRef=(0,se.hJ)(ie,"tasks")}async fetch(){let t=[],e=(0,se.IO)(this.taskRef,(0,se.Xo)("priority"));const a=await(0,se.PL)(e);return a.forEach((e=>{const a={id:e.id,day:this.getDate(e.data().day),text:e.data().text,priority:e.data().priority};t.push(a)})),t}async fetchValue(t){let e="",a=[];e=t?(0,se.IO)(this.taskRef,(0,se.ar)("priority","==",t)):(0,se.IO)(this.taskRef,(0,se.Xo)("priority"));const s=await(0,se.PL)(e);return s.forEach((t=>{const e={id:t.id,day:this.getDate(t.data().day),text:t.data().text,priority:t.data().priority};a.push(e)})),a}async sortToggle(t){let e="",a=[];e=(0,se.IO)(this.taskRef,(0,se.Xo)("priority",t));const s=await(0,se.PL)(e);return s.forEach((t=>{const e={id:t.id,day:this.getDate(t.data().day),text:t.data().text,priority:t.data().priority};a.push(e)})),a}getDate(t){var e=new Date(t.split("-")),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=e.getUTCFullYear(),i=a[e.getMonth()],r=e.getDate();let n=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];return n+", "+r+" "+i+", "+s}async add(t){await(0,se.ET)(this.taskRef,{id:Math.floor(1e5*Math.random()),day:t.day,priority:t.priority,text:t.text})}async delete(t){await(0,se.oe)((0,se.JU)(ie,"tasks",t))}}const le=t=>((0,i.dD)("data-v-1127778f"),t=t(),(0,i.Cn)(),t),de={class:"d-flex justify-content-between align-items-center",style:{"flex-direction":"column"}},ce={style:{display:"flex","justify-content":"space-between",width:"100%"}},ue=le((()=>(0,i._)("h4",{class:"card-title card-title-dash"},"Todo list",-1))),me={class:"add-items d-flex mb-0"},he=le((()=>(0,i._)("i",{class:"mdi mdi-plus"},null,-1))),fe=[he],pe={class:"sort-container"},ve=le((()=>(0,i._)("option",{disabled:"",value:""},"Display by Priority",-1))),ge=["value"],be={class:"selected-sort"},we={class:"sort-container"},ye={class:"btn btn-rounded btn-success text-white orderBy"};function _e(t,e,a,r,n,o){return(0,i.wg)(),(0,i.iD)("div",de,[(0,i._)("div",ce,[ue,(0,i._)("div",me,[(0,i._)("button",{class:"add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p",onClick:e[0]||(e[0]=e=>t.$emit("show-add-form"))},fe)])]),(0,i._)("div",pe,[(0,i.wy)((0,i._)("select",{onChange:e[1]||(e[1]=t=>o.displayValue()),"onUpdate:modelValue":e[2]||(e[2]=t=>n.sort=t)},[ve,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.displayItems,((t,e,a)=>((0,i.wg)(),(0,i.iD)("option",{key:t,value:e},(0,g.zw)(t.charAt(0).toUpperCase()+t.slice(1)),9,ge)))),128))],544),[[s.bM,n.sort]]),(0,i._)("div",be,(0,g.zw)(n.displayItems[n.sort]||"all"),1)]),(0,i._)("div",we,[(0,i._)("button",{class:"btn btn-rounded btn-primary text-white",onClick:e[3]||(e[3]=e=>t.$emit("sort-toggle"))}," Toggle Sort "),(0,i._)("button",ye,(0,g.zw)(this.displayOrder()),1)])])}var De={name:"todoHeader",data(){return{sort:"",orderBy:this.$store.state.direction,displayItems:{"":"all",a:"high",b:"medium",c:"low"}}},props:{},mounted(){},methods:{displayValue(){this.$emit("display-value",this.sort)},displayOrder(){return this.$store.state.direction}}};const ke=(0,d.Z)(De,[["render",_e],["__scopeId","data-v-1127778f"]]);var Ce=ke;const xe=t=>((0,i.dD)("data-v-58bc8205"),t=t(),(0,i.Cn)(),t),Fe={class:"card"},Se={class:"card-body"},Te={key:0,class:"form-group message"},Be=xe((()=>(0,i._)("p",null,"Please fill in all the fields",-1))),Le=[Be],ze={class:"form-group",ref:"day"},We=xe((()=>(0,i._)("label",null,"Day",-1))),je={class:"form-group",ref:"priority"},Ae=xe((()=>(0,i._)("label",{for:"exampleFormControlSelect3"},"Priority",-1))),Ie=xe((()=>(0,i._)("option",{value:"a"},"High",-1))),Me=xe((()=>(0,i._)("option",{value:"b"},"Medium",-1))),Oe=xe((()=>(0,i._)("option",{value:"c"},"Low",-1))),Pe=[Ie,Me,Oe],Ee={class:"form-group",ref:"text"},Ue=xe((()=>(0,i._)("label",null,"Text",-1))),$e=xe((()=>(0,i._)("input",{type:"submit",class:"btn btn-primary me-2",value:"Submit"},null,-1))),He=xe((()=>(0,i._)("input",{type:"reset",class:"btn btn-light me-2",value:"Cancel"},null,-1)));function Ze(t,e,a,r,n,o){return(0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("div",Se,[(0,i._)("form",{action:"#",class:"todo-form",onSubmit:e[3]||(e[3]=(0,s.iM)(((...t)=>o.submit&&o.submit(...t)),["prevent"]))},[n.showmessage?((0,i.wg)(),(0,i.iD)("div",Te,Le)):(0,i.kq)("",!0),(0,i._)("div",ze,[We,(0,i.wy)((0,i._)("input",{type:"date",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>n.day=t)},null,512),[[s.nr,n.day]])],512),(0,i._)("div",je,[Ae,(0,i.wy)((0,i._)("select",{class:"form-control form-control-sm","onUpdate:modelValue":e[1]||(e[1]=t=>n.priority=t)},Pe,512),[[s.bM,n.priority]])],512),(0,i._)("div",Ee,[Ue,(0,i.wy)((0,i._)("textarea",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>n.text=t),rows:"4"},"\n                    ",512),[[s.nr,n.text]])],512),$e,He],32)])])}var Ve={name:"todoAddForm",data(){return{day:"",priority:"high",text:"",showmessage:!1}},props:["list"],methods:{async submit(t){return this.showmessage=!1,this.$refs["day"].classList.remove("highlight"),this.$refs["text"].classList.remove("highlight"),""==this.day?(this.$refs["day"].classList.add("highlight"),this.showmessage=!0,!1):""==this.text?(this.$refs["text"].classList.add("highlight"),this.showmessage=!0,!1):(this.$emit("add-todo-db",this),this.day="",this.priority="",void(this.text=""))}}};const Re=(0,d.Z)(Ve,[["render",Ze],["__scopeId","data-v-58bc8205"]]);var Ne=Re;const Je={class:"list-wrapper"},Ke={class:"todo-list todo-list-rounded"},Xe={class:"form-check w-100 mt-0"},Ye={class:"text-small me-3 title"},Ge={class:"text-small me-3 date"},qe={class:"d-flex button-section"},Qe=["onClick"];function ta(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",Je,[(0,i._)("ul",Ke,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.editedToDoList,(t=>((0,i.wg)(),(0,i.iD)("li",{class:(0,g.C_)(["d-block mb-3",{high:t.high,medium:t.medium,low:t.low}]),key:t.id},[(0,i._)("div",Xe,[(0,i._)("div",{class:(0,g.C_)(["text-small me-3 priority",{hight:t.high,mediumt:t.medium,lowt:t.low}])},(0,g.zw)(r.displayItems[t.priority]),3),(0,i._)("div",Ye,(0,g.zw)(t.text),1),(0,i._)("div",Ge,(0,g.zw)(t.day),1)]),(0,i._)("div",qe,[(0,i._)("button",{onClick:e=>n.deleteItem(t.id),class:"btn-warning",onclick:"confirm('Are you sure?')"},"Delete",8,Qe)])],2)))),128))])])}var ea={name:"todoList",data(){return{isActive:!0,displayItems:{"":"all",a:"high",b:"medium",c:"low"}}},props:["list"],methods:{deleteItem(t){this.$emit("delete-todo-db",t)}},computed:{editedToDoList(){let t=this.list.filter((t=>{switch(t.priority){case"a":t.high=!0;break;case"b":t.medium=!0;break;case"c":t.low=!0;break;default:}return t}));return t}}};const aa=(0,d.Z)(ea,[["render",ta],["__scopeId","data-v-6fa0efd9"]]);var sa=aa,ia={name:"ToDoList",components:{todoHeader:Ce,todoListItems:sa,todoAddForm:Ne},data(){return{list:[],showForm:!0,fbm:new oe}},mounted(){this.fetchToDos()},methods:{fetchToDos(){this.fbm.fetch().then((t=>{this.list=t}))},addToDos(t){this.fbm.add(t).then((()=>{this.showForm=!this.showForm,this.list=[],this.fetchToDos()}))},deleteToDos(t){this.fbm.delete(t).then((()=>{this.list=[],this.fetchToDos()}))},displayValue(t){this.fbm.fetchValue(t).then((t=>{this.list=t}))},sortToggle(){this.$store.dispatch("changeSortDirection");let t=this.$store.getters.getSortDirection;this.fbm.sortToggle(t).then((t=>{this.list=t}))},showAddForm(){this.showForm=!this.showForm}}};const ra=(0,d.Z)(ia,[["render",ee]]);var na=ra;const oa={class:"card card-rounded sunrisesunset"},la={class:"card-body"},da={class:"d-sm-flex justify-content-between align-items-start"},ca={class:"card-title card-title-dash"},ua={class:"card-subtitle card-subtitle-dash"},ma={class:"dropdown"},ha=(0,i._)("option",{value:"Day"},"Day",-1),fa=(0,i._)("option",{value:"Sunrise"},"Sunrise",-1),pa=(0,i._)("option",{value:"Sunset"},"Sunset",-1),va=[ha,fa,pa],ga={class:"d-sm-flex align-items-center mt-1 justify-content-between"},ba={class:"flex-sm-column align-items-center justify-content-between sundaily"},wa=(0,i._)("h3",null,"Today",-1),ya={class:"me-2 fw-normal"},_a=(0,i.Uk)("Sunrise: "),Da={class:"me-2 fw-normal"},ka=(0,i.Uk)("Sunset: "),Ca=(0,i._)("div",{class:"me-3"},[(0,i._)("div",{id:"marketing-overview-legend"})],-1),xa=(0,i._)("div",{class:"chartjs-bar-wrapper mt-3"},[(0,i._)("canvas",{id:"marketingOverview"})],-1);function Fa(t,e,a,s,r,n){return(0,i.wg)(),(0,i.iD)("div",oa,[(0,i._)("div",la,[(0,i._)("div",da,[(0,i._)("div",null,[(0,i._)("h4",ca,(0,g.zw)(r.title),1),(0,i._)("h5",ua,(0,g.zw)(r.subTitle),1)]),(0,i._)("div",null,[(0,i._)("div",ma,[(0,i._)("select",{class:"btn btn-secondary dropdown-toggle toggle-dark btn-lg mb-0 me-0 pe-1",onChange:e[0]||(e[0]=t=>n.switchSelect(t))},va,32)])])]),(0,i._)("div",ga,[(0,i._)("div",ba,[wa,(0,i._)("h4",ya,[_a,(0,i._)("strong",null,(0,g.zw)(r.formattedSunrise),1)]),(0,i._)("h4",Da,[ka,(0,i._)("strong",null,(0,g.zw)(r.formattedSunset),1)])]),Ca]),xa])])}var Sa={mixins:[Wt],data(){return{title:"Sun Profile",subTitle:"One weeks worth of sunrise and sunset data",weatherData:[],formattedSunrise:"",formattedSunset:""}},name:"SunriseSunsetChart",created(){},mounted(){this.drawChart(),this.todaysSunsetSunrise()},methods:{switchSelect(t){this.selected=t.target.value,"Sunrise"===this.selected?this.drawChart("sunrise"):"Sunset"===this.selected?this.drawChart("sunset"):"Day"===this.selected&&this.drawChart("day")},async drawChart(t){if(console.info("%ctimePeriod: %o","color: red;font-size:12px",t),$("#marketingOverview").length){let r=await this.$store.getters.getWeatherData,n={labels:[],sunrise:{label:"Sunrise",data:[]},sunset:{label:"Sunset",data:[]}},o=[],l=[],d=[],c=0,u=0;r.daily.forEach((t=>{var e=new Date(1e3*t.dt);let a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()];o.push(a),c=new Date(1e3*t.sunrise),u=this.getTimeConverter(c),l.push(u),c=new Date(1e3*t.sunset),u=this.getTimeConverter(c),d.push(u)})),n.labels=o,n.sunrise.data=l,n.sunset.data=d;var e=document.getElementById("marketingOverview").getContext("2d"),a={labels:n.labels,datasets:[]};const m={label:n.sunrise.label,data:n.sunrise.data,backgroundColor:"#52CDFF",borderColor:["#52CDFF"],borderWidth:0,fill:!0},h={label:n.sunset.label,data:n.sunset.data,backgroundColor:"#1F3BB3",borderColor:["#1F3BB3"],borderWidth:0,fill:!0};"sunrise"===t?a.datasets.push(m):("sunset"===t||a.datasets.push(m),a.datasets.push(h)),console.info("%cmarketingOverviewData: %o","color: red;font-size:12px",a);var s={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{gridLines:{display:!0,drawBorder:!1,color:"#F0F0F0",zeroLineColor:"#F0F0F0"},ticks:{beginAtZero:!0,autoSkip:!0,maxTicksLimit:5,fontSize:10,color:"#6B778C"}}],xAxes:[{stacked:!0,barPercentage:.35,gridLines:{display:!1,drawBorder:!1},ticks:{beginAtZero:!1,autoSkip:!0,maxTicksLimit:12,fontSize:10,color:"#6B778C"}}]},legend:!1,legendCallback:function(t){var e=[];e.push('<div class="chartjs-legend"><ul>');for(var a=0;a<t.data.datasets.length;a++)e.push('<li class="text-muted text-small">'),e.push('<span style="background-color:'+t.data.datasets[a].borderColor+'"></span>'),e.push(t.data.datasets[a].label),e.push("</li>");return e.push("</ul></div>"),e.join("")},elements:{line:{tension:.4}},tooltips:{backgroundColor:"rgba(31, 59, 179, 1)"}},i=new Chart(e,{type:"bar",data:a,options:s});document.getElementById("marketing-overview-legend").innerHTML=i.generateLegend()}},async todaysSunsetSunrise(){let t=await this.$store.getters.getWeatherData;this.weatherData=t["current"],this.formattedSunrise=this.formatTime(this.weatherData.sunrise),this.formattedSunset=this.formatTime(this.weatherData.sunset)}}};const Ta=(0,d.Z)(Sa,[["render",Fa]]);var Ba=Ta,La={name:"MainPanel",data(){return{}},props:{},components:{PerformanceLineChart:ft,ToDoList:na,DailyWeatherChart:It,StatsChart:Yt,SunriseSunsetChart:Ba},mounted(){},methods:{}};const za=(0,d.Z)(La,[["render",ot],["__scopeId","data-v-41f15da2"]]);var Wa=za,ja={name:"HomeView",components:{NavBar:B,SideBar:M,MainPanel:Wa}};const Aa=(0,d.Z)(ja,[["render",v]]);var Ia=Aa;const Ma=[{path:"/",name:"home",component:Ia},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,9383))}],Oa=(0,h.p7)({history:(0,h.PO)("/"),routes:Ma});var Pa=Oa;(0,s.ri)(m).use(ne).use(Pa).mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,r){if(!s){var n=1/0;for(c=0;c<t.length;c++){s=t[c][0],i=t[c][1],r=t[c][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[s,i,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,s){return a.f[s](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.291ffc8d.js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="dashboard:";a.l=function(s,i,r,n){if(t[s])t[s].push(i);else{var o,l;if(void 0!==r)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==e+r){o=u;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+r),o.src=s),t[s]=[i];var m=function(e,a){o.onerror=o.onload=null,clearTimeout(h);var i=t[s];if(delete t[s],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=m.bind(null,o.onerror),o.onload=m.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,s){var i=a.o(t,e)?t[e]:void 0;if(0!==i)if(i)s.push(i[2]);else{var r=new Promise((function(a,s){i=t[e]=[a,s]}));s.push(i[2]=r);var n=a.p+a.u(e),o=new Error,l=function(s){if(a.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",o.name="ChunkLoadError",o.type=r,o.request=n,i[1](o)}};a.l(n,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,r,n=s[0],o=s[1],l=s[2],d=0;if(n.some((function(e){return 0!==t[e]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var c=l(a)}for(e&&e(s);d<n.length;d++)r=n[d],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(c)},s=self["webpackChunkdashboard"]=self["webpackChunkdashboard"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(8271)}));s=a.O(s)})();
//# sourceMappingURL=app.ac87b265.js.map