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


class SignUp extends Component {
  state = { email: ' ', password: ' ', redirect: null };
  signUp = () => {
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({ redirect: '/Dashboard'}))
      .catch((error) => alert(error.message));
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <Container component="main" maxWidth="xs" style={{marginTop:'30px'}}>
        <CssBaseline />
        <div >
          <Typography component="h1" variant="h5" style={{marginBottom:'30px'}}>
            Sign up
        </Typography>
          <form >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={this.signUp}
              fullWidth
              variant="contained"
              color="primary"

            >
              Sign Up
          </Button>
            <Grid container justify="flex-end" style={{marginTop:'30px'}}>
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Login here
              </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUp