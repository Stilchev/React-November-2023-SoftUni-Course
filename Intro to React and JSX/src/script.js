import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootDomElement);

const reactHeadingElement = React.createElement('h1', {}, 'Hello world from JSX!');

const reactSecondHeadingElement = React.createElement('h2', {}, 'The best syntax ever! Really?');

const header = React.createElement('header',
    { className: 'site-header' },
    reactHeadingElement,
    reactSecondHeadingElement);

// const headerJSX = (
//     <header className='site-header'>
//         <h1>Hello world from JSX!</h1>
//         <h2>The best syntax ever! Really?</h2>
//     </header>
// )   

// const Footer = () => {
//     return React.createElement(
//         'footer',
//         {className: 'site-footer'},
//         React.createElement(
//             'p',
//             {},
//             'All rights reserved &copy;'
//         )
//     )
// }

root.render(header);
