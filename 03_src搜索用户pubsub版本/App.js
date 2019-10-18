import React from 'react';
import Search from './component/search/Search';
import List from './component/list/List';

class App extends React.Component{
  render(){
    return (
      <div className="container">
         <Search/>
         <List/>
      </div>
    
    )
  }
 
}

export default App;
