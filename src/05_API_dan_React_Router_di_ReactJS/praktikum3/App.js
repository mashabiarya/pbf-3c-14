import logo from './logo.svg';
import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Beranda () {
  return <h2>Beranda</h2>;
}

function Tentang () {
  return (
  <div>
      <h2>Tentang</h2>
      <h3>NIM: 1841720020</h3>
      <h3>Nama: Mashabi Arya K</h3>
  </div>
  );
}

function Topik () {
  let { topicId } = useParams();
  return <h3>Topik yang terpilih: {topicId}</h3>;
}

function Codelabs () {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Codelabs</h2>
      <ul>
        <li>
          <Link to={`${match.url}/konsep-reactjs`}>Konsep ReactJS</Link>
        </li>
        <li>
          <Link to={`${match.url}/belajar-react-router`}>
            Belajar React Router
          </Link>
        </li>
      </ul>

      {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topik />
        </Route>
        <Route path={match.path}>
          <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default function App () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/tentang">Tentang</Link>
          </li>
          <li>
            <Link to="/codelabs">Codelabs</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/tentang">
            <Tentang />
          </Route>
          <Route path="/codelabs">
            <Codelabs />
          </Route>
          <Route path="/">
            <Beranda />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}