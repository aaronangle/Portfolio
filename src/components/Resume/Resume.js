import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';

export const Resume = () => {
  const [show, setShow] = useState(0);
  return (
    <>
      <div className={styles.top__svg}>
        <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#eeeeee', width: '100%', height: 95, transform: 'rotate(180deg)' }}>
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>
      <div className={styles.cont}>
        <div className={styles.card}>
          <h2>Work Experience</h2>
          <div className={styles.row}>
            <h4 className={styles.mb}>Frontend Developer</h4>
            <p className={styles.mt}>Eastern Arizona College · Full-time</p>
            <p className={styles.date}>March 2020 - Present</p>
            <SwitchTransition mode="out-in">
              <CSSTransition key={show === 1} addEndListener={(node, done) => node.addEventListener('transitionend', done, false)} classNames="drop">
                {show === 1 ? (
                  <div className="">
                    <p>
                      Creating, improving, and updating multiple web-based software programs used by staff and students. Managing multiple projects simultaneously. Focusing on the user experience and
                      ease of use for students and staff.
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
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className={styles.row}>
            <h4 className={styles.mb}>Teacher Assistant</h4>
            <p className={styles.mt}>Trilogy Education · Part-time</p>
            <p className={styles.date}>December 2021 - Present</p>
            <SwitchTransition mode="out-in">
              <CSSTransition key={show === 2} addEndListener={(node, done) => node.addEventListener('transitionend', done, false)} classNames="drop">
                {show === 2 ? (
                  <div className="">
                    <p>
                      Teaching students fundamental web development skills. Breaking down complex problems and technologies into simpler terms for students to understand. Working one on one and in
                      groups with students to help them understand and complete assignments. Answering a variety of web development questions from students in a clear and concise manner.
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
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className={styles.row}>
            <h4 className={styles.mb}>Frontend Developer</h4>
            <p className={styles.mt}>Southeast Directional Drilling · Full-time</p>
            <p className={styles.date}>December 2019 - March 2020</p>
            <SwitchTransition mode="out-in">
              <CSSTransition key={show === 3} addEndListener={(node, done) => node.addEventListener('transitionend', done, false)} classNames="drop">
                {show === 3 ? (
                  <div className="">
                    <p>
                      Improving and expanding an internal web-based software system for Southeast Directional Drilling. Enhancing user interface and user experience, as well as improving and
                      implementing functionality on the front end of the site. The software tracks drills, schedules, shifts, users, and various other details.
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
              </CSSTransition>
            </SwitchTransition>
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
        <div className={styles.bottom__svg}>
          <svg preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#0f1216', width: '100%', height: 120, transform: 'rotate(180deg)' }}>
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>
      </div>
    </>
  );
};
