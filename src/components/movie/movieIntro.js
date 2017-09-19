import React,{Component} from "react"

export default class MovieIntro extends Component{
    constructor(){
        super()
    }
    render(){
        const data = this.props.data;
        const summary = data.summary || '';
        return (
            <div className="detail-intro">
                <p>{summary}</p>
            </div>
        )
    }
}