import React, { Component } from 'react';

class UserDetail extends Component {
    render() {
        // console.log(this.props)
        // this.props.history 跳转路由 路径
        // this.props.match 匹配结果 如果匹配上就是对象 匹配不上就是null
        // this.props.location 当前路径 pathname 当前路径
        return (
            <div>
                {this.props.match.params.id}
            </div>
        );
    }
}

export default UserDetail;