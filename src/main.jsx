import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    // allowes you to have links, outlets, and all that crap keeps app in sync with urls
<BrowserRouter>
 {/*app is our main component that organizes and renders all our components and paths  */}
<App/> 
</BrowserRouter>)
