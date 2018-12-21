import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Header from '../component/header'

import Content  from '../component/content'
class Index extends Component{
  render(){
    return (
      <div>
      <Header></Header>
      <Content></Content>
      </div>
    )
  }
}