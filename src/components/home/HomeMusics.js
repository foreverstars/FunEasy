import React,{Component} from "react"
import { observer } from "mobx-react"
import { toJS } from "mobx"
class HomeMusic extends Component{
    constructor(){
        super()
        this.state = {}
    }
    componentWillMount(){
        const { store } = this.props
        store.getHotMusicsData()
        store.getPopularMusicsData()
    }
    render(){
        return (
            <div className="home-music">
                    <h3>流行音乐</h3>
                    <div className="home-music-content">
                         <ul>

                         </ul>
                    </div>
            </div>
        )
    }
}

export default observer(HomeMusic)
