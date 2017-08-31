import React, { Component } from "react"
import {Icon} from "antd"
export default class MovieList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const data = Object.assign([],this.props.data)
        if(data.length && data.lengt != 4){
            data.splice(4)
        }
        return (
            <div className="movie-contain-list">
                <h2>{this.props.title}</h2>
                <ul>
                    {
                        data.length ? data.map((item,index)=>{
                            const src = item.images ? item.images.large : item.subject.images.large
                            const title = item.title ? item.title : item.subject.title
                            const desc = item.title ? item.rating.average || item.genres[0] : item.subject.rating.average || item.subject.genres[0]
                            return (
                                <li key={index}>
                                    <img src={src} />
                                    <div>
                                        <h3>{title}</h3>
                                        <p>{desc}</p>
                                    </div>
                                    
                                </li>
                            )
                        }) :  
                        <div className="load-icon">
                            <img src="./src/image/load.gif"/>
                        </div>
                    }
                </ul>  
            </div>        
        )
    }
}