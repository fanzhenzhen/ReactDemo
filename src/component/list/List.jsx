import React from 'react'
import Item from '../item/Item'
import pubsub from 'pubsub-js'
export default class List extends React.Component{
    state = {
        isFirst:true,
        isLoading:false,
        users:[],
        error:''
      }
    render(){
      let {isFirst,isLoading,users,error}  = this.state
      if(isFirst){
          return <h2>输入用户名查询</h2>
      }else if(isLoading){
          return <h2>Loading......</h2>
      }else if(error){
          return <h2 style={{color:'red'}}>{error}</h2>
      }else{
          return(
             <div className="row">
                 {
                  users.map((item)=> <Item key = {item.login} {...item}/>)
                 }
            
            </div>
        )
      }
       
    }
    componentDidMount(){
        pubsub.subscribe('updateList',(msg, newStateObj)=>{
        this.setState(newStateObj)
        })
    }
}