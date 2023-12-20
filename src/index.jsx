import { render } from 'preact';
import preactLogo from './assets/preact.svg';

import App from './pages/App';

import 'swiper/css/swiper.min.css';
import './stylesheets/main.scss';

render(<App />, document.getElementById('app'));
