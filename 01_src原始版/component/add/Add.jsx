import React from 'react';
import uuid from 'uuid'
import PropTypes from 'prop-types'
class Add extends React.Component {
    static propTypes={
      userName:PropTypes.string.isRequired,
      content:PropTypes.string.isRequired
    }
    myRef = React.createRef()
    add = ()=>{
     let {addComments} = this.props
     //获取输入的用户名
     let userName = this.userName.value
     //获取输入的内容
     let content = this.myRef.current.value
     if(userName === '' || content === ''){
         alert('用户名和评论内容不能为空！')
         return
     }
     addComments({
         id:uuid(),
         userName,
         content
     })
     //清空输入框内容
     this.userName.value = ''
     this.myRef.current.value = ''

    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"  ref = {(input)=>{this.userName = input}}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容" ref={this.myRef}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick = {this.add}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Add;