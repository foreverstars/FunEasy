import React,{ Component } from "react"
import {observer} from "mobx-react"

class HomeMovies extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.store.getHotMoviesData()
    }
    _renderHotMovieList(){
        const {store} = this.props
        if(store.HotMoviesData.length){
            return (
                <ul>
                {
                    store.HotMoviesData.map((item,index)=>{
                        return ( <li key={index}><img src={item.images.large}/></li> )
                    })
                }
                </ul>
            )
        }
        return <p>暂无数据</p>
    }
    render(){
       
        return (
            <div className="home-movies">
                <h4>热门电影</h4>
               {this._renderHotMovieList()}
            </div>
        )
    }
}

export default observer(HomeMovies)
