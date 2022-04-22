import React from 'react';

const portfolioItems = [
  {
    name: 'ConstructIT Pro',
    details:
      "ConstructIT Pro is my personal project that I work on in my free time. It's a project management solution for construction companies. ConstructIT Pro has a lot of functionality. I've been working on it for quite a while now. I even made an app for Google Play. It was on the App Store but I didn't want to keep paying the annual fee for developers that Apple charges. The site supports hundreds of users and dozens of daily active users. The code is stored on a private repo but feel free to check out the site and app.",
    repo: '',
    image: require('../../assets/ConstructIT.jpg'),
    links: [],
    tags: ['Vue', 'CSS', 'Node', 'Express', 'MongoDB', 'AWS', 'SCSS'],
  },
  {
    name: 'Git_Tweeter',
    details: '',
    repo: '',
    image: require('../../assets/Git_Tweeter.png'),
    links: [],
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
    links: [],
    tags: ['React', 'CSS'],
  },
  {
    name: 'Sea Tab',
    details:
      'I decided to try to put my coding skills to good use for this project. Sea Tab is a free chrome extension that shows a small advertisement every time a new tab is opened. The money generated from that ad is donated to charities that work on cleaning the ocean. For this project I really had to focus on speed. Users expect their browsers to load fast every time. To achieve this I utilized the browsers IndexedDB API to store the background videos, and local storage to store everything else.',
    repo: '',
    image: require('../../assets/SeaTab.png'),
    links: [],
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
  return <div></div>;
};
