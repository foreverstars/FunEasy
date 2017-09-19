import React,{Component} from "react"
import UrlConfig from "../../config/urlConfig"
import MovieBanner from "./movieBanner"
import MovieIntro from "./movieIntro" 
import MovieComments from "./movieComments"
export default class MovieDetail extends Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }
    componentWillMount(){
        const id = this.props.params.id;
        fetch(UrlConfig.getMovieDetail + '/' + id)
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
          console.log(data)
          this.setState({data : data})
        })  
    }
    render(){
        const data = this.state.data
        return (
            <div className="movie-detail">
                <MovieBanner data={data}/>
                <MovieIntro data={data} />
                <MovieComments data={data} />
            </div>
        )
    }
}