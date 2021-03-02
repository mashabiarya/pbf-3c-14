import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function NumberList(props) {
  const nim = props.nim;
  const listItems = nim.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const nim = [1, 8, 4, 7, 2, 5]; // <-- Ubah sesuai NIM Anda
ReactDOM.render(
  <NumberList nim={nim} />,
  document.getElementById('root')
);

