import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Certi from '@material-ui/icons/Assignment';
import { List, ListItem, Typography, Button, Chip, Grid, Popover } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      margin: theme.spacing(2),
      float: 'left',
    },
    button: {
      backgroundColor: 'green',
    },
    title: {
      marginLeft: 13,
      fontWeight: 'bold',
      color: '#009688',
      float: 'left',
    }
  }),
);

export default function Certdealer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'Certdealer' : undefined;

  return (
    <div>
      <List>
        <ListItem>
          <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
            <Certi />
          </Button>
        </ListItem>
      </List>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Chip label='certificates' color="primary" variant="default" className={classes.typography} />
        <Chip label='automation' color="primary" variant="default" className={classes.typography} />
        <form action='Post'>
          <Grid container >
            <Grid item xs={12}>
              <Typography className={classes.title}>select template</Typography>
            </Grid>
            <Grid item xs={12}>
              <input
                type='file'
                id='cert' />
            </Grid>
          </Grid>
          <hr />
          <Grid container >
            <Grid item xs={12}>
              <Typography className={classes.title}>select csv file</Typography>
            </Grid>
            <Grid item xs={12}>
              <input
                type='file'
                id='file' />
            </Grid>
          </Grid>
          <hr/>
          <br/>
          <Grid container>
            <Grid item xs={12} >
              <Button variant='contained' fullWidth className={classes.button} >Send</Button>
            </Grid>
          </Grid>
        </form>
      </Popover>
    </div>
  );
}
