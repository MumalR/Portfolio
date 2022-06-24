import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css';
function CardItemV(props) {
    return(
        <>
        <li className='cards-item'>
            <Link className ='cards-itemV-link' to={props.path}>
                <figure className ='cards-item-pic-wrap' data-category={props.label}>
                    <video src = {props.src} loop autoPlay muted alt = 'Timer' className = 'cards-item-img'></video>
                </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    </>
    )
    
}

export default CardItemV;
