import './category.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

import Foot from 'components/Foot.vue'

new Vue({
  el:'#app',
  components: {
    Foot
  },
  data: {
    topLists: null
  },
  created(){
    this.getTopList()
  },
  methods:{
    getTopList(){
      axios.post(url.topList).then(res => {
        this.topLists = res.data.lists
      }).catch(res => {

      })
    }
  },

})
