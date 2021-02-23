import logo from './logo.svg';
import './App.css';

function Kartu (props) {
  return <h1>Halo, {props.nim} - {props.nama}</h1>;
}

function App() {
  return (
    <div>
      <Kartu nim="1841720020" nama="Mashabi Arya Kusuma" />
      <Kartu nim="1841720020" nama="Arya" />
      <Kartu nim="1841720020" nama="Kusuma" />
    </div>
  );
}

export default App;