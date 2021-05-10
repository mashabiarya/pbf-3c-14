import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/auth";

class Home extends React.Component {

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  render () {
    const { isLoggingOut, logoutError } = this.props;
    return (
      <div>
        <h1>Halaman ini dilindungi dengan password.</h1>
        <p>Semua routes di sini akan dilindungi.</p>
        <button onClick={this.handleLogout}>Keluar</button>
        {isLoggingOut && <p>Sedang proses logout...</p>}
        {logoutError && <p>Terjadi galat saat logout!</p>}
      </div>
    );
  }

}

function mapStateToProps (state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);