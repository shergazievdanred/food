"use strict";

import calc from './modules/calc';  
import card from './modules/card';  
import forms from './modules/forms';    
import modal from './modules/modal';    
import slider from './modules/slider';  
import tabs from './modules/tabs';  
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout( () => openModal('.modal', modalTimerId), 400000);

    calc();
    card();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-03-01');
    slider({
        container : '.offer__slider',
        nextArrow : '.offer__slider-next',
        prevArrow : '.offer__slider-prev',
        totalCounter : '#total',
        currentCounter : '#current',
        wrapper : '.offer__slider-wrapper',
        field : '.offer__slider_inner',
        slide : '.offer__slide'
    });
});