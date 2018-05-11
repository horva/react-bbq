import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import BBQ from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BBQ />, document.getElementById('root'));
registerServiceWorker();
