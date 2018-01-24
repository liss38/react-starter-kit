import './index.scss';
import 'normalize.css';


import createMenu from '../../components/menu/menu';
const menu = createMenu(['Главная', 'Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
console.log('======================================');
console.log($);
console.log(jQuery);