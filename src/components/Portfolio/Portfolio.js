import React, { useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import styles from './styles.module.css';

const portfolioItems = [
  {
    name: 'ConstructIT Pro',
    details:
      "ConstructIT Pro is my personal project that I work on in my free time. It's a project management solution for construction companies. ConstructIT Pro has a lot of functionality. I've been working on it for quite a while now. I even made an app for Google Play and the App Store. Working on this project definitely helped me level up my skills as a developer. The site supports hundreds of users and dozens of daily active users. The code is stored on a private repo but feel free to check out the site and app.",
    repo: '',
    image: require('../../assets/ConstructIT.jpg'),
    links: [
      {
        title: 'Website',
        url: 'https://constructit.pro/index.html',
      },
      {
        title: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.constructitpro.myapp',
      },
      {
        title: 'App Store',
        url: 'https://apps.apple.com/am/app/constructit-pro/id1535736407',
      },
    ],
    tags: ['Vue', 'CSS', 'Node', 'Express', 'MongoDB', 'AWS', 'SCSS'],
  },
  {
    name: 'Git_Tweeter',
    details:
      "Git_Tweeter is a twitterish clone for viewing GitHub data that I built as a demo application. One of the biggest challenges with this project was dealing with the rate limit on GitHub's API. In order to mitigate this problem I used React Query and cached all the server data I could. After I finished the website version, I used React Native to build an app which I published on the Google Play store. I really focused on trying to write clean and maintainble code on this project, and I put a heavy emphasis on the architecture of the code.",
    repo: 'https://github.com/aaronangle/Git_Twitter',
    image: require('../../assets/Git_Tweeter.png'),
    links: [
      {
        title: 'Website',
        url: 'https://aaronangle.github.io/Git_Twitter/',
      },
      {
        title: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.ang.gittweeter',
      },
    ],
    tags: ['React', 'React Native', 'CSS', 'React Query'],
  },
  {
    name: 'Gila Hank',
    details:
      "Gila Hank is the student access portal for Eastern Arizona College students. Students can register for classes, view their schedules, apply for dorms, pay fees, apply for scholarships, join clubs, and a lot more. Gila Hank has a ton of functionality and it was a pretty big project. I was the only front-end developer while we created Gila Hank. Unfortunatley you have to login to access Gila Hank so most people can't view the site.",
    repo: '',
    image: require('../../assets/GilaHank.jpg'),
    links: [],
    tags: ['Vue', 'Vuex', 'CSS', 'C#'],
  },
  {
    name: 'EAC Class Search',
    details:
      'EAC Class Search provides students and prospective students the ability to search for classes offered at EAC. Students can also submit requests to have courses offered online or offered at different times.',
    repo: '',
    image: require('../../assets/EACClassSearch.jpg'),
    links: [
      {
        title: 'Website',
        url: 'https://classsearch.eac.edu/',
      },
    ],
    tags: ['React', 'CSS'],
  },
  {
    name: 'Sea Tab',
    details:
      'I decided to try to put my coding skills to good use for this project. Sea Tab is a free chrome extension that shows a small advertisement every time a new tab is opened. The money generated from that ad is donated to charities that work on cleaning the ocean. For this project I really had to focus on speed. Users expect their browsers to load fast every time. To achieve this I utilized the browsers IndexedDB API to store the background videos, and local storage to store everything else.',
    repo: '',
    image: require('../../assets/SeaTab.png'),
    links: [
      {
        title: 'Extension',
        url: 'https://chrome.google.com/webstore/detail/sea-tab/bkiiomcjgmhfleealakhcdkgchnfkjib',
      },
    ],
    tags: ['HTML', 'JavaScript', 'CSS'],
  },
  {
    name: 'SouthEast Directional Drilling Dashboard',
    details:
      'Dashboard for SouthEast Directional Drilling employee use. It handled employee information, scheduling, locations, and a lot of other stuff. I mainly worked on the front-end of this site. Unfortunately, the code and site can only be viewed by people inside the organization.',
    repo: '',
    image: require('../../assets/SEDD.jpg'),
    links: [],
    tags: ['React', 'Redux', 'CSS'],
  },
];

export const Portfolio = () => {
  const [index, setIndex] = useState(0);
  const [forward, setForward] = useState(true);

  function next() {
    setForward(true);
    setIndex(i => (i === portfolioItems.length - 1 ? 0 : ++i));
  }
  function prev() {
    setForward(false);
    setIndex(i => (i === 0 ? portfolioItems.length - 1 : --i));
  }

  return (
    <div className={styles.cont}>
      <div className={styles.arrow__cont}>
        <div className={styles.arrow} onClick={() => prev()} title="View Previous Project">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'white' }}>
            <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
          </svg>
          <p className={styles.arrow__text}>Prev</p>
        </div>
        <div className={styles.arrow} onClick={() => next()} title="View Next Project">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{ fill: 'white' }}>
            <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
          </svg>
          <p className={styles.arrow__text}>Next</p>
        </div>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={index}
          addEndListener={(node, done) => {
            node.addEventListener('transitionend', done, false);
          }}
          classNames={forward ? 'fade' : 'fadeback'}
        >
          <div key={index}>
            <div className={styles.cont__align}>
              <div className={styles.box}>
                <h2>{portfolioItems[index].name}</h2>
                <p>{portfolioItems[index].details}</p>
                {portfolioItems[index].repo ? (
                  <a href={portfolioItems[index].repo} className={styles.box__link}>
                    Repo
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                      <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                  </a>
                ) : (
                  <p>This code is on a private repo</p>
                )}
                {portfolioItems[index].links.map((link, index) => {
                  return (
                    <div key={index}>
                      <a href={link.url} className={styles.box__link}>
                        {link.title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                          <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className={styles.image__cont}>
                <img src={portfolioItems[index].image} alt="" className={styles.image} />
              </div>
            </div>
            <div className={styles.badge__row}>
              {portfolioItems[index].tags.map((tag, index) => {
                return (
                  <div key={index}>
                    <p className={styles.badge}>{tag}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
