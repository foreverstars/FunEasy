import  React,{ Component} from "react"
import { Carousel } from "antd"

export default class HomeNewsBanner extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="home-news-banner>
            <Carousel autoplay>
                <div><img src={require("../image/movie_carousel_1.jpg")}/></div>
                <div><img src={require("../image/movie_carousel_2.jpg")}/></div>
                <div><img src={require("../image/movie_carousel_3.jpg")}/></div>
                <div><img src={require("../image/movie_carousel_4.jpg")}/></div>
            <Carousel>
            </div>
        )
    }

}