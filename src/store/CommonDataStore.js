import { extendObservable, action } from "mobx"
import  "whatwg-fetch"

import UrlConfig from "../config/urlConfig"

class CommonDataStore {
    constructor(){
       extendObservable(this, {
           HotMoviesData:[],
           HotNewsData:[],
           HotNewsHotData:[],
           HotMusicsData:[],
           PopularMusicData:[],
           HotBooksData:[]
        })
    }
    getHotMoviesData(){
      fetch(UrlConfig.getHotMoviesData + "?start=0&count=5")
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
        this.HotMoviesData = data.subjects
      })
    }
    getHotNewsData(type){
      const params = "?action=getnews&type=" + type + "&count=5"
      fetch(UrlConfig.getHotNewsData + params)
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
        this.HotNewsData = data
      })
    }
   getHotNewsHotData(){
      const params = "?action=getnews&type=top&count=10"
      fetch(UrlConfig.getHotNewsData + params)
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
        this.HotNewsHotData = data
      })
    }
    getHotMusicsData(){
      const params = "?method=baidu.ting.billboard.billList&type=2&size=8&offset=0"
      fetch(UrlConfig.getHotMusicsData + params)
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
        this.HotMusicsData = data.song_list
        
      }) 
    }
    getPopularMusicsData(){
      const params = "?method=baidu.ting.billboard.billList&type=1&size=10&offset=0"
      fetch(UrlConfig.getHotMusicsData + params)
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
       this.getPopularMusicsData = data.song_list
       
      })  
    }
    getHotBooksData(){
        
    }
    play(id,cb){
      const params = "?method=baidu.ting.song.playAAC&songid=" + id
      fetch(UrlConfig.getHotMusicsData + params)
      .then((response)=> {
        return response.json()
      }).then( (data)=> {
          this.fileLink = data.bitrate.file_link
          cb()
      })  
    }
}

export default new CommonDataStore()
