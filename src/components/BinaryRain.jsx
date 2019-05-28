import React from 'react';
import styled from 'styled-components';

export function BinaryRain(props) {
  const columns = createColumns(props.columns, props.rows);
  return (
    <div
      css={`
        display: flex;
        text-align: center;
        font-size: 18px;
        color: #4f5b66;
        margin: -15px 0 -20px 0;
      `}
    >
      {columns.map((rows, i) => (
        <Column key={i} rows={rows} />
      ))}
    </div>
  );
}

function Column(props) {
  return (
    <div
      css={`
        margin: 5px;
      `}
    >
      {props.rows.map((val, i) => (
        <Row key={i}>{val}</Row>
      ))}
    </div>
  );
}

const Row = styled.span`
  display: block;
  margin-bottom: 2px;
`;

function createColumns(columns, rows) {
  return new Array(columns).fill().map((_, colIndex) => {
    return new Array(rows).fill().map((_, rowIndex) => {
      if (colIndex % 2 === 0) {
        return rowIndex % 2 === 0 ? 0 : 1;
      }
      return rowIndex % 2 === 0 ? 1 : 0;
    });
  });
}
