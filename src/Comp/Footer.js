import React from 'react';
import './Footer.css';
import { Button } from '../Comp/Button';
import { Link } from 'react-router-dom';
import roll from './Images/roo.jpg';

function Footer() {
    return (
        <div className='footer-container'>
			<div className  = 'rolls small'>
				<img src = {roll} alt = 'o' className  = 'roll-img'></img>
			</div>
			<div className  = 'content'> 
				<a  className='contact'
                        href="mailto:mumalrathore09@gmail.com?subject=I'd love to see more of your work!"
                        target='_blank'
                        aria-label='gmail'> Contact Me <i class="fas fa-heart"></i>
                        </a>
			</div>
			<div className  = 'rolls big'>
				<img src = {roll} alt = 'o' className  = 'roll-img'></img>
			</div>
        </div>
    )
}


export default Footer;
