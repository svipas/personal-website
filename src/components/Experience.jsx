import React from 'react';
import { Img } from './Img';
import { Text } from './Text';
import styled from 'styled-components';
import { H3 } from './Headings';

export function Experience(props) {
  return (
    <Section last={props.last}>
      <Img src={props.src} alt={props.alt} width={50} height={50} />
      <Summary last={props.last}>
        <H3 margin='0' bold>
          {props.title}
        </H3>
        {!!props.subtitle && <Text medium>{props.subtitle}</Text>}
        <Text small color='#65737e'>
          {props.date}
        </Text>
      </Summary>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  ${props => !props.last && 'margin: 13px 0'};
`;

const Summary = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 16px;
  ${props => !props.last && 'padding-bottom: 13px'};
  ${props => !props.last && 'border-bottom: 1px solid #343d46'};

  & > :not(:last-child) {
    margin-bottom: 6px;
  }
`;
