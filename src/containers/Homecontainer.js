import React,{ Component } from "react"

import HomeBanner from "../components/home/HomeBanner"
import HomeMovies from "../components/home/HomeMovies"
import HomeNews from "../components/home/HomeNews"
import HomeMusics from "../components/home/HomeMusics"
import HomeBooks from "../components/home/HomeBooks"

import CommonDataStore from "../store/CommonDataStore"

export default class Home extends Component{
    render(){
        return (
            <div id="home-content">
                <HomeBanner store={CommonDataStore}/>
                <HomeMovies store={CommonDataStore}/>
                <HomeNews   store={CommonDataStore}/>
                <HomeMusics store={CommonDataStore}/>
                <HomeBooks  store={CommonDataStore}/>
            </div>
        )
    }
}
