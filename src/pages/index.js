import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import PostCard from "../components/postCard"
import SEO from "../components/seo"
import animations from "../components/animations"
import { StyleRoot } from "radium"

import "../styles/pages/index.scss"
const IndexPage = ({ data }) => {
  useStaticQuery(
    graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
          }
        }
        indexJson {
          bannerHeading
        }
        allMarkdownRemark(
          filter: { frontmatter: { postType: { eq: "drink" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                featureImage
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <div className="index">
        <div className="index__container">
          <StyleRoot>
            <div className="container" style={animations.fadeInLeft}>
              {data.allMarkdownRemark.edges.map((post, index) => (
                <React.Fragment key={index}>
                  <PostCard post={post} />
                </React.Fragment>
              ))}
            </div>
          </StyleRoot>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
