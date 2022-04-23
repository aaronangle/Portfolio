import React, { useState } from 'react';

import styles from './styles.module.css';

export const Resume = () => {
  const [show, setShow] = useState(0);
  return (
    <div className={styles.cont}>
      <div className={styles.card}>
        <h2>Work Experience</h2>
        <div className={styles.row}>
          <h4 className={styles.mb}>Frontend Developer</h4>
          <p className={styles.mt}>Eastern Arizona College · Full-time</p>
          <p className={styles.date}>March 2020 - Present</p>
          {show === 1 ? (
            <div className="">
              <p>
                Creating, improving, and updating multiple web-based software programs used by staff and students. Managing multiple projects simultaneously. Focusing on the user experience and ease
                of use for students and staff.
              </p>
              <div className={styles.badge__row}>
                <p className={styles.badge}>JavaScript</p>
                <p className={styles.badge}>React</p>
                <p className={styles.badge}>Vue</p>
                <p className={styles.badge}>C#</p>
                <p className={styles.badge}>SQL</p>
                <p className={styles.badge}>CSS</p>
              </div>
            </div>
          ) : (
            <p className={styles.row__more} onClick={() => setShow(1)}>
              Show Details
              <svg className={styles.row__svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </p>
          )}
        </div>
        <div className={styles.row}>
          <h4 className={styles.mb}>Teacher Assistant</h4>
          <p className={styles.mt}>Trilogy Education · Part-time</p>
          <p className={styles.date}>December 2021 - Present</p>
          {show === 2 ? (
            <div className="">
              <p>
                Teaching students fundamental web development skills. Breaking down complex problems and technologies into simpler terms for students to understand. Working one on one and in groups
                with students to help them understand and complete assignments. Answering a variety of web development questions from students in a clear and concise manner.
              </p>
              <div className={styles.badge__row}>
                <p className={styles.badge}>JavaScript</p>
                <p className={styles.badge}>React</p>
                <p className={styles.badge}>Node</p>
                <p className={styles.badge}>MongoDB</p>
                <p className={styles.badge}>SQL</p>
                <p className={styles.badge}>CSS</p>
              </div>
            </div>
          ) : (
            <p className={styles.row__more} onClick={() => setShow(2)}>
              Show Details
              <svg className={styles.row__svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </p>
          )}
        </div>
        <div className={styles.row}>
          <h4 className={styles.mb}>Frontend Developer</h4>
          <p className={styles.mt}>Southeast Directional Drilling · Full-time</p>
          <p className={styles.date}>December 2019 - March 2020</p>
          {show === 3 ? (
            <div className="">
              <p>
                Improving and expanding an internal web-based software system for Southeast Directional Drilling. Enhancing user interface and user experience, as well as improving and implementing
                functionality on the front end of the site. The software tracks drills, schedules, shifts, users, and various other details.
              </p>
              <div className={styles.badge__row}>
                <p className={styles.badge}>JavaScript</p>
                <p className={styles.badge}>React</p>
                <p className={styles.badge}>CSS</p>
              </div>
            </div>
          ) : (
            <p className={styles.row__more} onClick={() => setShow(3)}>
              Show Details
              <svg className={styles.row__svg} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </p>
          )}
        </div>
      </div>
      <div className={styles.card}>
        <h2>Education</h2>
        <div>
          <h4 className={styles.mb}>Eastern Arizona College</h4>
          <p className={styles.mt}>Associate's degree, General Studies</p>
        </div>
        <div>
          <h4 className={styles.mb}>University of Arizona</h4>
          <p className={styles.mt}>Certificate Full Stack Web Development</p>
        </div>
      </div>
    </div>
  );
};
