import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent } from '@material-ui/core';

export default function SimpleCard({ children }) {
  return (
    <Card>
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
