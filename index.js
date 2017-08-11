import  React ,{ Component } from "react"
import ReactDOM from "react-dom"
import RouteRoot  from "./src/config/routeConfig"
import "./src/less/main.less"
ReactDOM.render(
    <div>
        { RouteRoot }
    </div>,
    document.getElementById("root")
)

