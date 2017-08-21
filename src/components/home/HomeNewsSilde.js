import React,{ Component } from "react"
import { Tabs } from "antd"
import { observer } from "mobx-react"
import { toJS } from "mobx"
const TabPane = Tabs.TabPane 
class HomeNewsSlide extends Component{
	constructor(){
		super()
		this.state = {

		}
	}
	
	componentWillMount(){
	 	const { store } = this.props
		store.getHotNewsData("guonei")
	}
	
	_onChange(key){
		if(key){
			this.props.store.getHotNewsData(key)
		}
	}
	_renderTabsData(){
		const TabsData = toJS(this.props.store.HotNewsData) || []
		return (
			<ul className="home-news-slide-tabscontent">
				{
					TabsData.map((item,key)=>{
						return <li key={key}><img src={item.thumbnail_pic_s}/> <a href={item.url}>{item.title}</a></li>
					})
				}
			</ul>	
		)
	}
	
	render(){
		return( 
			<div className="home-news-slide">
				<Tabs onChange={this._onChange.bind(this)} >
					<TabPane tab="国内" key="guonei">
					     {this._renderTabsData()}
					</TabPane>
					<TabPane tab="国际" key="guoji">
					     {this._renderTabsData()}
					</TabPane>
					<TabPane tab="娱乐" key="yule">
					     {this._renderTabsData()}
					</TabPane>
					<TabPane tab="体育" key="tiyu">
					     {this._renderTabsData()}
					</TabPane>
					<TabPane tab="军事" key="junshi">
					     {this._renderTabsData()}
					</TabPane>
					<TabPane tab="社会" key="shehui">
					     {this._renderTabsData()}
					</TabPane>
				</Tabs>
			</div>
		)
	}
} 

export default observer(HomeNewsSlide)