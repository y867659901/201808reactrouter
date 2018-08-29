import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class UserList extends Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/user/detail/1">aaa</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/user/detail/2">bbb</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserList;