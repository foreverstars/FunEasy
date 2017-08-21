import React,{Component} from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
class HomeMusic extends Component{
    constructor(){
        super()
        this.state = {
            fileLink : ''
        }
    }
    componentWillMount(){
        const { store } = this.props
        store.getHotMusicsData()
        store.getPopularMusicsData()
    }
    _play(id){
        console.log(id)
        this.props.store.play(id,()=>{
            this.setState({fileLink : this.props.store.fileLink},()=>{
                const audio = this.refs.audio
                audio.play()
            })
        })
    }
    render(){
        const { store } = this.props
        const HotMusicsData = toJS(store.HotMusicsData) || []
        
        return (
            <div className="home-music">
                    <h3>流行音乐</h3>
                    <div className="home-music-content">
                         <ul className="home-music-left">
                            {
                                HotMusicsData.map((item,index)=>{
                                    return <li onClick={this._play.bind(this,item.song_id)} key={index}><img src={item.pic_small}/><p>{item.title}</p></li>
                                })
                            }
                         </ul>
                    </div>
                   <audio ref="audio" src={this.state.fileLink}></audio>
            </div>
            
        )
    }
}

export default observer(HomeMusic)
