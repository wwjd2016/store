import React from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';
import './index.css';

class APP extends React.Component{
  getItems() {
    return [
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
      {time: 2017/1/1, content: 'hello world'},
    ]
  }
  renderItems() {
    return this.getItems().map((item, index)=>(
      <div className='item'
      style={this.getItemStyle(index)}
      >{item.content}</div>),this)
  }
  getItemStyle(index) {
    return (index % 2 === 0) ?
    {top: 4, left: index*200, alignItems: 'flex-start'} :
    {bottom: 4, left: index*200, alignItems: 'flex-end'}
  }
  getStyle() {
    return {
      width: this.getItems().length * 200
    }
  }
  render() {
    return (
      <div className='content' style={this.getStyle()}>
        {this.renderItems()}
      </div>
    )
  }
}
render(<APP />, document.getElementById('root'))
