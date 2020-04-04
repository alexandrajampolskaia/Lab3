import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router';
// import ShowLatest from '../components./ShowLatest.vue'
// import ShowBest from './ShowBest.vue'
// import ShowReported from './ShowReported.vue'
// import DeleteReport from './DeleteReport.vue'


Vue.config.productionTip = false
// Vue.use(VueRouter);

// const routes = [
// 	{ path: '/latest', component: ShowLatest },
// 	{ path: '/best', component: ShowBest },
// 	{ path: '/reported', component: ShowReported },
// 	{ path: '/', component: DeleteReport }
// ];
 
// const router = new VueRouter({
// 	routes: routes
// })

new Vue({
	// router: router,
  render: h => h(App),	
}).$mount('#app')
