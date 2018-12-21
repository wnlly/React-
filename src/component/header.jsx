


import React, { Component } from 'react'

import  PropTypes  from 'prop-types';
 class Header extends Component {
  static contextTypes = {
    store: PropTypes.object
  }

constructor(props){
  super(props);
  this.state={
    themeColor:''
  }
  this.input = React .createRef()

}
  _updateColor(){
    const {store} = this.context;
    console.log(store);
    this.setState({
      themeColor:'rgba(15,200,235,0.8)'
    })
  }
  click(){
    console.log(1)
  }
  componentWillMount(){
    this._updateColor();
    console.log(this.input)
  }
  render() {
    return (
      <div>
        <h1 style={{color:this.state.themeColor}} onClick = {this.click.bind(this)} ref={this.input}>React.js 小书标题</h1>
      </div>
    )
  }
}



export default Header