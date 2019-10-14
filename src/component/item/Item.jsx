import React from 'react'
import './item.css'
export default class Item extends React.Component{
    render(){
      let {login,html_url,avatar_url} = this.props
        return(
            <div className="card">
              <a href={html_url} target="_blank">
                <img src={avatar_url} style={{width:'100px'}}/>
              </a>
              <p className="card-text">{login}</p>
            </div>
        )
    }
}