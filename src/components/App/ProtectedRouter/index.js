// class ProtectedRoute extends Component {
//     render() {
//         return (
//             <div>
//                 a
//             </div>
//         );
//     }
// }

// export default ProtectedRoute;
// 当组件通过函数来定义的时候 参数是属性对象
// 属性是父组件传进来的
// 当定义组件不需要状态 可以用函数 当必须需要状态的时候 必须用class
// props = {path:'/profile',component:Profile}
// rest = {path: '/profile'}
import React, { Component } from 'react';
import { Redirect,Route } from 'react-router-dom';

export default function({component: Component,...rest}){
    console.log(localStorage.getItem('login'))
    return <Route {...rest} render={(props)=>
        localStorage.getItem('login')?<Component />:<Redirect to={{pathname:'/login',state:{from:props.location.pathname}}} />
    } />
}