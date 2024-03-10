import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Avatar from '@mui/material/Avatar';
import './card.css'
import HackerEarth from '../../assets/HackerEarth.png'
import club from '../../assets/club.jpg'
import internshala from '../../assets/internshala.jpg'
import learnvern from '../../assets/learnvern.jpg'
// import imuna from '../../assets/imuna.jpg'
export default function VolunteerTimeline() {
  return (
    <Timeline position="alternate">

      {/* HackerEarth */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.white"
        >
          Jun 2021 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  >
            <Avatar src={HackerEarth} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <div className="about__cards1" >
            <article className="about__card1" >
              <h3>HackerEarth</h3>
              <h5>Campus Ambassador</h5>
              <small>I joined as a campus ambassador at HackerEarth. I work is to get aware about the company HackerEarth and Host the events on HackerEarth Platform. Till now I have hosted 6 events with 500+ student. All events went successful. </small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Cutm Coding Club */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Feb 2021 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: 'palette.error.main' }}>
            <Avatar src={club} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px' }}>
          <div className="about__cards1" >
            <article className="about__card1">
              <h3>Centurion Coding Club</h3>

              <h5>Coordinator</h5>
              <small>I am a coding club cordinator which is locacted in my campus itself. I also lead a team where I worked on some of the project like Coding Club Website and so on.   </small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/*   Campus Ambassador Internshala */}

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Jun 20221- Aug 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <Avatar src={internshala} sx={{ bgcolor: 'primary.light' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1">
              <h3>Internshala</h3>
              <h5>Campus Ambassador</h5>
              <small>I was selected for the role of campus ambassador. It is my job to make aware about the Internshala in my campus.  </small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Jun 2021 - Oct 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.dark' }} />
          <TimelineDot color="warning">
            <Avatar src={learnvern} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1" >
              <h3>LearnVern</h3>
              <h5>Campus Ambassador</h5>
              <small>I have got this opportunity by registering many students from their website and after completing it I got a gift from this internshala. </small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
