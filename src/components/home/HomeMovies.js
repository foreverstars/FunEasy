import React,{ Component } from "react"
import {observer} from "mobx-react"
import {toJS} from "mobx"

class HomeMovies extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.store.getHotMoviesData()
    }
    _renderHotMovieList(){
        const {store} = this.props
        const data = toJS(store.HotMoviesData) || []
        if(data.length){
            return (
                <ul>
                {
                    data.map((item,index)=>{
                        return ( <li key={index}>
                                   <img src={item.images.large}/>
                                    <h4>{item.title}</h4>
                                </li> )
                    })
                }
                </ul>
            )
        }
        return <p>暂无数据</p>
    }
    render(){
       
        return (
            <div className="mythink-home-movies">
                <h3>热门电影</h3>
               {this._renderHotMovieList()}
            </div>
        )
    }
}

export default observer(HomeMovies)
