import React from 'react';

import styles from './styles.module.css';

import { ReactComponent as SVG } from 'assets/background.svg';

export const Header = () => {
  return (
    <div className={styles.cont}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Aaron Angle</h1>
        <h2 className={styles.heading__two}>Full-Stack Developer</h2>
        <p className={styles.text}>
          I enjoy working with CSS, JavaScript, React, Vue, MongoDB, SQL, Node, React Native, and a bunch of other stuff. I've also worked quite a bit with AWS - S3, CloudFront, Amplify, Cognito,
          Route 53, CodeBuild, and I've researched a lot about EC2/Elastic Beanstalk and Lambda. Every day I try to code outside of work, solve an algorithm, and learn something new in the web dev
          world. I'm highly motivated and very passionate about programming. You can check out my portfolio below to view some of the projects that I've worked on. Feel free to reach out if you are
          interested in working together. I'm always looking for new things to work on and new opportunities.
        </p>
      </div>
      <SVG className={styles.background} />
    </div>
  );
};
