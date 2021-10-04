import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types';
import Header from '../components/Header'

export const PrivateLayout = ({ children }) => (
  <div className="container">

  Private Layout

  {children}
  
  </div>
)
PrivateLayout.propTypes = {
  children: PropTypes.node,
}

export default PrivateLayout
