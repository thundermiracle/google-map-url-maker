import React from 'react';

import { NextLink } from 'lib/NextRelative';

import DrawerMenu from 'components/DrawerMenu';

import pathmap from 'config/pathmap';

const LayoutDrawerMenu = () => {
  return <DrawerMenu pathMap={pathmap} linkComponent={NextLink} />;
};

export default LayoutDrawerMenu;
