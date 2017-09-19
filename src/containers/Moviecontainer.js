import React,{ Component } from "react"
import MovieList from "../components/movie/MovieList"
import UrlConfig from "../config/urlConfig"
import "whatwg-fetch"
export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            inStart: 0,
            inCount: 4,
            soonStart: 0,
            soonCount: 4,
            topStart: 0,
            topCount: 4,
            northStart: 0,
            northCount: 4,
            inMovieData:[],
            soonMovieData:[],
            topMovieData:[],
            northMovieData:[]
        }
    }
    componentWillMount(){
        const Inparams = `?start=${this.state.inStart}&count=${this.state.inCount}`
        fetch(UrlConfig.getHotMoviesData + Inparams)
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
            this.setState({inMovieData : data.subjects })
        })

        const Soonparams = `?start=${this.state.soonStart}&count=${this.state.soonCount}`
        fetch(UrlConfig.getSoonMovieData + Soonparams)
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
            this.setState({soonMovieData : data.subjects })
        })

        const Topparams = `?start=${this.state.topStart}&count=${this.state.topCount}`
        fetch(UrlConfig.getTopMovieData + Topparams)
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
            this.setState({topMovieData : data.subjects})
        })

        const Northparams = `?start=${this.state.northStart}&count=${this.state.northCount}`
        fetch(UrlConfig.getNorthMovieData + Northparams)
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
            this.setState({northMovieData : data.subjects})
        })

    }
    render(){
        return (
            <div id="movie-container">
                <MovieList title='正在上映' data={this.state.inMovieData}/>
                <MovieList title='即将上映' data={this.state.soonMovieData}/>
                <MovieList title='Top25' data={this.state.topMovieData}/>
                <MovieList title='北美票房榜' data={this.state.northMovieData}/>
            </div>
        )
    }
}
