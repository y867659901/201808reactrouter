import React, { Component } from 'react';

class UserAdd extends Component {
    handleSubmit = () => {

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