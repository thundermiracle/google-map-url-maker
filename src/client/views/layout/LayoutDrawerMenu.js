import React from 'react';

import { NextLink } from 'lib/NextRelative';

import DrawerMenu from 'components/DrawerMenu';

const LayoutDrawerMenu = () => {
  return <DrawerMenu linkComponent={NextLink} />;
};

export default LayoutDrawerMenu;
