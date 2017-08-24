import React,{Component} from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
import HomeBookList from "./HomeBookList"
class HomeBook extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    
    _format(){
        const {store} = this.props
        const HomeBooKData = toJS(store.HotBooksData) || []
        return HomeBooKData.map( (item)=>{
            const x = {...item}
            x.average = item.rating.average ?  item.rating.average : '8.0'
            x.author = item.author.join('、')
            x.desc = item.summary 
        })
    }
    
    componentWillMount(){
        this.props.store.getHotBooksData()
    }
    
    render(){
        return (
            <div className="home-book">
                <h3>热门图书</h3>
                <HomeBookList data={this._format()}/>
            </div>
        )
    }
}

export default observer(HomeBook)