import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom'
import UserList from './List/index'
import UserAdd from './Add/index'
import UserDetail from './Detail/index'

class User extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-2">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/list">用户列表</Link>
                            <Link className="nav-link" to="/user/add">新增用户</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-10">
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/detail/:id" component={UserDetail} />
                </div>
            </div>
        );
    }
}

export default User;