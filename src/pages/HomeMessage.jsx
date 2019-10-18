import React, {Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from './HomeMessageDetail'

export default class HomeMessage extends Component {
  state = {
    messages:[
      {id: 1, title: '消息1'},
      {id: 2, title: '消息2'},
      {id: 3, title: '消息3'},
      {id: 4, title: '消息4'},
    ]
  }
  pushShow=(id)=>{
   this.props.history.push(`/home/message/message_detail/${id}`)
  }
  replaceShow=(id)=>{
  this.props.history.replace(`/home/message/message_detail/${id}`)
  }
  back = () =>{
     this.props.history.goBack()
  }
  render() {
    let {messages} = this.state
    let {pushShow,replaceShow} = this
    return (
      <div>
        <ul>
          {
            messages.map((item)=> (
              <li key={item.id}>
                <Link replace={true} to={`/home/message/message_detail/${item.id}`}>{item.title}</Link>&nbsp;&nbsp;
                <button onClick={()=> pushShow(item.id)}>push查看</button>&nbsp;&nbsp;
                <button onClick={()=> replaceShow(item.id)}>replace查看</button>
              </li>
            ))
          }
        </ul>
        <button onClick={this.back}>回退</button>
        <hr/>
        <Route path="/home/message/message_detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}