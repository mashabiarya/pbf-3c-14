import React from 'react';
import API from '../services/Artikel';
import "bootstrap/dist/css/bootstrap.min.css";
import { 
Button
} from 'react-bootstrap';

function DaftarArtikel(props){
    return(
      <div>
        <h3>{props.judul}</h3>
        <div>{props.isiArtikel}</div>
      </div>
    );
  }
  export default class BlogPost extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        dataArtikel: [], // untuk menampung data API
        postArtikel: {
          userId: 1,
          title: '',
          body: ''
        }     
      };
    }
    handleTombolSimpan = (e) => {
      e.preventDefault();
  
      API.postNewsBlog(this.state.postArtikel)
        .then((response) => {
          this.ambilDataDariServerAPI();    // refresh data
          alert('Data berhasil disimpan!');
        });
    }
    handleOnChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      this.setState(prevState => {
        prevState.postArtikel[name] = value;
        return {
          postArtikel: prevState.postArtikel
        };
      });
    }
    ambilDataDariServerAPI = () => {
      API.getNewsBlog().then(result => {
        this.setState({
          dataArtikel: result
        })
      })
    }
  
    componentDidMount () {
      this.ambilDataDariServerAPI()
    }
  
    render () {
      const { dataArtikel, postArtikel } = this.state;
      return (
        <div>
          <div>
            <form onSubmit={this.handleTombolSimpan}>
              <label>
                Judul Artikel:
                <input type="text" name="title" defaultValue={postArtikel.title} onChange={this.handleOnChange} />
              </label>
              <label>
                Isi Artikel:
                <input type="text" name="body" defaultValue={postArtikel.body} onChange={this.handleOnChange} />
              </label>
              <input type="submit" value="Simpan" />
            </form>
          </div>
          <hr></hr>
          <h2>Daftar Artikel</h2>
        {
          dataArtikel.map(artikel => {
            return (
              <div key={artikel.id}>
                <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
                <Button variant="danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button>
                <hr></hr>
              </div>
            )
          })
        }
        </div>
      );
      
    }
    handleTombolHapus = (e) => {
      e.preventDefault();
  
      API.deleteNewsBlog(e.target.value)
        .then((response) => {
          this.ambilDataDariServerAPI();    // refresh data
          alert('Data berhasil dihapus!');
        });
    }
  }
  