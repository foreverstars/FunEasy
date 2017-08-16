import React,{Component} from "react"
import HomeNewsBanner from "./HomeNewsBanner"
import HomeNewsSilde from "HomeNewsSilde"
import HomeNewsHot from "HomeNewsHot"
export default class Home extends Component{
    render(){
        return(
            <div>
                 <h3>热点新闻</h3>
                 <div className="home-movie-content">
                   <HomeNewsBanner />
                   <HomeNewsSilde />
                   <HomeNewsHot />
                 </div>
            </div>
        ) 
    }
}
