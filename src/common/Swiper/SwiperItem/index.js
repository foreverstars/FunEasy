import React,{ Component } from "react"

export default class SwiperItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {item , count} = this.props;
        const width = 100 / count + "%";
        return (
            <div className="mythink-swiper-item" style={{width : width}}>
               <img src={item.src} />
            </div>
        )
    }
}
