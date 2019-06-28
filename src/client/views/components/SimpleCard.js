import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent } from '@material-ui/core';

export default function SimpleCard({ children, ...resProps }) {
  return (
    <Card {...resProps}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  children: PropTypes.any,
};

SimpleCard.defaultProps = {
  children: null,
};
