import React,{ Component } from "react"
import Swiper from "../../common/Swiper/index"

export default class HomeBanner extends Component{
    constructor(){
        super()   
    }
    render(){
        const items = [{src : "./src/image/movie_carousel_1.jpg"},{src : "./src/image/movie_carousel_2.jpg"},{src : "./src/image/movie_carousel_3.jpg"},{src : "./src/image/movie_carousel_4.jpg"}]
        return( 
            <div id="mythink-home-banner">
                <Swiper items={items}  dots={false} arrows={false} />
            </div>
        )
    }
}
