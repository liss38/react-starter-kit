import createMenu from './menu';

const menu = createMenu(['Home', 'Skills', 'Projects', 'Socials'], 'main-nav');

document.body.appendChild(menu);