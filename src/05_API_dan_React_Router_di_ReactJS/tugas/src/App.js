import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Card,
  Container,
  Row,
  Col,
  Breadcrumb,
} from "react-bootstrap";

function Beranda() {
  return (
    <Container>
      <Row>
        <Col sm={12} className="mt-5">
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <h2>Beranda</h2>
            <h2>Mata Kuliah Pemrograman Berbasis Framework adalah sebuah 
              mata kuliah yang diharapkan dapat memberikan 
              pengetahuan dan keterampilan pembuatan aplikasi web 
              menggunakan framework ReactJS, firebase, dan backend Laravel.</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Tentang() {
  return (
    <Container>
      <Row>
        <Col sm={12} className="mt-5">
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>Tentang</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <h2>Tentang</h2>
            <h3>NIM: 1841720020</h3>
            <h3>Nama: Mashabi Arya Kusuma</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Topik() {
  let { topicId } = useParams();
  return <h3>Topik yang terpilih: {topicId}</h3>;
}

function Codelabs() {
  let match = useRouteMatch();

  return (
    <Container>
      <Row>
        <Col sm={12} className="mt-5">
          <Breadcrumb>
            <Breadcrumb.Item>Beranda</Breadcrumb.Item>
            <Breadcrumb.Item>Codelabs</Breadcrumb.Item>
          </Breadcrumb>
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
          </div>
        </Col>
      </Row>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topik />
        </Route>
        <Route path={match.path}>
          <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
        </Route>
      </Switch>
    </Container>
  );
}

function DaftarArtikel(props) {
  return (
    <Card className="m-3">
      <Card.Body>
        <div>
          <h3>{props.judul}</h3>
          <div>{props.isiArtikel}</div>
        </div>
      </Card.Body>
    </Card>
  );
}

class Berita extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null, // jika terjadi gagal ambil data dari API
      isLoaded: false, // untuk status ketika sedang memuat
      dataArtikel: [], // untuk menampung data API
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, dataArtikel } = this.state;

    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <Container>
          <Row>
            <Col sm={12} className="mt-5">
              <Breadcrumb>
                <Breadcrumb.Item>Beranda</Breadcrumb.Item>
                <Breadcrumb.Item>Berita</Breadcrumb.Item>
              </Breadcrumb>
              <div>
                <h2>Daftar Artikel</h2>
                {dataArtikel.map((artikel) => {
                  return (
                    <DaftarArtikel
                      key={artikel.id}
                      judul={artikel.title}
                      isiArtikel={artikel.body}
                    />
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Router</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                to="/beranda"
                style={{ textDecoration: "none", color: "white" }}
              >
                Beranda
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/berita"
                style={{ textDecoration: "none", color: "white" }}
              >
                Berita
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/tentang"
                style={{ textDecoration: "none", color: "white" }}
              >
                Tentang
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/codelabs"
                style={{ textDecoration: "none", color: "white" }}
              >
                Codelabs
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/tentang">
          <Tentang />
        </Route>
        <Route path="/berita">
          <Berita />
        </Route>
        <Route path="/codelabs">
          <Codelabs />
        </Route>
        <Route path="/">
          <Beranda />
        </Route>
      </Switch>
    </Router>
  );
}
