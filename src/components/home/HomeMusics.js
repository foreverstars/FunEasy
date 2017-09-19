import React,{Component} from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
class HomeMusic extends Component{
    constructor(){
        super()
        this.state = {
            fileLink : '',
            isLeftPlayingIndex: -1
        }
    }
    componentWillMount(){
        const { store } = this.props
        store.getHotMusicsData()
        store.getPopularMusicsData()
    }
    _play(item,index,type){
      const audio = this.refs.audio
      if( audio.paused){
            this.setState({ isLeftPlayingIndex : index  })
            this.props.store.play(item.song_id,()=>{
            this.setState({fileLink : this.props.store.fileLink},()=>{
               audio.play()
            })
        })
      }      
      else{
        audio.pause()
        this.setState({ isLeftPlayingIndex : -1})
       }
    }
    render(){
        const { store } = this.props
        const HotMusicsData = toJS(store.HotMusicsData) || []
        const PopularMusicsData = toJS(store.PopularMusicsData) || []
        return (
            <div className="home-music">
                    <h3>流行音乐</h3>
                    <div className="home-music-content">
                         <ul className="home-music-left">
                            {
                                HotMusicsData.map((item,index)=>{
                                    return (<li  key={index}>
                                                <img src={item.pic_big}/><p>{item.title}</p>
                                                <a onClick={this._play.bind(this,item,index,'left')} className={ this.state.currentLeftPlaying && (this.state.isLeftPlayingIndex === index)  ? "pause-icon" :"play-icon"} title="播放" href="javascript:;"></a>
                                           </li>)
                                })
                            }
                         </ul>
                        <ul className="home-music-right">
                            <h4>新歌榜</h4>
                            {
                                PopularMusicsData.map((item,index)=>{
                                    return (<li key={index}>
                                               <span>{index+1}.</span>
                                               <span>{item.title}</span>
                                               <a href="javascript:;" className="play-icon"  title="播放"></a>
                                           </li>)    
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
