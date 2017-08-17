import React, { Component } from "react"

import { Link,IndexLink } from "react-router"
 
export default class Header extends Component{
    constructor(){
        super()
        this.state = {
            tabList : [
               {title : "首页" , path : "/" },
               {title : "电影" , path : "/movie" },
               {title : "热点" , path : "/hot" },
               {title : "音乐" , path : "/music" },
               {title : "书籍" , path : "/book" },
            ]
        }
    }
    render(){
        return(
            <div id="mythink-fun-head">
                <div className="mythink-head-logo">
                    <a href="/"></a>
                </div>
                <ul className="mythink-head-tab">
                     {
                        this.state.tabList.map((item,index)=>{
                          return  (
                                item.title === "首页" ?
                                <IndexLink to={item.path} activeClassName="active" key={index}>
                                    <li>{item.title}</li>
                                </IndexLink> :
                                <Link to={item.path} activeClassName="active" key={index}>
                                  <li>{item.title}</li>
                                </Link>
                            )
                        })
                     }
                </ul>
            </div>
        )
    }
}
