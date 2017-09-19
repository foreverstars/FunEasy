import React,{Component} from "react"

export default class MovieBanner extends Component{
    constructor(){
        super()
    }
    render(){
        const data = this.props.data || [];
        const imgUrl = data.images ?  data.images.large : '';
        const title = data.title || [];
        const directors = data.directors ? data.directors.map((item)=>{return item.name}).join(',') : '';
        const casts =  data.casts ? data.casts.map((item)=>{return item.name}).join(',') : '';
        const countries = data.countries ? data.countries.join(',') : '';
        const genres = data.genres ? data.genres.join(',') : '';
        const year = data.year || '';
    
        return (
            <div className="detail-banner">
                <img src={imgUrl} />
                <div className="detail-banner-right">
                    <h2>{title}</h2>
                    <p>导演:  {directors}</p>
                    <p>主演:  {casts}</p> 
                    <p>国家:  {countries}</p>
                    <p>系列:  {genres}</p>  
                    <p>年代:  {year}</p>
                </div> 
            </div>
        )
    }
}