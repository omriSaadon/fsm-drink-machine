import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardWrapper.scss';

const propTypes = {
  children: PropTypes.node,
};

const CardWrapper = ({ children }) => <div className={classes.item}>{children}</div>;

CardWrapper.propTypes = propTypes;
export default CardWrapper;
