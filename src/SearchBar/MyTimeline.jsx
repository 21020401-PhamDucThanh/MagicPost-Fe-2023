import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import './MyTimeline.css';

const AlternateReverseTimeline = () => {
  return (
    <Timeline position="alternate-reverse" className="custom-timeline">
      <TimelineItem className="custom-timeline-item">
        <TimelineSeparator>
          <TimelineDot className="custom-timeline-dot" />
          <TimelineConnector className="custom-timeline-connector" />
        </TimelineSeparator>
        <TimelineContent className="custom-timeline-content custom-large-text">Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem className="custom-timeline-item">
        <TimelineSeparator>
          <TimelineDot className="custom-timeline-dot" />
          <TimelineConnector className="custom-timeline-connector" />
        </TimelineSeparator>
        <TimelineContent className="custom-timeline-content custom-large-text">Code</TimelineContent>
      </TimelineItem>
      <TimelineItem className="custom-timeline-item">
        <TimelineSeparator>
          <TimelineDot className="custom-timeline-dot" />
          <TimelineConnector className="custom-timeline-connector" />
        </TimelineSeparator>
        <TimelineContent className="custom-timeline-content custom-large-text">Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem className="custom-timeline-item">
        <TimelineSeparator>
          <TimelineDot className="custom-timeline-dot" />
        </TimelineSeparator>
        <TimelineContent className="custom-timeline-content custom-large-text">Repeat</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default AlternateReverseTimeline;
