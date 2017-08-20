import { extendObservable, action } from "mobx"
import  "whatwg-fetch"

import UrlConfig from "../config/urlConfig"

class CommonDataStore {
    constructor(){
       extendObservable(this, {
           HotMoviesData:[],
           HotNewsData:[],
           HotMusicsData:[],
           HotBooksData:[]
        })
    }
    getHotMoviesData(){
      fetch(UrlConfig.getHotMoviesData+"?start=0&count=5")
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
        this.HotMoviesData = data.subjects
      })
    }
    getHotNewsData(type){
       const parmas = "?action=getnews&type=" + type + "&count=5"
       fetch(UrlConfig.getHotNewsData + parmas)
       .then((response)=> {
         return response.json()
       }).then( (data)=> {
          this.HotNewsData = data 
       })
    }
    getHotMusicsData(){
        
    }
    getHotBooksData(){
        
    }
}

export default new CommonDataStore()
