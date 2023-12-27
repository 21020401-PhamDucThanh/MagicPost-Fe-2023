// MyTimeline.jsx
import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const MyTimeline = ({ data }) => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    // Cập nhật state timelineData khi props data thay đổi
    setTimelineData(Array.isArray(data) ? data : []);
  }, [data]);

  return (
    <VerticalTimeline>
      {Array.isArray(timelineData) && timelineData.map((eventData, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
        >
          <h4 className="vertical-timeline-element-subtitle">{eventData.time}</h4>
          <p>
            Location: {eventData.location}, Address: {eventData.address}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default MyTimeline;
