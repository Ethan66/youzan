import './category.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'

// import Foot from 'components/Foot.vue'

new Vue({
  el:'#app',
  /*components: {
    Foot
  },*/
  data: {
    topLists: null,
    topIndex: 0,
    subData: null,
    rankData: null
  },
  created(){
    this.getTopList()
    this.getSubList(0,0)
  },
  methods:{
    getTopList(){
      axios.post(url.topList).then(res => {
        this.topLists = res.data.lists
      }).catch(res => {

      })
    },
    getSubList(id,index){
      this.topIndex=index
      if(index === 0 ){
        this.getRank()
      }
      else {
        axios.post(url.subList,{id}).then(res => {
          this.subData = res.data.data
        })
      }
    },
    getRank(){
      axios.post(url.rank).then(res =>{
        this.rankData = res.data.data
      })
    },
    toSearch(list){
      location.href = 'search.html?keyword='+list.name+'&id='+list.id
    }
  },
  /*filters:{
    number(price){
      let priceStr = '' + price
      if(priceStr.indexOf('.')>-1){
        let arr = priceStr.split('.')
        return arr[0] + '.' + (arr[1]+ '0').substr(0,2)
      }
      else {
        return priceStr + '.00'
      }
    }
  },*/
  mixins: [mixin]

})
