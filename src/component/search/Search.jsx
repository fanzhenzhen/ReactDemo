import React from 'react'
import axios from 'axios'
export default class Search extends React.Component{
    search = ()=>{
        let {updateAppState} = this.props
        //先获取输入内容、
        let keyword = this.refs.keyword.value
        if(!keyword){
           return
        }
        updateAppState({
            isFirst:false,
            isLoading:true,
            users:[],
            error:''
          })
        axios.get(`https://api.github.com/search/users?q=${keyword}`)
             .then((response)=>{
                 let {data} = response
                 console.log(data)
                updateAppState({
                    isFirst:false,
                    isLoading:false,
                    users:data.items,
                    error:''
                  })
             })
             .catch((error)=>{
                updateAppState({
                    isFirst:false,
                    isLoading:false,
                    users:'',
                    error:error.message
                  })
             })
    }
    render(){
       return(
        <div>
        <input type="text" placeholder="enter the name you search" ref='keyword'/>
        <button onClick= {this.search}>Search</button>
       </div>
       )
    }
}