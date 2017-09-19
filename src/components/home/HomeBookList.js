import React,{Component} from "react"

export default class HomeBookList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return (
            <ul className="home-book-content">
                {
                    this.props.data.map( (item,index)=>{
                        return (
                            <li key={index}>
                                    <img src={item.image}/>
                                    <div className="home-book-introduce">
                                        <h5>{item.title}</h5>
                                        <p>{item.average}</p>
                                        <p>作者:{item.author}</p>
                                    </div>
                                    <p className="home-book-desc">{item.desc}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}