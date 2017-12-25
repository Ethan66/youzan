import 'css/common.css'
import './index.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'

axios.post(url.hostLists,{
  pageNum:1,
  pageSize:6
}).then(res=>{

})

let app=new Vue({
  el: '',
  data:{
    lists: null
  }
})
