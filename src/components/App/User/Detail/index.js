import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        // console.log(this.props)
        // this.props.history 跳转路由 路径
        // this.props.match 匹配结果 如果匹配上就是对象 匹配不上就是null
        // this.props.location 当前路径 pathname 当前路径
        let id = this.props.match.params.id;
        let userStr = localStorage.getItem('users');
        let users = userStr?JSON.parse(userStr):[];
        let user = users.find(user=>user.id = id);
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>姓名</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserDetail;