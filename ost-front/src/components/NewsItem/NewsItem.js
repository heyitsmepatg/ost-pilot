import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css';

export default class NewsItem extends Component {
    render() {
        return (
            <div className='news-item'>
                <img 
                    alt={this.props.alt}
                    src={this.props.icon}
                />
                <span>
                    <Link to={this.props.link}>
                        {this.props.linkText}
                    </Link>
                    <br />
                    {this.props.description}
                </span>
            </div>
        );
    }
}