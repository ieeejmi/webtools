import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 800,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12}>
         <Typography  color='textPrimary'>Automate Certificates</Typography>
        </Grid>
      </Grid>
      <form action='Post'>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography color='textPrimary'>Certificate</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type='file'
              fullWidth
              margin='dense'
              id='cert' />
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Typography color='textPrimary'>CSV File</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type='file'
              fullWidth
              margin='dense'
              id='csv-file' />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item xs={12} >
            <Button variant='contained' fullWidth>Send</Button>
          </Grid>
        </Grid>

      </form>
    </div>
  );

  return (
    <div>
      <Button type="button" style={{color:'white'}} onClick={handleOpen}>
        Certdealer
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}