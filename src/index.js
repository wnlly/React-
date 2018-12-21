import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Header from './component/header.jsx'

import Content  from './component/content.jsx'
import PropTypes from 'prop-types'


  function createStore (params){
  let state = null;
  let getState = () =>state;
  let listeners = [];
  let subscribe = (listener) =>listeners.push(listener);
  let dispatch = (action)=>{
    state = params(state,action);
    listeners.forEach((listener)=>listener())
    
  }
  dispatch({})
  return {getState,subscribe,dispatch}
}

function  reducer  (state , action)  {
  if(!state){
    return {
      themeColor:'red'
    }
  }
  switch (action.type) {
    case 'UPDATE_COLOR':
      return {
        ...state,
        themeColor:action.themeColor
      }
   
    default:
      return state
  }
}
const store = createStore(reducer)

class Index extends Component{
  
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }

  render () {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.querySelector('#root'))