import React, { Component } from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'

export const CoreLayout = ({ children }) => (
  <div className="container">

  {children}
  
  </div>
)
CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
