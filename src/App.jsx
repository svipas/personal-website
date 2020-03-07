import React from 'react';
import githubIcon from './assets/github.svg';
import harbortouch from './assets/harbortouch.svg';
import jsconf from './assets/jsconf.svg';
import linkedin from './assets/linkedin.svg';
import mercavus from './assets/mercavus.png';
import profilePhoto from './assets/profile-photo.jpg';
import slk from './assets/slk.svg';
import telia from './assets/telia.svg';
import trackforce from './assets/trackforce.png';
import twitterIcon from './assets/twitter.svg';
import { Article } from './components/Article';
import { BinaryRain } from './components/BinaryRain';
import { Container } from './components/Container';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { H1, H2 } from './components/Headings';
import { Img } from './components/Img';
import { Links } from './components/Links';
import { Main } from './components/Main';
import { P } from './components/Paragraph';
import { Text } from './components/Text';
import { howOldAmI } from './utils';

export function App() {
  return (
    <Container>
      <GlobalStyle antialiasing />
      <Header>
        <BinaryRain columns={5} rows={5} />
        <Img rounded src={profilePhoto} alt='Profile photo' width={200} height={200} />
        <H1>Benas Svipas</H1>
        <Links>
          <Img src={githubIcon} href='https://github.com/svipas' alt='GitHub' width={28} height={28} />
          <Img src={twitterIcon} href='https://twitter.com/benas_svipas' alt='Twitter' width={28} height={28} />
          <Img src={linkedin} href='https://www.linkedin.com/in/svipas/' alt='LinkedIn' width={28} height={28} />
        </Links>
      </Header>
      <Main>
        <Article>
          <P>
            I'm {howOldAmI()} years old and live in Lithuania. I'm a self-taught <Text bold>Software Developer</Text>{' '}
            with professional bachelor's degree in computer network administration. I really love and feel a lot of
            passion while coding because I like to solve problems as well as create new functionality. Programming is a
            part of art where I can express myself. <Text bold>Preferred technologies:</Text> JavaScript, TypeScript,
            HTML, CSS, Node.js, React, React Native and Electron.
          </P>
        </Article>
        <Article>
          <H2 margin='0'>Experience</H2>
          <Experience
            src={mercavus}
            alt='Software Developer at mercavus'
            title='Software Developer'
            subtitle='mercavus'
            date='Jun 2019 – Present · Remote'
          />
          <Experience
            src={trackforce}
            alt='Software Developer at Trackforce'
            title='Software Developer'
            subtitle='Trackforce'
            date='Aug 2018 – May 2019 · 10 mos, Lithuania'
          />
          <Experience
            src={jsconf}
            alt='I participated in JSConf EU 2018'
            title='JSConf EU 2018'
            date='June 2018 · 2 days, Germany'
          />
          <Experience
            src={harbortouch}
            alt='Full Stack Developer at Harbortouch'
            title='Full Stack Developer'
            subtitle='Harbortouch'
            date='Jul 2017 – Jul 2018 · 1 yr 1 mo, Lithuania'
          />
          <Experience
            last
            src={telia}
            alt='.NET Developer at Telia'
            title='.NET Developer'
            subtitle='Telia'
            date='Nov 2016 – Dec 2016 · 2 mos, Lithuania'
          />
        </Article>
        <Article>
          <H2 margin='0 0 13px 0'>Education</H2>
          <Experience
            last
            src={slk}
            alt="Professional bachelor's degree, Computer Network Administrator"
            title="Professional bachelor's degree, Computer Network Administrator"
            subtitle='Northern Lithuania College'
            date='2014 – 2017'
          />
        </Article>
      </Main>
      <Footer>
        <P color='#4f5b66'>
          <Text italic>
            “If debugging is the process of removing bugs, then programming must be the process of putting them in.”
          </Text>{' '}
          - Edsger W. Dijkstra
        </P>
      </Footer>
    </Container>
  );
}
