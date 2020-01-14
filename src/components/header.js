import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/partials/main-header.scss"
import "../styles/global.scss"

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
  console.log(data)
  return (
    <header className="main-header">
      <div className="main-header__logo-container container">
        <Link className="main-header__link--logo" to="/">
          {siteTitle}
        </Link>
      </div>
      <div>
        <ul>
          {data.allNavigationJson.edges.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.node.url}>{item.node.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
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
