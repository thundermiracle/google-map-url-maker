import React from 'react';
import PropTypes from 'prop-types';

import PersistLayout from 'components/PersistLayout';

import LayoutHead from './LayoutHead';
import LayoutDrawerHeader from './LayoutDrawerHeader';
import LayoutDrawerMenu from './LayoutDrawerMenu';

const Layout = props => {
  const { title, children } = props;

  const layoutdrawerHeader = (
    <LayoutDrawerHeader
      packageInfo={{
        version: process.env.PKG_VERSION,
        name: process.env.PKG_NAME,
      }}
    />
  );

  return (
    <PersistLayout
      drawerHeader={layoutdrawerHeader}
      drawerMenu={<LayoutDrawerMenu />}
      title={title || `${process.env.PKG_NAME} ${process.env.PKG_VERSION}`}
    >
      <LayoutHead
        title={title || `${process.env.PKG_NAME} ${process.env.PKG_VERSION}`}
      />
      {children}
    </PersistLayout>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Layout.defaultProps = {
  title: '',
  children: null,
};

export default Layout;
