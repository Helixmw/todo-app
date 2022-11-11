import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleXmark, faCheckCircle, faPenToSquare, faTrashCan, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
library.add(faPenToSquare);
library.add(faCircleXmark,);
library.add(faCheckCircle);
library.add(faPlusSquare);
library.add(faPenToSquare);
library.add(faTrashCan);


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
