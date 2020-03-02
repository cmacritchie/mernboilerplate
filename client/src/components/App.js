import React, { useEffect, useState } from 'react';
import { Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../store/userReducer'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

//websocket
import socket  from '../websocket'

//components
import Header from './Header'

//pages
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'

//history
export const history = createBrowserHistory()

const App = ({ fetchUser }) => {

  useEffect(() => {
    socket.emit('serverPing')

    socket.on('returnPing', (data) => {
      console.log(data)
    })

    socket.on('newUser', ()=> {
      console.log('theres a new user!')
    })

    fetchUser()
    return () => {
      socket.off('returnPing')
    }
    
  }, []);

  return (
    <div className="container">
      <Router history={history}>
      <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable={false}
                pauseOnHover
                />
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/rooms/:id" component={Login} /> */}
      </Router>
    </div>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(
  actionCreators,
  dispatch
)

export default connect(null, mapDispatchToProps)(App);
