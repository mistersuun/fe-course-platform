import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Puff } from 'react-loader-spinner';
import { API_FETCH_COURSE_URL, API_URL } from "../constants";
import { Link } from 'react-router-dom';
import Div from '../Div';

function AccountOverview({ user }) {
  const [quote, setQuote] = useState(null);
  const isAdmin = localStorage.getItem('isAdmin');
  // eslint-disable-next-line
  const [username, setUsername] = useState(null);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (user && !username) {
      setUsername(user.username);
      setProgress(user.progress)
    } else if (!username) {
      setUsername(localStorage.getItem("username"));
      setProgress(localStorage.getItem('progress'));
    }
  }, [user, username]);

  
  // eslint-disable-next-line
  const [editable, setEditable] = useState(isAdmin === 'true');
  const course = 'Wholesale'
  const status = 'VIP'
  const phase = 'course - phase '

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const userId = localStorage.getItem("pk");
        const response = await axios.get(`${API_FETCH_COURSE_URL}${userId}`);
        setCourses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchEnrolledCourses();
  }, []);

  const agendaItems = courses.flatMap((course) => ([
    {
      type: course.name,
      icon: '📝',
      count: 0,
      category: 'Assessments'
    },
    {
      type: course.name,
      icon: '📋',
      count: course.documents.length,
      category: 'Assignments'
    },
    {
      type: course.name,
      icon: '❓',
      count: course.videos.length,
      category: 'Help'
    },
    {
      type: course.name,
      icon: '📚',
      count: course.documents.length,
      category: 'Documents'
    },
  ]));
  

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/random');
        setQuote(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchQuote();
  }, []);

  const saveProgress = async () => {
    // eslint-disable-next-line
    const studentId = localStorage.getItem('pk');
    // eslint-disable-next-line
    const newProgress = progress;
    
    try {
      const userId = localStorage.getItem("pk");
      // eslint-disable-next-line
      const response = await axios.patch(`${API_URL}${userId}`, progress);
      
      // Do something with the response if needed
    } catch (error) {
      console.error(error);
    }
  };

  if (!quote) {
    return (
      <div className="loader-container">
        <Puff color="#123abc" size={80} />
      </div>
    );    
  }
  

  const handleSliderChange = (value) => {
    setProgress(value);
  };

  const progressDisplay = editable ? (
    <input
      type="range"
      min="0"
      max="100"
      value={progress}
      onChange={(e) => handleSliderChange(e.target.value)}
    />
  ) : (
    <div >
    <div className="progress-slider">
    <div className="progress-slider-striped" style={{ width: `${progress}%` }}></div>

    </div>

    <h2 className="progress-percentage">{progress}%</h2>
    </div>
    
    
    
  );

  if (!username) {
    return (
      <div className="loader-container">
        <Puff color="#123abc" size={80} />
      </div>
    );
  }

  return (
    <Div className="cs-post cs-style2">
        {editable && <button onClick={saveProgress}>Save progress</button>}
        <div className="agenda">
        <h2>{course} {status}</h2>
        <h3>{phase}1</h3>
          {agendaItems.map((item) => (
            <div className="row" key={item.type}>
              <i className="icon">{item.icon}</i>
              <span className="type-item">{item.type}</span>
              <a href="#temp" className="item-link">
                <i className="icon">📄</i>
                {item.count} {item.category}
              </a>
            </div>
          ))}
        </div>
        <div className="my-classes">
          <h3><i className="icon">👥</i>My Classes</h3>
          {agendaItems.map((item) => (
            <div className="row" key={item.type}>
              <i className="icon">{item.icon}</i>
              <span className="type-item">{item.type}</span>
              <a href="#temp" className="item-link">
                <i className="icon">📄</i>
                {item.count} {item.category}
              </a>
            </div>
          ))}
        </div>
</Div>
);
}

export default AccountOverview;
