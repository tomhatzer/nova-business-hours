import BusinessHours from 'vue-business-hours';

Nova.booting((Vue, router, store) => {
  Vue.component('business-hours', BusinessHours);
  Vue.component('index-nova-business-hours', require('./components/IndexField'))
  Vue.component('detail-nova-business-hours', require('./components/DetailField'))
  Vue.component('form-nova-business-hours', require('./components/FormField'))
})
