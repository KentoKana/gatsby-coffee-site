import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import animations from "../components/animations"
import { StyleRoot } from "radium"

// import "../styles/pages/index.scss"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="index">
        <div className="index__container">
          <StyleRoot>
            <div className="container" style={animations.fadeInLeft}></div>
          </StyleRoot>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
