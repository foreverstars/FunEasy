import React,{ Component } from "react"
import Header from "../components/Header"
export default class App extends Component{
    render(){
        
        return (
            <div id="app">
                <Header />
                <div id="mythink-fun-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
    }
