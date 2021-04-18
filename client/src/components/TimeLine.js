import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
} from '@material-ui/lab';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const timelines = [
  {
    time : "9:30 am",
    icon: <FastfoodIcon />,
    activity : "Eat",
    whyToDo : "Because you need strength",
    color: ""
  },
  {
    time : "10:00 am",
    icon: <LaptopMacIcon />,
    activity : "Code",
    whyToDo :<>Because it&apos;s awesome! </>,
    color: "primary"
  },
  {
    time : "12:00 am",
    icon: <HotelIcon />,
    activity : "Sleep",
    whyToDo :'Beacause You Need Rest',
    color: ""
  },
  {
    time : "",
    icon: <RepeatIcon />,
    activity : "Repeat",
    whyToDo :'Because this is the life you love!',
    color: "secondary"
  },
]

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {
        timelines.map(timeline => {
          return (
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                  {timeline.time}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={timeline.color}>
                  {timeline.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography variant="h6" component="h1">
                    {timeline.activity}
                  </Typography>
                  <Typography>{timeline.whyToDo}</Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          )
        })
      }
    </Timeline>
  );
}
