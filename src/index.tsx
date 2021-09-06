import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { IntlProvider } from 'react-intl';
import English from './lang/en.json';
import App from './App';
import reportWebVitals from './reportWebVitals';

const locale = navigator.language;
const lang = English;

ReactDOM.render(
  <IntlProvider locale={locale} messages={lang} defaultLocale="English">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </IntlProvider>,
  document.getElementById('root'),
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
