
import React, { useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import history from './helpers/history';
import { alertActions } from './actions';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './HomePage/HomePage';
import { LoginPage } from './LoginPage/LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { user } = this.props;
        return (
              <React.Fragment>
                <Router history={history}>
                  <NavBar />
                  <Container>
                  <Switch>
                    <Route path="/login">
                      <LoginPage />
                    </Route>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                  </Switch>
                  </Container>
                </Router>
              </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    const { user, loggingIn } = authentication;
    return {
        alert,
        user,
        loggingIn
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
