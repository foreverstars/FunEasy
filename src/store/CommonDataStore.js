import { extendObservable, action } from "mobx"

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
        
    }
    getHotNewsData(){
        
    }
    getHotMusicsData(){
        
    }
    getHotBooksData(){
        
    }
}

export default new CommonDataStore()
