import React from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { DB, myFirebase } from "../firebase.config";
// import "../css/bootstrap.min.css";

function DaftarArtikel(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      dataArtikel: [],
      postArtikel: {
        id: "",
        userId: 1,
        title: "",
        body: "",
      },
    };
  }

  ambilDataDariServerAPI = () => {
    let ref = DB.ref("articles/");
    ref.on("value", (snapshot) => {
      if (snapshot.val() !== null)
        this.setState({
          dataArtikel: snapshot.val(),
        });
    });
  };

  simpanDataKeServerAPI = () => {
    DB.ref("articles/").set(this.state.dataArtikel);
  };

  handleTombolSimpan = (e) => {
    e.preventDefault();

    const { dataArtikel, postArtikel } = this.state;

    if (postArtikel.id && postArtikel.title && postArtikel.body) {
      const indeksArtikel = dataArtikel.findIndex((data) => {
        return data.id === postArtikel.id;
      });

      dataArtikel[indeksArtikel].title = postArtikel.title;
      dataArtikel[indeksArtikel].body = postArtikel.body;
      this.setState({ dataArtikel });
    } else if (postArtikel.title && postArtikel.body) {
      console.log(dataArtikel);
      const id = new Date().getTime().toString();
      let userId = myFirebase.auth().currentUser.email; // TODO: set to username/email
      let title = postArtikel.title;
      let body = postArtikel.body;
      dataArtikel.push({ id, userId, title, body });
      this.setState({ dataArtikel });
    }

    postArtikel.id = "";
    postArtikel.title = "";
    postArtikel.body = "";
    this.setState({ postArtikel });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.dataArtikel) {
      this.simpanDataKeServerAPI();
    }
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      prevState.postArtikel[name] = value;
      return {
        postArtikel: prevState.postArtikel,
      };
    });
  };

  handleTombolHapus = (e) => {
    e.preventDefault();

    const { dataArtikel } = this.state;

    const newState = dataArtikel.filter((data) => {
      return data.id !== e.target.value;
    });

    this.setState({ dataArtikel: newState });
    alert("Data berhasil dihapus!");
  };

  handleTombolEdit = (e) => {
    e.preventDefault();

    const { dataArtikel, postArtikel } = this.state;

    const updateData = dataArtikel.find((data) => {
      return data.id === e.target.value;
    });

    this.setState({ postArtikel: updateData, showEdit: true });
  };

  handleUpdateArtikel = (e) => {
    e.preventDefault();
    const { dataArtikel, postArtikel } = this.state;
    if (postArtikel.id != null) {
      let id = postArtikel.id;
      const updateState = dataArtikel.find((data) => {
        return data.id === postArtikel.id;
      });
      updateState.userId = myFirebase.auth().currentUser.email;
      updateState.title = postArtikel.title;
      updateState.body = postArtikel.body;
      console.log(updateState);
      console.log(dataArtikel);
      console.log(postArtikel);
      console.log(e.target);
    }
    postArtikel.id = "";
    postArtikel.title = "";
    postArtikel.body = "";
    this.setState({ postArtikel, showEdit: false });
  };

  handleTombolBatal = (e) => {
    e.preventDefault();

    const { postArtikel } = this.state;
    postArtikel.id = "";
    this.setState({ postArtikel, showEdit: false });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  render() {
    const { dataArtikel, showEdit, postArtikel } = this.state;

    return (
      <div>
        <Container>
          <Form onSubmit={this.handleTombolSimpan}>
            <Form.Group controlId="inputJudul">
              <Form.Label>Judul Artikel</Form.Label>
              <Form.Control
                required
                type="text"
                name="title"
                placeholder="judul artikel"
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="inputIsiArtikel">
              <Form.Label>Isi Artikel</Form.Label>
              <Form.Control
                required
                name="body"
                onChange={this.handleOnChange}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan Artikel
            </Button>
          </Form>
        </Container>

        <hr />
        <h2>Daftar Artikel</h2>
        {(dataArtikel || []).map((artikel) => {
          return (
            <div key={artikel.id}>
              <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
              <Button
                variant="info"
                value={artikel.id}
                onClick={this.handleTombolEdit}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                value={artikel.id}
                onClick={this.handleTombolHapus}
              >
                Hapus
              </Button>
              <hr></hr>
            </div>
          );
        })}
        <Modal
          show={showEdit}
          onHide={() => this.setState({ showEdit: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Artikel
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleUpdateArtikel}>
                <Form.Group controlId="inputJudul">
                  <Form.Label>Judul Artikel</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="title"
                    value={postArtikel.title}
                    placeholder="judul artikel"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="inputIsiArtikel">
                  <Form.Label>Isi Artikel</Form.Label>
                  <Form.Control
                    required
                    name="body"
                    value={postArtikel.body}
                    placeholder="isi artikel"
                    onChange={this.handleOnChange}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={() => this.setState({ showEdit: false })}
                >
                  Update Artikel
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.handleTombolBatal}>
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
