import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './Login/index' // 登录
import Home from './Home/index' // 主页
import User from './User/index' // 用户
import Profile from './Profile/index' // 个人设置
import MenuLink from './MenuLink/index'
import NotFound from './NotFound/index'
import ProtectedRoute from './ProtectedRouter/index'

// 当用户访问个人设置的时候 先判断此用户是否已经登录 如果已经登录 则可以直接显示个人设置页面 如果此用户未登录 那么则跳转到登录页面进行登录 如果登录成功则自动跳回登录前的页面

export default (
    <Router>
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-brand">
                    aaa
                </div>
                <ul className="nav">
                    <MenuLink label="首页" to="/home" />
                    <MenuLink label="用户管理" to="/user" />
                    <MenuLink label="个人设置" to="/profile" />
                </ul>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Switch>
                            <Route exact path="/" render={props=><div>首页</div>}></Route>
                            {/* <Route path="/:name" render={props=><div>{props.match.params.name}</div>}></Route> */}
                            <Route path="/home" component={Home}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/login" component={Login}></Route>
                            <ProtectedRoute path="/profile" component={Profile} />
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </Router>
)