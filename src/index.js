import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import App from './App'
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";


ReactDom.render(
<React.Fragment>
  <StateProvider initialState={initialState} reducer={reducer}>
      <App/>
  </StateProvider>
</React.Fragment>
,document.getElementById('root'));
