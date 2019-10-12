import React from 'react';
import Add from './component/add/Add'
import List from './component/list/List'

function App() {
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
        <Add/>
        <List/>
    </div>
    </div>
  )
}

export default App;
