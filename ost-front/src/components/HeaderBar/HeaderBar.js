import React, {Component} from 'react';
import './HeaderBar.css';

export default class HeaderBar extends Component {

    render() {
        return (
            <div className="site-header">
                <div className='container'>
                    <div id='header-content'>
                        <span className='align--left'>Home</span>
                        <span className='align--right'>
                            <ul>
                                <li>Employee Log In</li>
                                <li>Citizen Log In</li>
                            </ul>
                        </span>
                    </div>
                </div>           
            </div>
        );
    }
}