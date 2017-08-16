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
      fetch(UrlConfig.getHotMoviesData)
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
        this.HotMoviesData = data.subjects
      })
    }
    getHotNewsData(){
        
    }
    getHotMusicsData(){
        
    }
    getHotBooksData(){
        
    }
}

export default new CommonDataStore()
