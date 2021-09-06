import React from 'react';
import { useIntl } from 'react-intl';
import './App.css';

function App() {
  const intl = useIntl();
  return (
    <div className="App">
      <header className="App-header">
        {intl.formatMessage({ id: 'app.header' })}
      </header>
    </div>
  );
}

export default App;
