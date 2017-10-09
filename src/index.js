// Import Styles
import 'semantic-ui-css/semantic.min.css';
import './index.css';
// Import Components
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/mainComponent';
// Misc
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainComponent />, document.getElementById('root'));
registerServiceWorker();
