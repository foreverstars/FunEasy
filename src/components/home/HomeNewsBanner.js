import  React,{ Component} from "react"
import { Carousel } from "antd"

export default class HomeNewsBanner extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="home-news-banner">
                <Carousel autoplay dots={false}>
                    <div><img src="./src/image/news_carousel_1.jpg"/></div>
                    <div><img src="./src/image/news_carousel_2.jpg"/></div>
                    <div><img src="./src/image/news_carousel_3.jpg"/></div>
                    <div><img src="./src/image/news_carousel_4.jpg"/></div>
                </Carousel>
            </div>
        )
    }

}