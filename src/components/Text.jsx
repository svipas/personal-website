import styled from 'styled-components';

export const Text = styled.span`
  font-weight: ${props => props.bold && '600'};
  font-style: ${props => props.italic && 'italic'};
  font-size: ${props => props.medium && '18px'};
  font-size: ${props => props.small && '14px'};
  color: ${props => props.color};
`;
