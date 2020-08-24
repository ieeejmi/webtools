import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 20,
      maxWidth:700,
      marginTop: 60,
      display: 'inline'
    },
  }),
);


export default function Scheduler() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ScheduleComponent>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}></Inject>
      </ScheduleComponent>
    </div>
  )

}
