import './search.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'

import mixin from 'js/mixin.js'

let {keyword,id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data(){
    return {
      searchList: null,
      isShow: false,
      keyword,
    }
  },
  created(){
    this.getSearchList()
  },
  methods:{
    getSearchList(){
      axios.post(url.searchList,{keyword,id}).then(res => {
        this.searchList = res.data.lists
      })
    },
    move(){
      if(document.body.scrollTop > 100){
        this.isShow = true
      }
      else {
        this.isShow = false
      }
    },
    toTop(){

    }
  },
  mixins: [mixin]
})
