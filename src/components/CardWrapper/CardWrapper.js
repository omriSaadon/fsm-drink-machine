import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardWrapper.scss';

const propTypes = {
  children: PropTypes.node,
};

const CardWrapper = ({ children }) => {
  const renderChild = (child) => <div className={classes.item}>{child}</div>;

  return React.Children.map(children, renderChild);
};

CardWrapper.propTypes = propTypes;
export default CardWrapper;
