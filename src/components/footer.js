import React from "react"

import "../styles/partials/_footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          © {new Date().getFullYear()},{" "}
          <a href="https://www.gatsbyjs.org">Gatsby</a> Coffee Theme by Kento Kanazawa
        </div>
      </div>
    </footer>
  )
}

export default Footer
