import React, {Component} from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import NewsItem from '../NewsItem';

export default class HomePage extends Component {

    render() {
        return (
            <React.Fragment>
            <div className='row'>
                <section id='home-banner'>
                    <div className='section-content'>
                        <h3 className='margin-top--none'>Main Content</h3>
                    </div>
                </section>
            </div>
            <div className='row'>
                <section className='column--left'>
                    <div className='section-content'>
                        <h3 className='margin-top--none'>About Us</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas nisl at efficitur vulputate. Aenean ullamcorper, nunc sed ultrices molestie, ipsum quam mattis diam, quis fermentum felis massa non leo. 
                        Vestibulum non arcu vitae urna volutpat ullamcorper. Quisque tincidunt lacus nec lectus consectetur iaculis. Suspendisse ac magna a nulla feugiat luctus vel nec neque.
                        </p>
                        <p>
                            <Link to='#' >Sign Up Here</Link>
                        </p>
                    </div>
                </section>
                <section className='column--right'>
                    <div className='section-content'>
                        <h3 className='margin-top--none'>News</h3>
                        <NewsItem linkText='Sample Text' description='This is a description' />
                        <NewsItem linkText='Sample Text' description='This is a description' />
                        <NewsItem linkText='Sample Text' description='This is a description' />
                        <NewsItem linkText='Sample Text' description='This is a description' />
                    </div>
                </section>
            </div>
            </React.Fragment>
        );
    }

}