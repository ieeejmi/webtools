
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import fire from '../../config/Fire';

class Login extends Component {
  state = { email: ' ', password: ' ', redirect: null };


  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  }

  login = () => {
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({ redirect: '/Dashboard' }))
      .catch((error) => alert(error.message));
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: '30px' }}>
        <CssBaseline />
        <div >
          <Typography component="h1" variant="h5" style={{ marginBottom: '30px' }}>
            Log in
        </Typography>
          <form >
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={this.handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              onClick={this.login}
              fullWidth
              variant="contained"
              color="primary"
            >
              LogIn
          </Button>
            <Grid container style={{ marginTop: '30px' }}>
              <Grid item>
                <Link href="/Signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default Login