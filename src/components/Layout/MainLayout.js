import React from 'react';
import PropTypes from 'prop-types';
import classes from './MainLayout.scss';

const propTypes = {
  children: PropTypes.node,
};

const MainLayout = ({ children }) => (
  <div className={classes.wrapper}>
    <div className={classes.content}>
      {children}
    </div>
  </div>
);

MainLayout.propTypes = propTypes;
export default MainLayout;
