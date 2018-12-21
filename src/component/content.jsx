


import React, { Component } from 'react';
import PropTyeps from 'prop-types';
import SwitchColor from './SwitchColor'

class Content extends Component {
  render () {
    return (
      <div>
       <span> React.js 小书内容</span>
       <SwitchColor></SwitchColor>
      </div>
    )
  }
}

export default Content