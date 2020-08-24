import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import fire from '../../config/Fire'
import { Button } from '@material-ui/core';

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
              <Button style={{color:'white'}}><AccountCircleIcon /></Button>
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    )
  }
}

export default Logout