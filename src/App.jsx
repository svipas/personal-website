import React from 'react';
import { Container } from './components/Container';
import { GlobalStyle } from './components/GlobalStyle';
import { Header } from './components/Header';
import { BinaryRain } from './components/BinaryRain';
import { Img } from './components/Img';
import { H1, H2 } from './components/Headings';
import { Links } from './components/Links';
import { Main } from './components/Main';
import { P } from './components/Paragraph';
import { Text } from './components/Text';
import profilePhoto from './assets/profile-photo.jpg';
import githubIcon from './assets/github.svg';
import twitterIcon from './assets/twitter.svg';
import mediumIcon from './assets/medium.svg';
import linkedin from './assets/linkedin.svg';
import { Experience } from './components/Experience';
import { Article } from './components/Article';
import trackforce from './assets/trackforce.png';
import jsconf from './assets/jsconf.svg';
import harbortouch from './assets/harbortouch.svg';
import telia from './assets/telia.svg';
import slk from './assets/slk.svg';
import { Footer } from './components/Footer';
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
          <Img src={mediumIcon} href='https://medium.com/@svipas' alt='Medium' width={28} height={28} />
          <Img src={linkedin} href='https://www.linkedin.com/in/svipas/' alt='LinkedIn' width={28} height={28} />
        </Links>
      </Header>
      <Main>
        <Article>
          <P>
            I'm {howOldAmI()} years old and live in Lithuania. I'm a self-taught <Text bold>Full Stack Developer</Text>{' '}
            with <Text bold>Professional bachelor's degree in Computer Network Administration</Text>. I really love and
            feel a lot of passion while coding because I like to solve problems as well as create new functionality.
            Programming is a part of art where I can express myself.
          </P>
        </Article>
        <Article>
          <H2 margin='0'>Experience</H2>
          <Experience
            src={trackforce}
            alt='Full Stack Developer at Trackforce'
            title='Full Stack Developer'
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
            alt='Full Stack JavaScript Developer at Harbortouch'
            title='Full Stack JavaScript Developer'
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
