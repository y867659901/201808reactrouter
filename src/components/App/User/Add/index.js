import React, { Component } from 'react';

class UserAdd extends Component {
    handleSubmit = () => {
        let name = this.name.value;
        // 从缓存中读取用户列表字符串 null 字符串
        let userStr = localStorage.getItem('users');
        // 转成对象数组
        let users = userStr?JSON.parse(userStr):[];
        // 向数组中加入新的对象
        users.push({id:Date.now(),name});
        // 把新数组保存到缓存中
        localStorage.setItem('users',JSON.stringify(users));
        // 通过history对象的push方法跳转到用户列表页面
        this.props.history.push('/user/list');
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">姓名</label>
                    <input type="text" className="form-control" ref={ref=>this.name=ref} />
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        );
    }
}

export default UserAdd;