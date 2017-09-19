import React,{ Component } from "react"
import {observer} from "mobx-react"
import {toJS} from "mobx"
import {Link} from "react-router"

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
         return ( 
                <ul>
                {
                    data.length ? data.map((item,index)=>{
                        const path  = "/movie/detail/" + item.id
                        return ( 
                            <Link to={path} key={index}>                                
                                <li >
                                   <img src={item.images.large}/>
                                    <h4>{item.title}</h4>
                                </li>
                            </Link> )
                    }) :  <div className="load-icon">
                            <img src="./src/image/load.gif"/>
                        </div>
                }
                </ul>
            )
       
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
