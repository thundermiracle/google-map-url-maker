import React from 'react';

import { NextLink } from 'lib/NextRelative';

import DrawerMenu from 'components/DrawerMenu';

const LayoutDrawerMenu = () => {
  const pathmap = [
    {
      pathname: '',
      pathtext: '変換ツール',
    },
    {
      pathname: 'about',
      pathtext: '使用説明',
    },
  ];

  return <DrawerMenu pathMap={pathmap} linkComponent={NextLink} />;
};

export default LayoutDrawerMenu;
