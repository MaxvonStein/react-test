import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello.js';
// import './scss/main.scss';
import './style.css.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello hello={'Hello yins.'} />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
