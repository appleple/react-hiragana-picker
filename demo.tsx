import { render } from 'react-dom'
import * as React from 'react';
import HiraganaPicker from './src';

import './css/index.css';

render(
  <HiraganaPicker value="あ" onChange={(value) => {
    console.log(value);
  }} />
  , document.getElementById('app'));