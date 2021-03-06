import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types';
import Header from '../components/Header'

export const PublicLayout = ({ children }) => (
  <div className="container">

  <Header/>

  {children}
  
  </div>
)
PublicLayout.propTypes = {
  children: PropTypes.node,
}

export default PublicLayout
