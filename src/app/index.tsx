import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';
// import registerServiceWorker from './registerServiceWorker';

declare let module: any

ReactDOM.render(<App compiler="Typescript" framework="React" bundler="Webpack" />, document.getElementById('root'));

// registerServiceWorker();

if (module.hot) {
    module.hot.accept();
}
