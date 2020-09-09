import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import fire from '../../config/Fire'
import { Button, List, ListItem } from '@material-ui/core';

class Logout extends Component {
  state = { user: {}, redirect: null };

  logout = () => {
    fire.auth().signOut()
    .then(() => this.setState({ redirect: '/' }))
    .catch(error=>alert(error.message));
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (
      <div>
        <List>
          <ListItem>
            <ListItemIcon onClick={this.logout}>
              <Button variant='contained' color='primary'><AccountCircleIcon /></Button>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Logout