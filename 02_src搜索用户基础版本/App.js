import React from 'react';
import Search from './component/search/Search';
import List from './component/list/List';

class App extends React.Component{
  state = {
    isFirst:true,
    isLoading:false,
    users:[],
    error:''
  }
  updateAppState = (appSateObj)=>{
    let {isFirst,isLoading,users,error} = appSateObj
    this.setState({
      isFirst,
      isLoading,
      users,
      error
    })
  }
  render(){
    return (
         <div className="container">
         <section className="jumbotron">
         <h3 className="jumbotron-heading">Search Github Users</h3>
          <Search updateAppState = {this.updateAppState} />
       </section>
         <List {...this.state}/>
      </div>
    
    )
  }
 
}

export default App;
