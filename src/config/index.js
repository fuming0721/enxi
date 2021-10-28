import Vue from 'vue'
import router from '@/router'
import Auth from './auth'
import 'babel-polyfill'
import 'normalize.css'
import './vant'
import './mixin'
import filter from './filter'
import components from './components'

Vue.use(filter)

Vue.use(Auth, { router })
Vue.use(components)
