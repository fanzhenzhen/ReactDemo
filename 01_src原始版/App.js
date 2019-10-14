import React from 'react';
import Add from './component/add/Add'
import List from './component/list/List'

class App extends React.Component{
  state = {comments:[
    {id:"1234sdf",userName:"张三",content:"我是xxx1"},
    {id:"1344sdf",userName:"李四",content:"我是xxx2"},
    {id:"1434sdf",userName:"王五",content:"我是xxx3"}
  ]}
  addComments = (commentObj)=>{
     //获取原数据
     let comments = [...this.state.comments]
     //更新数据
     comments.unshift(commentObj)
     //设置状态
     this.setState({comments})
  }
  deleteComment = (id)=>{
       let comments = [...this.state.comments]
       comments = comments.filter((item)=>{
         return item.id !== id
       })
       this.setState({comments})
  }
  render(){
    return (
      <div>
         <header className="site-header jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
         <div className="container">
          <Add addComments = {this.addComments}/>
          <List comments = {this.state.comments} deleteComment = {this.deleteComment}/>
      </div>
      </div>
    )
  }
 
}

export default App;
