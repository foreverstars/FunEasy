import React from "react"
import SwiperItem from "./SwiperItem"
import SwiperArrows from "./SwiperArrows"
import SwiperDots from "./SwiperDots"

export default React.createClass({
    propTypes : {
       speed: React.PropTypes.number,
       delay: React.PropTypes.number,
       pause: React.PropTypes.bool,
       autoplay: React.PropTypes.bool,
       dots: React.PropTypes.bool,
       arrows: React.PropTypes.bool,
       items: React.PropTypes.array
    },
    getDefaultProps(){
        return{
            speed: 1,
            delay: 2,
            pause: true,
            autoplay: true,
            dots: true,
            arrows: true,
            items: []
        }
    },
    getInitialState(){
        return {
            nowLocal : 0,
            speed : this.props.speed,
            items : []
        }
    },
    turn(n){
       let _n = this.state.nowLocal + n;
       this.state.speed = this.props.speed;
       if(_n < 0){
          _n = _n + this.state.items.length;
        }
       if(_n >= this.state.items.length){
          _n = 0
          this.state.speed = 0
       }
       this.setState({ nowLocal : _n })
    },
    goPlay(){
        if(this.props.autoplay){
            this.autoPlayFlag = setInterval(()=>{
                this.turn(1)    
            },this.props.delay*1000)
        }
    },
    pausePlay(){
        clearInterval(this.autoPlayFlag)
    },
    componentWillMount(){
        if(this.props.items.length){
            const newItems = Object.assign([],this.props.items)
            newItems.push(newItems[0])
            this.state.items = newItems
        }
    },
    componentDidMount(){
        this.autoPlayFlag = null
        this.goPlay()     
    },
    componentWillUnmount(){
        clearInterval(this.autoPlayFlag) 
    },
    render(){
        const count = this.state.items.length;
        const itemNodes = this.state.items.map((item,index)=>{
            return <SwiperItem item={item} key={index} />
        })
        const arrowsNode = <SwiperArrows turn={this.turn} />
        const dotsNode = <SwiperDots turn={this.turn} count={this.props.items.length} nowLocal={this.state.nowLocal} />
        return(
          <div
              className="swiper"
              onMouseOver={this.props.pause?this.pausePlay:null} 
              onMouseOut={this.props.pause?this.goPlay:null}>
            <ul style={{
                left: -100 * this.state.nowLocal + "%",
                transitionDuration: this.state.speed + "s",
                width: count * 100 + "%"
            }}>
                {itemNodes}      
            </ul>
            {this.props.arrows && arrowsNode}
            {this.props.dots && dotsNode}
        </div>)
    }
})
