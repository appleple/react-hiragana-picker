import { render } from 'react-dom';
import * as React from 'react';
import HiraganaPicker from './src';
import './css/index.css';
render(React.createElement(HiraganaPicker, { value: "\u3042", onChange: function (value) {
        console.log(value);
    } }), document.getElementById('app'));
//# sourceMappingURL=demo.js.map