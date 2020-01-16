import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/partials/_main-header.scss"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query NavigationQuery {
      allNavigationJson(filter: { location: { in: "header" } }) {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)
  return (
    <header className="main-header">
      <nav className="container main-header__container">
        <div className="main-header__logo-container">
          <Link className="main-header__link--logo" to="/">
            {siteTitle}
          </Link>
        </div>
        <div className="main-header__nav-items-container">
          <ul className="main-header__nav-items">
            {data.allNavigationJson.edges.map((item, index) => {
              return (
                <li className="main-header__nav-item" key={index}>
                  <Link className="main-header__link--item" to={item.node.url}>
                    {item.node.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
