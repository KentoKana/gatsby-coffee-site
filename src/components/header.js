import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"
import animations from "../components/animations"
import { StyleRoot } from "radium"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"
import MediaQuery from "react-responsive"

import "../styles/partials/_main-header.scss"

const Header = ({ siteTitle }) => {
  const [isShowing, setisShowing] = useState(true)
  const [menuItemClassName, setMenuItemClassName] = useState(
    "main-header__nav-items"
  )
  const [headerElement, setHeaderElement] = useState(null)
  const [mobileAnimation, setMobileAnimation] = useState({})

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

  useEffect(() => {
    setHeaderElement(document.querySelector("#main-header"))
    return () => {
      clearAllBodyScrollLocks()
    }
  }, [])

  const handleMobileMenu = () => {
    !isShowing ? setisShowing(true) : setisShowing(false)
    if (isShowing) {
      setMenuItemClassName("main-header__nav-items isShowing")
      setMobileAnimation(animations.fadeIn)
      disableBodyScroll(headerElement)
    } else {
      setMenuItemClassName("main-header__nav-items")
      setMobileAnimation(animations.fadeOut)
      enableBodyScroll(headerElement)
    }
  }

  return (
    <header className="main-header">
      <nav className="container main-header__container">
        <div className="main-header__logo-container">
          <Link className="main-header__link--logo" to="/">
            {siteTitle}
          </Link>
        </div>
        <div className="main-header__nav-items-container">
          <StyleRoot>
          {/* REFACTOR PLEASE!!! */}
            <MediaQuery minDeviceWidth={671}>
              <ul className={menuItemClassName} style={mobileAnimation}>
                {data.allNavigationJson.edges.map((item, index) => {
                  return (
                    <li className="main-header__nav-item" key={index}>
                      <Link
                        className="main-header__link--item"
                        to={item.node.url}
                      >
                        {item.node.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={670}>
              <ul
                className={menuItemClassName}
                style={mobileAnimation}
                id="main-header"
              >
                {data.allNavigationJson.edges.map((item, index) => {
                  return (
                    <li
                      className="main-header__nav-item"
                      key={index}
                      onClick={handleMobileMenu}
                    >
                      <Link
                        className="main-header__link--item"
                        to={item.node.url}
                      >
                        {item.node.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </MediaQuery>
          </StyleRoot>
          {/* IMPORT AS SEPARATE COMPONENT */}
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
          <div className="main-header__mobile-menu">
            {isShowing ? (
              <FaBars onClick={handleMobileMenu} />
            ) : (
              <FaTimes
                onClick={handleMobileMenu}
                style={{
                  color: "white",
                  textShadow: "1px 1px 1px rgba(0,0,0,0.8)",
                }}
              />
            )}
          </div>
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
