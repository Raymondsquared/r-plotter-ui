import React from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import Plot from './Plot';

const GridItem = styled(({ ...otherProps }) => <Grid {...otherProps} />)`
  && {
    margin: 1em 0;
  }
`;

function PlotterPage(props) {
  const { numbers, url } = props;

  return (
    <Grid container spacing={1}>
      <GridItem item xs={12}>
        <p>URL: {url}</p>
      </GridItem>
      <GridItem item xs={12}>
        <Plot numbers={numbers} />
      </GridItem>
    </Grid>
  );
}

export default PlotterPage;
