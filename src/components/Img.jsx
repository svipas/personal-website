import React, { useState } from 'react';
import styled from 'styled-components';

export function Img(props) {
  const [isLoaded, setLoaded] = useState(false);
  const image = new Image();
  image.src = props.src;
  image.onload = () => setLoaded(true);

  if (!isLoaded) {
    return (
      <Link href={props.href}>
        <Loading
          role='img'
          aria-label={props.alt}
          rounded={props.rounded}
          title={props.alt}
          width={props.width}
          height={props.height}
        />
      </Link>
    );
  }

  return (
    <Link href={props.href}>
      <img
        css={`
          border-radius: ${props.rounded && '50%'};
        `}
        src={props.src}
        alt={props.alt}
        title={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}

function Link(props) {
  if (props.href) {
    return (
      <a
        css={`
          transition: transform 0.5s;
          :hover {
            transform: scale(1.2);
          }
        `}
        href={props.href}
        target='_blank'
        rel='noopener noreferrer'
      >
        {props.children}
      </a>
    );
  }
  return props.children;
}

const Loading = styled.div`
  border-radius: ${props => props.rounded && '50%'};
  background: #343d46;
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
`;
