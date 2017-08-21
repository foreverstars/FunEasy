import React,{ Component } from "react"
import {toJS} from "mobx"
import {observer} from "mobx-react"
class HomeNewsHot extends Component{
	constructor(){
		super()
		this.state={}
	}
	componentWillMount(){
		this.props.store.getHotNewsHotData()
	}
	render(){
		const data = toJS(this.props.store.HotNewsHotData) || []
		return (
			  <div className="home-news-hot">
					<h4>热点头条</h4>
					<ul>
					{
						data.map((item,index)=>{
							return <li key={index}><span>{index+1}</span> <a href="item.url">{item.title}</a> </li>
						})
					}
					</ul>
			   </div>
		)
	}
} 
export default observer(HomeNewsHot)
