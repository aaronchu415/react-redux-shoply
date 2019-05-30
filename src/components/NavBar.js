import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import CartTotalContainer from '../container/CartTotalContainer'

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="">Shoply</NavLink>
          <NavLink className = 'nav-item nav-link active' to='/cart'>
            <CartTotalContainer/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link active" to='/' >Home <span className="sr-only">(current)</span></NavLink>
              <NavLink className="nav-item nav-link" to='/cart'>Cart</NavLink>
            </div>
          </div>
        </nav>
    )
  }
}
