import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import animations from "../components/animations"
import { StyleRoot } from "radium"

import "../styles/pages/index.scss"

// import "../styles/pages/index.scss"
const IndexPage = ({ data }) => {
  useStaticQuery(graphql`
    query IndexQuery {
      allPagesJson(filter: { postType: { ne: "page" } }) {
        edges {
          node {
            path
            title
          }
        }
      }
      indexJson {
        bannerHeading
        featureImage
      }
    }
  `)
  const { allPagesJson } = data
  const { indexJson } = data

  return (
    <Layout>
      <SEO title="Home" />
      <section className="index">
        <Image
          filename={indexJson.featureImage}
          className="index__background-image"
          style={animations.fadeIn}
        />
        <div className="index__container">
          <StyleRoot>
            <div className="container" style={animations.fadeInLeft}>
              <h1>{indexJson.bannerHeading}</h1>
              <div className="index__links-container">
                {allPagesJson.edges.map((link, index) => (
                  <Link key={index} to={link.node.path}>
                    {link.node.title}
                  </Link>
                ))}
              </div>
            </div>
          </StyleRoot>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
