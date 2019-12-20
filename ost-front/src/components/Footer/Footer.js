import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {

    render() {
        const classes = this.props.classNmae
            ? `footer ${this.props.classNmae}`
            : `footer`;

        return (
            <footer className={classes} role='contentinfo'>
                <div className='container'>

                </div>
            </footer>
        );
    }

}