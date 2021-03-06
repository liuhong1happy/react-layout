import React, { Component } from 'react';
import './index.less';

class Layout extends Component {
    render() {
        return (
            <div className="react-layout">
                {this.props.children}
            </div>
        );
    }
}

export default Layout;