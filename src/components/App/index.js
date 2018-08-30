import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
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
                        <Switch>
                            <Route exact path="/" render={props=><div>首页</div>}></Route>
                            <Route path="/:name" render={props=><div>{props.match.params.name}</div>}></Route>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/profile" component={Profile}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)