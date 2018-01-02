
import './goods.css'
import './goods_base.css'
import './goods_common.css'
import './goods_custom.css'
import './goods_mars.css'
import './goods_sku.css'
import './goods_theme.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import mixin from 'js/mixin'
import url from 'js/api.js'
import qs from 'qs'

let {id} = qs.parse(location.search.substr(1))
let detailTab = ['商品详情','本店成交']

new Vue({
  el: '#app',
  name: '',
  data(){
    return {
      details: null,
      detailTab,
      tabIndex: 0,
      dealLists: null
    }
  },
  created(){
    this.getDetails()
  },
  methods:{
    getDetails(){
      axios.post(url.details,{id}).then(res=>{
        this.details = res.data.data
      })
    },
    changeTab(index){
      this.tabIndex=index
      if(index){
        this.getDeal()
      }
    },
    getDeal(){
      axios.post(url.deal,{id}).then(res => {
        this.dealLists = res.data.data.lists
      })
    }
  },
  mixins: [mixin]
})
