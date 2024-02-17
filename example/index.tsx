import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DropdownSearch } from '../.';

const list = [
  'options',
  'long options',
  'options with icon',
  'long long options',
  'very long options',
  'very long long options',
];

const App = () => {
  return (
    <div>
      <DropdownSearch list={list} withOutline/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
