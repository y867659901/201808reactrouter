import React from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './Home/index' // 主页
import User from './User/index' // 用户
import Profile from './Profile/index' // 个人设置

export default (
    <Router>
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-brand">
                    aaa
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">首页</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">用户管理</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">个人设置</Link>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Route path="/home" component={Home}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/profile" component={Profile}></Route>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)