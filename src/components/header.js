import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaMoon, FaSun } from "react-icons/fa"

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
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <label
                className="main-header__theme-toggle-label"
                title={`Switch To ${
                  theme === "dark" ? "Light Theme" : "Dark Theme"
                }`}
              >
                <input
                  className="main-header__theme-toggle"
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </label>
            )}
          </ThemeToggler>
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
