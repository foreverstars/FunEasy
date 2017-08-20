import React,{ Component } from "react"
import { Tabs } from "antd"
import {toJS} from "mobx"
import { observer } from "mobx-react"
const TabPane = Tabs.TabPane 
class HomeNewsSlide extends Component{
	constructor(props){
		super(props)
		this.state = {
			TabsKey : "guonei"
		}
	}

	componentWillMount(){
		const { store } = this.props
		store.getHotNewsData(this.state.TabsKey)
	}
	
	_onChange(key){
		
	}

	_renderTabsContent(){
		const { store } = this.props
		const TabsData = toJS(store.HotNewsData) || [] 
		console.log(TabsData)
		return (
			<ul>
				{ TabsData.map((item,index)=>{
						return (
							<li key={index}><img src={item.thumbnial_pic_s} /><a>{item.title}</a></li>
						)
					})
				}
			</ul>
		)
	}	

	render(){
		return( 
			<div className="home-news-slide" >
			 <Tabs defaultActiveKey="guonei" onChange={this._onChange.bind(this)}>
				<TabPane tab="国内" key="guonei">
					{this._renderTabsContent()}
				</TabPane>
				<TabPane tab="国际" key="guoji">
					{this._renderTabsContent()}
				</TabPane>
				<TabPane tab="娱乐" key="yule">
					{this._renderTabsContent()}
				</TabPane>
				<TabPane tab="体育" key="tiyu">
					{this._renderTabsContent()}
				</TabPane>
				<TabPane tab="军事" key="junshi">
					{this._renderTabsContent()}
				</TabPane>
				<TabPane tab="社会" key="shehui">
					{this._renderTabsContent()}
				</TabPane>
		     </Tabs>
			</div>
		)
	}
} 

export default observer(HomeNewsSlide)