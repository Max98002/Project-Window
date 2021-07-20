'use strict';

import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import showBigImg from './modules/showBigImg';

window.addEventListener('load', () => {
  "use strict";

  let modalState = {};
  changeModalState(modalState);

  modals();

  tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

  tabs('.balcon_icons', '.balcon_icons_img', '.popup_calc_content > .big_img > img', 'do_image_more', 'inline-block');

  forms('form', modalState);

  timer('.container1', '2021-08-25');

  showBigImg();


});