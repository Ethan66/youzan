let url = {
  hostLists: '/index/hotLists'
}

let host='http://rapapi.org/mockjsdata/30131'

for(let key in url){
  if(url.hasOwnProperty(key)){
    url[key] = host + url[key]
  }
}

export default url