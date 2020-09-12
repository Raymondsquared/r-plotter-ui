import React from 'react';
import { Line, LineChart, Tooltip, YAxis } from 'recharts';
import styled from 'styled-components';

const withStyles = (Component) => styled(Component)`
  && {
    margin: auto;
  }
`;

function Plot(props) {
  const { numbers } = props;
  const numbersMap = numbers.map((n) => {
    return {
      value: n,
    };
  });

  return (
    <LineChart width={1000} height={300} data={numbersMap} style={{ margin: 'auto' }}>
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}

export default withStyles(Plot);
