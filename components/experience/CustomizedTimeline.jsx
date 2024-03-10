import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import NetworkCellIcon from '@mui/icons-material/NetworkCell';
// import LanguageIcon from '@mui/icons-material/Language';
// import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FoundationIcon from '@mui/icons-material/Foundation';
import Avatar from '@mui/material/Avatar';
import './card.css'
import motherson from '../../assets/motherson.png'
// import cutm from "../../assets/cutm.jpg"
import tanman from '../../assets/tanman.png'
import suvida from '../../assets/suvida.png'
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">

      {/* Motherson */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.white"
        >
          June 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot  >
            <Avatar src={motherson} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <div className="about__cards1" >
            <article className="about__card1" >
              <NetworkCellIcon className="about__icon1" /> <h3>Motherson Sumi</h3>
              <h5>Project Trainee</h5>
              <small>  I have worked as a Project Trainee at Motherson Technology Services, where I contributed to the development of modules for the Rate Manager application for LMS. I also received recognition from project and tech leads for delivering high-quality work within the given deadlines.</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>

      {/* Cutm */}
      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          June 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: 'palette.error.main' }}>
            <Avatar src={cutm} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px' }}>
          <div className="about__cards1" >
            <article className="about__card1">
              <LanguageIcon className="about__icon1" /> <h3>Centurion University</h3>

              <h5>Web Developer</h5>
              <small> I got this internship from my college itself. The objective of this internship is to develop successful web based home automation systems.</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem> */}

      {/* Tanman */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Apr 2022 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.dark' }} />
          <TimelineDot color="warning">
            <Avatar src={tanman} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>


          <div className="about__cards1" >
            <article className="about__card1" >
              <DirectionsBusIcon className="about__icon1" />
              <h3>Tan Man Foundation</h3>
              <h5>Web Developer</h5>
              <small>I have also worked as a Web Development Intern at The Tan Mann Foundation and Suvida Foundation, where I developed an E-Commerce platform for virtual clothing try-ons and designed and developed student and home modules, respectively. These experiences allowed me to gain valuable insights into website design and implementation, user engagement, and e-commerce development.</small>
            </article>
          </div>
        </TimelineContent>
      </TimelineItem>
      {/* Suvida */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.white"
        >
          Fab 2022 - Apr 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary' }} />
          <TimelineDot color="success">
            <Avatar src={suvida} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>

          <div className="about__cards1" >
            <article className="about__card1" >
              <FoundationIcon className="about__icon1" />
              <h3>Suvidha Foundation</h3>
              <h5>Web Developer</h5>
              <small> 
              <b>Designed and developed:</b> the student and home modules using Figma and MySQL, respectively
              <b>◦ Gained experience:</b> in website design and implementation
              <b>◦ Received :</b> positive feedback and recognition from my supervisor for my contributions to the project
              </small>
            </article>
          </div>
        </TimelineContent>

      </TimelineItem>
    </Timeline>
  );
}
