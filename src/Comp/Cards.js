import React from 'react';
import CardItem from './CardItem';
import CardItemV from './CardItemV';
import './Cards.css';
import payroll from './Images/payroll/Proto/welcome.png';
import webre from './Images/Web-Dev/webre-c.png';
import web from './Images/IOT/vid.mp4';
import ai from './Images/ML/ai.jpg';
import minecraft from './Images/ML/minecraft.jpg';

function Cards() {
    return (
        <div className = 'cards'>
            <h1>Check out my work!</h1>
            <p>* Coming soon!</p>  
            <div className = 'cards__container'>
                <div className = 'cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src = {payroll}
                        text =  "PayRoll Management System"
                        label = '#postGreSQL #reactJs #nodeJs'
                        path = '/payroll'
                        />
                        <CardItem 
                         src = {webre}
                        text =  "Web-Dev"
                        label = '#html #css #reactJs'
                        path = '/web-dev'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src = {ai}
                        text =  "Artificial Intelligence"
                        label = '#ml #data-science #python'
                        path = '/ai'
                        />
                         <CardItemV 
                        src = {web}
                        text =  "Rain ON ME!"
                        label = '#iot #arduino #embeddedC '
                        path = '/iot'
                        />
                        <CardItem
                        src = {minecraft}
                        text =  "MineCraft"
                        label = '#java '
                        path = '/java'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;
