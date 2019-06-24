import React, { Fragment } from 'react';

import IconButton from '@material-ui/core/IconButton';

import GitHub from './GitHub';

const ToolbarLinkIcons = () => {
  return (
    <Fragment>
      <IconButton
        href="https://github.com/thundermiracle/google-map-url-maker"
        color="inherit"
      >
        <GitHub />
      </IconButton>
    </Fragment>
  );
};

export default ToolbarLinkIcons;
