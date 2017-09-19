import React,{Component} from "react"

export default class MovieComments extends Component{
    constructor(){
        super()
        this.state = {
            commentList : [],
            canLoadMore : true,
        }
    }
    
    componentWillMount(){
        fetch('/src/mock/commentList.json')
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
            this.state.commentList = data ;
        })  
    }
    
    _loadMore(){
        fetch('/src/mock/commentList.json')
        .then((response)=> {
            return response.json()
        }).then( (data)=> {
            const arr = Object.assign([],this.state.commentList);
            var newarr = arr.concat(data)
            this.setState({commentList : newarr},()=>{
                if(this.state.commentList.length >= 15){
                     this.setState({canLoadMore :false })
                }
            })
        })
    }  

    
    _renderList(){
        const data = this.state.commentList;
        if(data.length){
             return (
                data.map((item,index)=>{
                    return (
                        <li key={index}>
                            <div>
                                <img src={item.imgUrl} />  
                                <p>{item.name}</p>
                            </div>
                            <h3>{item.comment}</h3>
                        </li>
                    )
                })
            )
        }
        else{
            return ( 
                <div className="load-icon">
                    <img src="./src/image/load.gif"/>
                </div>
            )
        }
    }
    
    render(){
        return (
            <div className="detail-comments">
                <h2>评论</h2>
                <ul>
                    {this._renderList()}                    
                </ul>
                {
                    this.state.canLoadMore ?
                    <a onClick={this._loadMore.bind(this)}>加载更多</a>
                    : 
                    <span className="no-more">没有更多了...</span>
                }
            </div>
        )
    }
}