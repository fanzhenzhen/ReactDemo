import React from 'react'
import axios from 'axios'
import pubsub from 'pubsub-js'
export default class Search extends React.Component{
    search = ()=>{
        let {updateAppState} = this.props
        //先获取输入内容、
        let keyword = this.refs.keyword.value
        if(!keyword){
           return
        }
        pubsub.publish('updateList',{
            isFirst:false,
            isLoading:true,
            users:[],
            error:''
        })
        // updateAppState({
        //     isFirst:false,
        //     isLoading:true,
        //     users:[],
        //     error:''
        //   })
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
             .then((response)=>{
                 let {data} = response
                 console.log(data)
                 pubsub.publish('updateList',{
                   isFirst:false,
                   isLoading:false,
                   users:data.items,
                   error:''
                 })
                // updateAppState({
                //     isFirst:false,
                //     isLoading:false,
                //     users:data.items,
                //     error:''
                //   })
             })
             .catch((error)=>{
               pubsub.publish('updateList',{
                isFirst:false,
                isLoading:false,
                users:'',
                error:error.message
               })
                // updateAppState({
                //     isFirst:false,
                //     isLoading:false,
                //     users:'',
                //     error:error.message
                //   })
             })
    }
    render(){
       return(
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input type="text" placeholder="enter the name you search" ref='keyword'/>
            <button onClick= {this.search}>Search</button>
          </div>
      </section>
       
       )
    }
}