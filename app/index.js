import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


import 'styled-components/macro';

import { createGlobalStyle } from 'styled-components'




// Add global styles
const GlobalStyle = createGlobalStyle`
`

render(
      <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
