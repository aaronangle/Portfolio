import React, { useState } from 'react';

import styles from './styles.module.css';

export const Resume = () => {
  const [show, setShow] = useState(0);
  return (
    <div className={styles.cont}>
      {/* <button className="button-primary">
        Download
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path>
        </svg>
      </button> */}
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
