import React from "react";
import API from '../services/Komentar';
import { Button } from "react-bootstrap";

function DaftarComment(props) {
  return (
    <div>
      <h3>{props.komentar}</h3>
      <div>Pengirim : {props.pengirim}</div>
    </div>
  );
}

export default class CommentPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComment: [], // untuk menampung data API
      postComment: {
        userId: 1,
        nama: "",
        komentar: "",
      },
    };
  }

  ambilDataDariServerAPI = () => {
    API.getCommentBlog().then((result) => {
      this.setState({
        dataComment: result,
      });
    });
  };

  handleTombolSimpanKomen = (e) => {
    e.preventDefault();

    API.postCommentBlog(this.state.postComment).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data komen berhasil disimpan!");
    });
  };

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      prevState.postComment[name] = value;
      return {
        postComment: prevState.postComment,
      };
    });
  };

  handleTombolHapusKomen = (e) => {
    e.preventDefault();

    API.deleteCommentBlog(e.target.value).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data komen berhasil dihapus!");
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  render() {
    const { dataComment, postComment } = this.state;
    return (
      <div>
        <div>
          <form onSubmit={this.handleTombolSimpanKomen}>
            <label>
              Komentar:
              <input
                type="text"
                name="komentar"
                defaultValue={postComment.komentar}
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              Pengirim:
              <input
                type="text"
                name="nama"
                defaultValue={postComment.nama}
                onChange={this.handleOnChange}
              />
            </label>
            <input type="submit" value="Simpan" />
          </form>
        </div>
        <hr></hr>
        <h2>Daftar Komen</h2>
        {dataComment.map((dataComment) => {
          return (
            <div key={dataComment.id}>
              <DaftarComment
                komentar={dataComment.komentar}
                pengirim={dataComment.nama}
              />
              <Button
                variant="danger"
                value={dataComment.id}
                onClick={this.handleTombolHapusKomen}
              >
                Hapus
              </Button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}
