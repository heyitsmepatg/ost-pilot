import React from 'react';
import './FlexLayout.css';

/**
 * @description This stateless functional component serves as the layout wrapper
 * for the site. It created a flex-based layout allowing for a multi-column look.
 * It also allows for a sticky footer.
 */

 export default function(props) {
     return (
        <div className='flex-wrapper'>
            <div className='site'>{props.children}</div>
        </div>
     );
 }